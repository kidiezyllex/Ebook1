const chapters = [
  // BÌA 1 (cover) - ảnh căn dọc khớp khung đọc
  {
    id: "cover1", page: "1", title: "BÌA 1",
    content: `
      <div style="height:100%; display:flex; align-items:center; justify-content:center;">
        <img src="assets/icons/ebook_img/bia_1.png" alt="Bìa 1" style="max-height:100%; width:auto; display:block; object-fit:contain;" />
      </div>
    `
  },

  // TRANG TRÁCH NHIỆM (centered)
  {
    id: "trach-nhiem", page: "2", title: "TRANG TRÁCH NHIỆM",
    content: `
      <div class="page-center">
      <div class="page-content">
          <div style="height:100%; width:520px; display:flex; align-items:center; justify-content:center; text-align:center; padding: 28px; box-sizing:border-box;">
            <div>
              <h2 style="margin-top:0; margin-bottom:12px;">DẤU CHÂN DU LỊCH VIỆT NAM</h2>
              <p>Không phần nào trong xuất bản phẩm này được xuất bản hoặc phát hành dưới bất kỳ hình thức nào nếu không có sự cho phép của Nhà xuất bản Hà Nội</p>
              <hr>
              <p style="margin-top:18px; font-weight:700;">NHÀ XUẤT BẢN HÀ NỘI</p>
              <p>Số 4, Tống Duy Tân, Hàng Bông, Hoàn Kiếm, Hà Nội<br>
              <strong>Điện thoại:</strong> (024) 3 825 2916 Fax: (024) 3 928 9143</p>

              <p style="margin-top:12px;"><strong>Chịu trách nhiệm xuất bản:</strong><br>
              <strong>Tổng Giám đốc - Tổng Biên tập:</strong><br>
              VŨ VĂN VIỆT</p>

              <p><strong>Biên tập sách điện tử:</strong> Điêu Thị Hải Yến<br>
              <strong>Trình bày:</strong> Lê Minh Hoàng<br>
              <strong>Thiết kế:</strong> Tâm An<br>
              <strong>Kỹ thuật sách điện tử:</strong> Hải Yến<br>
              <strong>Thiết kế bìa sách:</strong> Hà An</p>
              <hr>
              <p style="margin-top:12px;">Giấy chấp nhận đăng ký kế hoạch xuất bản số: 1711-2021/CXBIPH/05-130/HN<br>
              QĐXB số: 1155/QĐ-HN do Nhà xuất bản Hà Nội cấp ngày 1/6/2021<br>
              ISBN: 978-604-55-9560-2. Nộp lưu chiểu năm 2021</p>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // GIỚI THIỆU NỘI DUNG SÁCH
  {
    id: "gioi-thieu-noi-dung", page: "3",
    title: "GIỚI THIỆU NỘI DUNG SÁCH",
    content: `
      <h1>GIỚI THIỆU NỘI DUNG SÁCH</h1>
      <p>“Dấu chân du lịch Việt Nam” là bản thảo được biên soạn công phu, tổng hợp và sưu tầm từ nhiều nguồn tư liệu chính thống, uy tín, bao gồm các báo cáo ngành, nghiên cứu khoa học, văn kiện của Đảng và Nhà nước, cùng hệ thống dữ liệu do các tổ chức trong nước và quốc tế công bố. Mục tiêu của cuốn sách là mang đến cho độc giả một cái nhìn tổng quan, sâu sắc và khách quan về quá trình phát triển du lịch Việt Nam, từ nền tảng lý luận đến thực tiễn vận hành, từ những điều kiện tự nhiên – văn hóa đặc sắc đến các hướng đi chiến lược trong tương lai.</p>

      <p>Trong bối cảnh ngành du lịch Việt Nam đang có bước chuyển mình mạnh mẽ, việc có được một tài liệu tổng hợp, hệ thống và dễ tiếp cận trở nên vô cùng cần thiết. Cuốn sách không chỉ phục vụ nhu cầu tham khảo của các nhà nghiên cứu, giảng viên, sinh viên ngành du lịch, mà còn dành cho độc giả phổ thông có niềm yêu thích khám phá, tìm hiểu về đất nước và con người Việt Nam. Với lối trình bày mạch lạc, kết hợp giữa phân tích lý luận, dẫn chứng thực tiễn và các ví dụ sinh động, “Dấu chân du lịch Việt Nam” giúp người đọc hình dung rõ hơn những giá trị nổi bật đã, đang và sẽ góp phần định hình thương hiệu du lịch quốc gia.</p>

      <p>Một trong những điểm nhấn quan trọng của cuốn sách là khả năng kết nối tài nguyên du lịch phong phú của Việt Nam theo một cấu trúc chặt chẽ. Từ những bãi biển trải dài của Phú Quốc, Nha Trang, Mũi Né đến các di sản thiên nhiên thế giới như Vịnh Hạ Long, Vườn quốc gia Phong Nha – Kẻ Bàng; từ những quần thể di tích lịch sử – văn hóa như Cố đô Huế, Phố cổ Hội An đến bản sắc văn hóa độc đáo của đồng bào các dân tộc miền núi phía Bắc và Tây Nguyên – tất cả được tái hiện bằng góc nhìn hệ thống, hướng đến mục tiêu làm sáng rõ sức hấp dẫn đặc trưng của từng vùng miền. Những địa danh quen thuộc như Sa Pa, Hà Giang, Đà Lạt, Cần Thơ, hay những điểm đến mới nổi như Bình Liêu, Quy Nhơn, Lý Sơn cũng được đề cập như những gợi ý tham khảo thiết thực dành cho độc giả muốn lập kế hoạch du lịch.</p>

      <p>“Dấu chân du lịch Việt Nam” còn là cẩm nang hữu ích dành cho những ai mong muốn khám phá vẻ đẹp đất nước một cách có hệ thống. Gợi ý về những vùng đất đáng đến, những hành trình giàu trải nghiệm, những nét văn hóa đặc sắc và những lễ hội tiêu biểu được trình bày đan xen trong các chương. Từ miền biển Nam Trung Bộ sôi động đến những cao nguyên lộng gió của Tây Nguyên, từ miền Tây sông nước hiền hòa đến những dãy núi hùng vĩ ở Đông Bắc – mỗi điểm đến được mô tả không chỉ bằng vẻ đẹp tự nhiên mà còn bằng các câu chuyện, giá trị văn hóa và chiều sâu lịch sử. Điều này giúp độc giả không đơn thuần “đi và xem”, mà còn hiểu, cảm và ghi nhớ những lớp giá trị ẩn dưới mỗi dấu chân mình đi qua.</p>

      <p>Không chỉ gợi mở điểm đến, cuốn sách còn khơi gợi cảm hứng khám phá Việt Nam một cách có trách nhiệm. Trên từng trang sách, thông điệp về phát triển du lịch bền vững, tôn trọng thiên nhiên, trân quý di sản và giữ gìn văn hóa được nhấn mạnh xuyên suốt. Sự kết hợp giữa tri thức học thuật và tinh thần nhân văn tạo nên một bản thảo vừa hữu ích về mặt nghiên cứu, vừa giàu giá trị truyền cảm hứng cho người đọc.</p>

      <p>Với tất cả những nội dung đó, “Dấu chân du lịch Việt Nam” không chỉ là một công trình tổng hợp thông tin, mà còn là sự kết nối giữa lý luận và thực tiễn, giữa tri thức và trải nghiệm, giữa hành trang quá khứ và định hướng tương lai. Tác phẩm hy vọng sẽ trở thành nguồn tham khảo tin cậy, đồng thời là người bạn đồng hành của mỗi độc giả trên hành trình khám phá đất nước Việt Nam giàu đẹp và đa sắc màu.</p>
    `
  },

  // LỜI NHÀ XUẤT BẢN
  {
    id: "loi-nxb", page: "4", title: "LỜI NHÀ XUẤT BẢN",
    content: `
      <h1>LỜI NHÀ XUẤT BẢN</h1>
      <p>Nhà xuất bản Hà Nội trân trọng giới thiệu đến quý độc giả cuốn sách “Dấu chân du lịch Việt Nam” – công trình biên soạn mang tính tổng hợp và hệ thống, phản ánh toàn diện bức tranh du lịch Việt Nam từ quá khứ, hiện tại đến những triển vọng tương lai. Tác phẩm được xây dựng trên nền tảng tư liệu chính thống, có độ tin cậy cao, kết hợp giữa lý luận chuyên ngành và những dẫn chứng thực tiễn sinh động.</p>

      <p>Cuốn sách mang đến góc nhìn sâu sắc về tài nguyên du lịch, chính sách phát triển, thành tựu, khó khăn, cũng như các định hướng chiến lược nhằm thúc đẩy du lịch Việt Nam phát triển bền vững. Đặc biệt, nội dung còn gợi mở nhiều điểm đến đặc sắc trên khắp mọi miền đất nước, giúp độc giả có thêm cảm hứng khám phá và trải nghiệm.</p>

      <p>Với hình thức trình bày khoa học, ngôn ngữ chuẩn mực và tính ứng dụng cao, “Dấu chân du lịch Việt Nam” là tài liệu tham khảo hữu ích cho nhà quản lý, nhà nghiên cứu, giảng viên, sinh viên và độc giả yêu thích du lịch. Nhà xuất bản Hà Nội tin tưởng rằng cuốn sách sẽ đóng góp tích cực vào việc lan tỏa giá trị văn hóa, lịch sử và vẻ đẹp thiên nhiên của Việt Nam đến đông đảo bạn đọc.</p>

      <p>Chúng tôi trân trọng giới thiệu.</p>
    `
  },

  // LỜI CỦA CÁC TÁC GIẢ SƯU TẦM
  {
    id: "loi-tac-gia", page: "5", title: "LỜI CỦA CÁC TÁC GIẢ SƯU TẦM",
    content: `
      <h1>LỜI CỦA CÁC TÁC GIẢ SƯU TẦM</h1>
      <p>Chúng tôi biên soạn cuốn “Dấu chân du lịch Việt Nam” với mong muốn đóng góp một tài liệu tổng hợp, hệ thống và đáng tin cậy dành cho những ai quan tâm tới sự phát triển của ngành du lịch nước nhà. Tác phẩm được xây dựng trên cơ sở sưu tầm, chọn lọc từ nhiều nguồn tư liệu chính thống, các báo cáo nghiên cứu, văn kiện định hướng và dữ liệu thực tiễn của các cơ quan chuyên môn trong và ngoài nước.</p>

      <p>Trong quá trình thực hiện, chúng tôi nỗ lực bảo đảm tính khách quan, khoa học và độ chính xác cao nhất. Cuốn sách không chỉ nhằm phản ánh hiện trạng và tiềm năng du lịch Việt Nam, mà còn mong muốn góp phần gợi mở những suy nghĩ tích cực về con đường phát triển bền vững trong tương lai.</p>

      <p>Chúng tôi hy vọng rằng những thông tin và góc nhìn được chia sẻ trong sách sẽ trở thành nguồn tham khảo hữu ích, đồng thời mang lại cảm hứng khám phá cho độc giả yêu mến văn hóa và cảnh quan của đất nước. Xin trân trọng cảm ơn sự đồng hành và ủng hộ của quý bạn đọc.</p>
    `
  },

  // -- original content starts here (kept as-is) --
  {
    id: "intro", page: "6", title: "LỜI MỞ ĐẦU",
    content: `
      <h1>LỜI MỞ ĐẦU</h1>
      <p>Du lịch đã và đang trở thành một trong những ngành kinh tế mũi nhọn, đóng góp quan trọng cho sự phát triển kinh tế - xã hội của nhiều quốc gia. Ở Việt Nam, cùng với xu hướng hội nhập và phát triển, du lịch không chỉ là nguồn thu ngoại tệ mà còn là phương tiện để bảo tồn văn hóa, phát triển hạ tầng và góp phần nâng cao đời sống nhân dân.</p>
      <p>Báo cáo này nhằm phân tích thực trạng, nguồn lực, những thuận lợi và khó khăn của ngành du lịch Việt Nam; đồng thời đề xuất các định hướng và giải pháp để phát triển bền vững đến năm 2030 và tầm nhìn 2045.</p>
    `
  },

  {
    id: "ch1", page: "7", title: "CHƯƠNG 1: DU LỊCH VÀ PHÁT TRIỂN DU LỊCH",
    content: `
      <h1>CHƯƠNG 1: DU LỊCH VÀ PHÁT TRIỂN DU LỊCH</h1>

      <h2>1.1. Khái niệm, đặc điểm và phân loại du lịch</h2>
      <p><strong>1.1.1. Khái niệm du lịch và hoạt động du lịch</strong></p>
      <p>Ngày nay du lịch trở thành một hiện tượng kinh tế xã hội phổ biến. Hiệp hội lữ hành quốc tế đã công nhận du lịch là một ngành kinh tế lớn nhất thế giới vượt lên cả ngành sản xuất ô tô, thép điện tử và nông nghiệp. Vì vậy, du lịch đã trở thành một ngành kinh tế mũi nhọn của nhiều quốc gia trên thế giới. Thuật ngữ du lịch đã trở nên khá thông dụng, nó bắt nguồn từ tiếng Hy Lạp với ý nghĩa là đi một vòng. Du lịch gắn liền với nghỉ ngơi, giải trí, tuy nhiên do hoàn cảnh, thời gian và khu vực khác nhau, dưới mỗi góc độ nghiên cứu khác nhau nên khái niệm du lịch cũng không giống nhau.</p>
      <p>Luật Du lịch Việt Nam 2005 đã đưa ra khái niệm như sau: Du lịch là các hoạt động liên quan đến chuyến đi của con người ngoài nơi cư trú thường xuyên của mình nhằm đáp ứng nhu cầu tham quan, tìm hiểu, giải trí, nghỉ dưỡng trong một khoảng thời gian nhất định.</p>
      <p>Theo liên hiệp Quốc các tổ chức lữ hành chính thức( International Union of Official Travel Oragnization: IUOTO): Du lịch được hiểu là hành động du hành đến một nơi khác với địa điểm cư trú thường xuyên của mình nhằm mục đích không phải để làm ăn, tức không phải để làm một nghề hay một việc kiếm tiền sinh sống…</p>
      <p>Tại hội nghị LHQ về du lịch họp tại Roma - Italia ( 21/8 – 5/9/1963), các chuyên gia đưa ra định nghĩa về du lịch: Du lịch là tổng hợp các mối quan hệ, hiện tượng và các hoạt động kinh tế bắt nguồn từ các cuộc hành trình và lưu trú của cá nhân hay tập thể ở bên ngoài nơi ở thường xuyên của họ hay ngoài nước họ với mục đích hòa bình. Nơi họ đến lưu trú không phải là nơi làm việc của họ.</p>
      <p>Du lịch là một hiện tượng: Trước thế kỷ thứ XIX đến tận đầu thế kỷ XX du lịch hầu như vẫn được coi là đặc quyền của tầng lớp giàu có, quý tộc và người ta chỉ coi đây như một hiện tượng cá biệt trong đời sống kinh tế - xã hội. Trong thời kỳ này người ta du lịch như là một hiện tượng xã hội góp phần làm phong phú thêm cuộc sống và nhận thức của con người. Đó là hiện tượng con người rời khỏi nơi cư trú thường xuyên của mình để đến một nơi xa lạ vì nhiều mục đích khác nhau ngoại trừ mục đích kiếm tiền, kiếm việc làm và ở đó họ phải tiêu tiền mà họ đã kiếm được ở nơi khác.</p>
      <p>Điều 3 Luật Du lịch 2017 quy định: Du lịch là các hoạt động có liên quan đến chuyến đi của con người ngoài nơi cư trú thường xuyên trong thời gian không quá 01 năm liên tục nhằm đáp ứng nhu cầu tham quan, nghỉ dưỡng, giải trí, tìm hiểu, khám phá tài nguyên du lịch hoặc kết hợp với mục đích hợp pháp khác. Hoạt động du lịch là hoạt động của khách du lịch, tổ chức, cá nhân kinh doanh du lịch và cơ quan, tổ chức, cá nhân, cộng đồng dân cư có liên quan đến du lịch.</p>

      <h2>1.2. Vai trò của du lịch trong phát triển kinh tế - xã hội</h2>
      <p><strong>Du lịch với tăng trưởng kinh tế và xuất khẩu dịch vụ</strong></p>
      <p>Du lịch làm tăng nguồn thu ngân sách cho các địa phương phát triển du lịch. Hoạt động du lịch phát triển tạo nguồn thu ngân sách cho các địa phương từ các khoản trích nộp ngân sách của các cơ sở du lịch trực thuộc quản lý trực tiếp của địa phương và từ các khoản thuế phải nộp của các doanh nghiệp du lịch kinh doanh trên địa bàn. Du lịch góp phần thúc đẩy các ngành kinh tế khác phát triển theo.</p>
      <p>Trước hết, hoạt động kinh doanh du lịch đòi hỏi sự hỗ trợ liên ngành. Yêu cầu về sự hỗ trợ liên ngành là cơ sở cho các ngành khác (như giao thông vận tải, tài chính, bưu điện, công nghiệp, nông nghiệp, hải quan v.v...) phát triển. Đối với nền sản xuất xã hội du lịch mở ra một thị trường tiêu thụ hàng hoá. Mặt khác, sự phát triển du lịch tạo ra các điều kiện để khách du lịch tìm hiểu thị trường, ký kết hợp đồng về sản xuất kinh doanh trong nước, tận dụng các cơ sở vật chất kỹ thuật ở các ngành kinh tế khác.</p>
      <p>Phát triển du lịch sẽ mở mang, hoàn thiện cơ sở hạ tầng kinh tế như mạng lưới giao thông công cộng, mạng lưới điện nước, các phương tiện thông tin đại chúng v.v... Đặc biệt là ở những vùng phát triển du lịch, do xuất hiện các nhu cầu đi lại, vận chuyển thông tin liên lạc v.v... của khách du lịch, cũng như những điều kiện cần thiết cho cơ sở kinh doanh du lịch hoạt động nên các ngành này phát triển. Mặt khác, khách không chỉ dừng lại ở điểm du lịch mà trước đó và sau đó khách có nhu cầu đi lại giữa các điểm du lịch và trên cơ sở đó ngành giao thông vận tải phát triển.</p>
      <p>Du lịch là hoạt động xuất khẩu có hiệu quả cao nhất tính hiệu quả cao trong kinh doanh du lịch thể hiện trước nhất ở chỗ du lịch là một ngành “xuất khẩu tại chỗ” những hàng hoá công nghiệp, hàng tiêu dùng, thủ công mỹ nghệ, đồ cổ phục chế, nông lâm sản v.v... theo giá bán lẻ cao hơn (nếu như bán qua xuất khẩu sẽ theo giá bán buôn). Được trao đổi thông qua con đường du lịch, các hàng hoá được xuất khẩu mà không phải chịu hàng rào thuế quan mậu dịch quốc tế.</p>
      <p></p>

      <h2>1.3. Các yếu tố ảnh hưởng đến phát triển du lịch</h2>
      <p>Tài nguyên du lịch nhân văn bao gồm truyền thống văn hóa, các yếu tố văn hoá văn nghệ dân gian, di tích lịch sử, cách mạng, khảo cổ, kiến trúc, các công trình lao động sáng tạo của con người và di sản văn hóa vật thể, phi vật thể khác có thể được sử dụng phục vụ mục đích du lịch.</p>
      <p>Di tích lịch sử, văn hóa: Các công trình xây dựng, địa điểm và các di vật, bảo vật quốc gia thuộc công trình, địa điểm có giá trị lịch sử, văn hóa, khoa học.Trung tâm kinh tế, văn hóa cổ đại giữ gìn bảo tồn được nhiều công trình lịch sử, văn hóa phong kiến như Ai Cập, Hy Lạp, Italia, Trung Quốc, Ấn Độ, Thổ Nhĩ Kỳ,...</p>
      <p>Di tích văn hóa nghệ thuật: các công trình kiến trúc có giá trị , các tác phẩm nghệ thuật nổi tiếng, các trường đại học, thư viện quốc gia,…( Kim Tự Tháp, Đấu trường La Mã, Tháp nghiêng Pisa, Tháp Effen, Vạn Lý trường thành, Kinh đô Huế). Di tích lịch sử - ghi dấu các sự kiện lịch sử, đặc điểm lịch sử tiêu biểu của các dân tộc trong quá trình phát triển.</p>
      <p>Di chỉ khảo cổ học: Các di chỉ cư trí hay mộ táng về những thời kỳ lịch sử vào thời gian nào đó tròn lịch sử phát triển của xã hội loài người như các thành phố cổ, các khu mộ cổ, thánh địa cổ,…( Thánh địa Mỹ Sơn, Thánh địa Cát Tiên, Angkor wat, thành phố cổ Tanis, thành phố cổ Pompei, khu lăng mộ Tần Thủy Hoàng,…  	</p>
      <p></p>
    `
  },

  {
    id: "ch2", page: "8", title: "CHƯƠNG 2: QUAN ĐIỂM CỦA ĐẢNG VÀ NHÀ NƯỚC VỀ PHÁT TRIỂN DU LỊCH",
    content: `
      <h1>CHƯƠNG 2: QUAN ĐIỂM CỦA ĐẢNG VÀ NHÀ NƯỚC VỀ PHÁT TRIỂN DU LỊCH</h1>

      <h2>2.1. Quan điểm chung về phát triển du lịch bền vững</h2>
      <p>Phát triển du lịch phải gắn với bảo tồn môi trường và di sản, đảm bảo lợi ích lâu dài cho cộng đồng địa phương và tránh phá vỡ cân bằng sinh thái. Nhà nước khuyến khích mô hình du lịch thân thiện môi trường, du lịch cộng đồng và sản phẩm du lịch đa dạng nhưng có trách nhiệm với tài nguyên.</p>

      <h2>2.2. Hoàn thiện khung pháp lý về du lịch</h2>
      <p>Hoàn thiện hệ thống văn bản pháp luật, quy chuẩn, tiêu chuẩn chất lượng dịch vụ và quản lý điểm du lịch là cần thiết để tạo hành lang pháp lý rõ ràng cho cả doanh nghiệp và người dân. Việc quản lý hoạt động du lịch cần minh bạch, có công cụ kiểm soát và các chính sách hỗ trợ phù hợp.</p>

      <h2>2.3. Chương trình hành động và các đề án triển khai Nghị quyết số 08-NQ/TW</h2>
      <p>Nhiều chương trình hành động tập trung vào nâng cao năng lực quản lý nhà nước, phát triển nguồn nhân lực, xúc tiến quảng bá và cải thiện cơ sở hạ tầng. Triển khai nghị quyết đòi hỏi sự phối hợp liên ngành và nguồn lực đầu tư có trọng tâm.</p>

      <h2>2.4. Chiến lược phát triển du lịch Việt Nam đến năm 2030</h2>
      <p>Chiến lược đề ra mục tiêu tăng chất lượng và giá trị gia tăng của ngành du lịch, hướng tới trở thành ngành kinh tế mũi nhọn, phát triển sản phẩm du lịch có sức cạnh tranh quốc tế, gắn kết với bảo tồn văn hóa và bảo vệ môi trường.</p>

      <h2>2.5. Vai trò của du lịch văn hóa trong chiến lược phát triển quốc gia</h2>
      <p>Du lịch văn hóa giúp giữ gìn, phát huy bản sắc dân tộc, đồng thời tạo sản phẩm du lịch đặc sắc, thu hút khách quốc tế. Nhà nước khuyến khích phục dựng, tôn tạo di tích, lễ hội và phát triển du lịch dựa trên giá trị văn hóa bản địa.</p>
    `
  },

  {
    id: "ch3", page: "9", title: "CHƯƠNG 3: TÀI NGUYÊN DU LỊCH VIỆT NAM",
    content: `
      <h1>CHƯƠNG 3: TÀI NGUYÊN DU LỊCH VIỆT NAM</h1>

      <h2>3.1. Tài nguyên du lịch tự nhiên</h2>
      <p>Việt Nam sở hữu nhiều tài nguyên thiên nhiên phong phú: bờ biển dài, vịnh đẹp (Hạ Long, Nha Trang), dãy núi cao (Hà Giang, Sa Pa), hệ sinh thái rừng, vùng đất ngập nước, và nhiều cảnh quan đa dạng. Đây là nền tảng cho du lịch nghỉ dưỡng, sinh thái và mạo hiểm.</p>
      <p>Bảo vệ hệ sinh thái, quản lý tài nguyên hợp lý là điều kiện tiên quyết để phát triển lâu dài các sản phẩm du lịch dựa trên thiên nhiên.</p>

      <h2>3.2. Tài nguyên du lịch văn hóa - lịch sử</h2>
      <p>Việt Nam có bề dày lịch sử và nền văn hóa phong phú với nhiều di tích, lễ hội, truyền thống nghề thủ công và ẩm thực đặc sắc. Các di sản thế giới và di tích quốc gia là yếu tố hấp dẫn du khách trong và ngoài nước.</p>
      <p>Phát triển tour du lịch văn hóa cần kết hợp câu chuyện, trải nghiệm địa phương và đảm bảo bảo tồn giá trị lịch sử gốc.</p>
    `
  },

  {
    id: "ch4", page: "10", title: "CHƯƠNG 4: PHÁT TRIỂN DU LỊCH VIỆT NAM THỜI KỲ ĐỔI MỚI",
    content: `
      <h1>CHƯƠNG 4: PHÁT TRIỂN DU LỊCH VIỆT NAM THỜI KỲ ĐỔI MỚI</h1>

      <h2>4.1. Tăng trưởng về quy mô và đóng góp kinh tế</h2>
      <p>Từ khi mở cửa và đổi mới, du lịch Việt Nam đã tăng trưởng mạnh về lượt khách, doanh thu và số lượng cơ sở lưu trú. Du lịch góp phần tạo việc làm, thúc đẩy xuất khẩu dịch vụ và phát triển kinh tế địa phương.</p>

      <h2>4.2. Phát triển các loại hình và sản phẩm du lịch</h2>
      <p>Đã xuất hiện đa dạng sản phẩm: du lịch biển đảo, du lịch văn hóa, du lịch sinh thái, du lịch nông nghiệp, du lịch cộng đồng và du lịch MICE. Sự đa dạng này giúp kéo dài mùa vụ, tăng lựa chọn cho du khách và giảm áp lực lên điểm nóng du lịch truyền thống.</p>

      <h2>4.3. Hệ thống cơ sở vật chất và dịch vụ du lịch</h2>
      <p>Hạ tầng giao thông, sân bay, cảng biển và hệ thống khách sạn ngày càng được đầu tư. Tuy nhiên chất lượng dịch vụ, tiêu chuẩn vệ sinh, an toàn và nguồn nhân lực vẫn cần nâng cao để đáp ứng yêu cầu khách cao cấp và quốc tế.</p>
    `
  },

  {
    id: "ch5", page: "11", title: "CHƯƠNG 5: DU LỊCH CÁC VÙNG KINH TẾ TRỌNG ĐIỂM",
    content: `
      <h1>CHƯƠNG 5: DU LỊCH CÁC VÙNG KINH TẾ TRỌNG ĐIỂM</h1>

      <h2>5.1. Vùng Đồng bằng sông Hồng</h2>
      <p>Vùng Đồng bằng sông Hồng là trung tâm hành chính, kinh tế và văn hóa với thủ đô Hà Nội. Vùng này nổi bật với di sản văn hóa, di tích lịch sử và các điểm du lịch kết hợp trải nghiệm đô thị.</p>

      <h2>5.2. Vùng Bắc Trung Bộ và Duyên hải miền Trung</h2>
      <p>Đây là khu vực có nhiều di sản, bãi biển kéo dài và nền ẩm thực phong phú. Các thành phố như Huế, Đà Nẵng, Hội An thu hút du khách nhờ giá trị văn hóa và cảnh quan biển.</p>

      <h2>5.3. Vùng Đông Nam Bộ và Đồng bằng sông Cửu Long</h2>
      <p>Vùng Đông Nam Bộ có nền du lịch phát triển mạnh (TP. HCM, Vũng Tàu, Phú Quốc). Đồng bằng sông Cửu Long nổi bật với du lịch miệt vườn, sông nước, văn hóa dân gian và nông nghiệp trải nghiệm.</p>
    `
  },

  {
    id: "ch6", page: "12", title: "CHƯƠNG 6: DU LỊCH VÙNG TÂY NGUYÊN VÀ CÁC TỈNH MIỀN NÚI PHÍA BẮC",
    content: `
      <h1>CHƯƠNG 6: DU LỊCH VÙNG TÂY NGUYÊN VÀ CÁC TỈNH MIỀN NÚI PHÍA BẮC</h1>

      <h2>6.1. Du lịch Tây Nguyên</h2>
      <p>Tây Nguyên có cảnh quan núi rừng, cao nguyên cà phê, văn hóa các dân tộc thiểu số với lễ hội, âm nhạc độc đáo. Du lịch cộng đồng và trải nghiệm nông nghiệp (thu hoạch cà phê, nghề thủ công) là thế mạnh để khai thác.</p>

      <h2>6.2. Du lịch miền núi phía Bắc</h2>
      <p>Miền núi phía Bắc (Sapa, Hà Giang...) nổi tiếng bởi cảnh quan hùng vĩ, ruộng bậc thang, văn hóa đặc sắc của đồng bào dân tộc. Phát triển du lịch cần chú trọng bảo vệ môi trường và giữ gìn văn hóa truyền thống.</p>
    `
  },

  {
    id: "ch7", page: "13", title: "CHƯƠNG 7: HẠN CHẾ VÀ THÁCH THỨC CỦA DU LỊCH VIỆT NAM",
    content: `
      <h1>CHƯƠNG 7: HẠN CHẾ VÀ THÁCH THỨC CỦA DU LỊCH VIỆT NAM</h1>

      <h2>7.1. Những hạn chế, tồn tại</h2>
      <p>Một số hạn chế gồm: chất lượng dịch vụ chưa đồng đều, hạ tầng tại điểm đến còn yếu, tình trạng quá tải ở một vài điểm nóng, vấn đề ô nhiễm môi trường và quản lý du lịch thiếu chặt chẽ. Ngoài ra, năng lực cạnh tranh quốc tế của một số sản phẩm du lịch còn hạn chế.</p>

      <h2>7.2. Nguyên nhân của những hạn chế</h2>
      <p>Nguyên nhân bao gồm thiếu đầu tư có trọng điểm, phân tán nguồn lực, đào tạo nguồn nhân lực chưa phù hợp, quy hoạch và quản lý điểm đến chưa đồng bộ, cũng như tác động của biến đổi khí hậu và các rủi ro toàn cầu như đại dịch.</p>
    `
  },

  {
    id: "ch8", page: "14", title: "CHƯƠNG 8: KINH NGHIỆM PHÁT TRIỂN DU LỊCH CỦA MỘT SỐ NƯỚC",
    content: `
      <h1>CHƯƠNG 8: KINH NGHIỆM PHÁT TRIỂN DU LỊCH CỦA MỘT SỐ NƯỚC</h1>

      <h2>8.1. Kinh nghiệm các nước châu Á</h2>
      <p>Nhiều quốc gia châu Á như Thái Lan, Nhật Bản, Hàn Quốc và Singapore đã phát triển du lịch bằng cách kết hợp quảng bá thương hiệu, đầu tư hạ tầng, phát triển sản phẩm đặc thù (ẩm thực, văn hóa, mua sắm) và cải thiện dịch vụ. Họ cũng tập trung vào quy hoạch điểm đến và quản lý lượng khách.</p>

      <h2>8.2. Bài học cho Việt Nam</h2>
      <p>Việt Nam có thể học hỏi cách xây dựng thương hiệu điểm đến, nâng cao chất lượng nhân lực, triển khai chương trình xúc tiến lâu dài và tối ưu hóa liên kết vùng. Việc áp dụng công nghệ số trong quản lý, phân phối sản phẩm và tiếp thị cũng là bài học quan trọng.</p>
    `
  },

  {
    id: "ch9", page: "15", title: "CHƯƠNG 9: ĐỊNH HƯỚNG PHÁT TRIỂN DU LỊCH VIỆT NAM ĐẾN 2030, TẦM NHÌN 2045",
    content: `
      <h1>CHƯƠNG 9: ĐỊNH HƯỚNG PHÁT TRIỂN DU LỊCH VIỆT NAM ĐẾN 2030, TẦM NHÌN 2045</h1>

      <h2>9.1. Bối cảnh và xu hướng phát triển</h2>
      <p>Xu hướng toàn cầu cho thấy du khách tìm kiếm trải nghiệm cá nhân hóa, bền vững và có trách nhiệm với môi trường. Công nghệ số, du lịch thông minh và các trải nghiệm văn hóa địa phương được ưa chuộng. Việt Nam cần tận dụng lợi thế tự nhiên và văn hóa để phát triển các sản phẩm phù hợp.</p>

      <h2>9.2. Quan điểm và mục tiêu phát triển</h2>
      <p>Mục tiêu là xây dựng du lịch thành ngành kinh tế mũi nhọn, tăng giá trị trên mỗi khách, phân bố đều lợi ích cho các vùng miền và đảm bảo phát triển bền vững. Quan điểm phát triển cần gắn kết du lịch với bảo tồn tài nguyên, phát triển cộng đồng và chuyển đổi số.</p>
    `
  },

  {
    id: "ch10", page: "16", title: "CHƯƠNG 10: GIẢI PHÁP PHÁT TRIỂN DU LỊCH VIỆT NAM",
    content: `
      <h1>CHƯƠNG 10: GIẢI PHÁP PHÁT TRIỂN DU LỊCH VIỆT NAM</h1>

      <p>Để phát triển du lịch bền vững, cần có một loạt giải pháp đồng bộ từ chính sách, hạ tầng, nguồn nhân lực đến xúc tiến thương mại:</p>

      <ul>
        <li><strong>Hoàn thiện chính sách:</strong> Xây dựng khung pháp lý rõ ràng, chính sách ưu đãi cho đầu tư vào hạ tầng du lịch và hỗ trợ doanh nghiệp nhỏ.</li>
        <li><strong>Phát triển sản phẩm:</strong> Đa dạng hóa sản phẩm du lịch, chú trọng du lịch chất lượng cao, du lịch xanh và du lịch cộng đồng.</li>
        <li><strong>Nâng cao năng lực:</strong> Đào tạo nguồn nhân lực chuyên nghiệp, nâng chuẩn dịch vụ và quản lý điểm đến.</li>
        <li><strong>Đầu tư hạ tầng:</strong> Cải thiện giao thông kết nối, hệ thống lưu trú, dịch vụ y tế và an toàn cho du khách.</li>
        <li><strong>Xúc tiến, quảng bá:</strong> Sử dụng công nghệ số, phối hợp quốc tế và thương hiệu hóa điểm đến.</li>
        <li><strong>Bảo vệ môi trường và văn hóa:</strong> Áp dụng tiêu chuẩn thân thiện môi trường, tôn trọng bản sắc văn hóa địa phương.</li>
      </ul>

      <p>Sự phối hợp giữa trung ương và địa phương, cùng với sự tham gia của cộng đồng và khu vực tư nhân, là yếu tố quyết định để thực hiện các giải pháp này hiệu quả.</p>
    `
  },

  {
    id: "refs", page: "17", title: "TÀI LIỆU THAM KHẢO",
    content: `
      <h1>TÀI LIỆU THAM KHẢO</h1>
      <p>1. Báo cáo Chiến lược phát triển du lịch Việt Nam (tài liệu tham khảo - ví dụ).</p>
      <p>2. Các nghiên cứu, bài báo khoa học về du lịch bền vững, quản lý điểm đến và phát triển sản phẩm du lịch.</p>
      <p>3. Các nguồn thông tin chính thức từ Bộ Văn hóa, Thể thao và Du lịch Việt Nam, các ấn phẩm địa phương và tài liệu quốc tế về phát triển du lịch.</p>
    `
  },

  {
    id: "cover4", page: "18", title: "BÌA 4",
    content: `
      <div style="height:100%; display:flex; align-items:center; justify-content:center;">
        <img src="assets/icons/ebook_img/bia_4.jpg" alt="Bìa 4" style="max-height:100%; width:auto; display:block; object-fit:contain;" />
      </div>
    `
  },
];