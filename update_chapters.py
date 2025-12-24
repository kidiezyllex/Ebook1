import re

file_path = r'c:\Users\DELL\Videos\Ebook1\data\chapters.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match: <p class="p-base">([a-z]\..*?)</p>
# Examples: a. , b. , c.
pattern = r'<p class="p-base">(\s*[a-z]\..*?)</p>'

# Replacement function
def replace_match(match):
    inner_content = match.group(1)
    return f'<h2 class="h2-indent">{inner_content}</h2>'

new_content, count = re.subn(pattern, replace_match, content)

print(f"Replaced {count} occurrences of a., b., c. patterns.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
