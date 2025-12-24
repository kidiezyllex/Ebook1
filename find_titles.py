import re

file_path = r'c:\Users\DELL\Videos\Ebook1\data\chapters.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Look for patterns that MIGHT be what the user wants
# Case 1: a. b. c.
# Case 2: a) b) c) (maybe?)
# Case 3: Uppercase A. B. C.

matches = re.findall(r'<p class="p-base">(\s*[a-zA-Z][.)].*?)</p>', content)

for m in matches[:20]:
    print(f"Match: {m}")

print(f"Total found: {len(matches)}")
