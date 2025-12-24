const chapters = [
  // BÌA 1 (cover)
  {
    id: "cover1", page: "1", title: "BÌA 1",
    content: `
      <div style="height:100%; display:flex; align-items:center; justify-content:center;">
        <img src="assets/icons/ebook_img/bia_1.png" alt="Bìa 1" style="max-height:100%; width:auto; display:block; object-fit:contain;" />
      </div>
    `
  },

  // MỤC LỤC 1 (Page 2)
  {
    id: "muc-luc-1", page: "2", title: "MỤC LỤC",
    content: `
      <div class="toc-page-list">
        <h1 class="h1-center">MỤC LỤC</h1>

        <div class="toc-row"><div class="toc-label toc-level-1">GIỚI THIỆU NỘI DUNG SÁCH</div><div class="toc-page-num">1</div></div>
        <div class="toc-row"><div class="toc-label toc-level-1">LỜI NHÀ XUẤT BẢN</div><div class="toc-page-num">3</div></div>
        <div class="toc-row"><div class="toc-label toc-level-1">LỜI CỦA CÁC TÁC GIẢ SƯU TẦM</div><div class="toc-page-num">4</div></div>
        <div class="toc-row"><div class="toc-label toc-level-1">LỜI MỞ ĐẦU</div><div class="toc-page-num">5</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 1: DU LỊCH VÀ PHÁT TRIỂN DU LỊCH</div><div class="toc-page-num">10</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">1.1. Khái niệm, đặc điểm và phân loại du lịch</div><div class="toc-page-num">10</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">1.2. Vai trò của du lịch trong phát triển kinh tế - xã hội</div><div class="toc-page-num">17</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">1.3. Các yếu tố ảnh hưởng đến phát triển du lịch</div><div class="toc-page-num">30</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 2: QUAN ĐIỂM CỦA ĐẢNG VÀ NHÀ NƯỚC VỀ PHÁT TRIỂN DU LỊCH</div><div class="toc-page-num">41</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">2.1. Quan điểm chung về phát triển du lịch bền vững</div><div class="toc-page-num">41</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">2.2. Hoàn thiện khung pháp lý về du lịch</div><div class="toc-page-num">41</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">2.3. Chương trình hành động và các đề án triển khai Nghị quyết số 08-NQ/TW</div><div class="toc-page-num">42</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">2.4. Chiến lược phát triển du lịch Việt Nam đến năm 2030</div><div class="toc-page-num">42</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">2.5. Vai trò của du lịch văn hóa trong chiến lược phát triển quốc gia</div><div class="toc-page-num">43</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 3: TÀI NGUYÊN DU LỊCH VIỆT NAM</div><div class="toc-page-num">44</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">3.1. Tài nguyên du lịch tự nhiên</div><div class="toc-page-num">44</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">3.2. Tài nguyên du lịch văn hóa - lịch sử</div><div class="toc-page-num">61</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 4: PHÁT TRIỂN DU LỊCH VIỆT NAM THỜI KỲ ĐỔI MỚI</div><div class="toc-page-num">79</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">4.1. Tăng trưởng về quy mô và đóng góp kinh tế</div><div class="toc-page-num">79</div></div>
      </div>
    `
  },

  // MỤC LỤC 2 (Page 3)
  {
    id: "muc-luc-2", page: "3", title: "MỤC LỤC (tiếp)",
    content: `
      <div class="toc-page-list">
        <div class="toc-row"><div class="toc-label toc-level-2">4.2. Phát triển các loại hình và sản phẩm du lịch</div><div class="toc-page-num">89</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">4.3. Hệ thống cơ sở vật chất và dịch vụ du lịch</div><div class="toc-page-num">103</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 5: DU LỊCH CÁC VÙNG KINH TẾ TRỌNG ĐIỂM</div><div class="toc-page-num">118</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">5.1. Vùng Đồng bằng sông Hồng</div><div class="toc-page-num">118</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">a) Hà Nội - Trung tâm du lịch văn hóa, chính trị</div><div class="toc-page-num">118</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">b) Quảng Ninh - Vịnh Hạ Long kỳ quan thế giới</div><div class="toc-page-num">120</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">c) Ninh Bình - Tràng An và danh thắng Tam Cốc, Bích Động</div><div class="toc-page-num">123</div></div>

        <div class="toc-row"><div class="toc-label toc-level-2">5.2. Vùng Bắc Trung Bộ và Duyên hải miền Trung</div><div class="toc-page-num">126</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">a) Nghệ An - Biển xanh và dấu ấn cách mạng trường tồn</div><div class="toc-page-num">126</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">b) Quảng Bình cũ (Quảng Trị) - Vương quốc hang động</div><div class="toc-page-num">133</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">c) Thừa Thiên Huế - Cố đô và di sản văn hóa triều Nguyễn</div><div class="toc-page-num">136</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">d) Đà Nẵng - phát triển du lịch năng động</div><div class="toc-page-num">139</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">e) Khánh Hòa - Du lịch biển đẳng cấp quốc tế</div><div class="toc-page-num">143</div></div>

        <div class="toc-row"><div class="toc-label toc-level-2">5.3. Vùng Đông Nam Bộ và Đồng bằng sông Cửu Long</div><div class="toc-page-num">146</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">a) Thành phố Hồ Chí Minh - Trung tâm du lịch lớn nhất cả nước</div><div class="toc-page-num">147</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">b) Đồng bằng sông Cửu Long - Du lịch sông nước, vườn trái cây</div><div class="toc-page-num">149</div></div>
        <div class="toc-row"><div class="toc-label toc-level-3">c) Phú Quốc (An Giang) - “Đảo Ngọc” điểm đến nghỉ dưỡng cao cấp</div><div class="toc-page-num">151</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 6: DU LỊCH VÙNG TÂY NGUYÊN VÀ CÁC TỈNH MIỀN NÚI PHÍA BẮC</div><div class="toc-page-num">155</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">6.1. Du lịch Tây Nguyên</div><div class="toc-page-num">155</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">6.2. Du lịch miền núi phía Bắc</div><div class="toc-page-num">162</div></div>
      </div>
    `
  },

  // MỤC LỤC 3 (Page 4 - NEW)
  {
    id: "muc-luc-3", page: "4", title: "MỤC LỤC (tiếp)",
    content: `
      <div class="toc-page-list">
        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 7: HẠN CHẾ VÀ THÁCH THỨC CỦA DU LỊCH VIỆT NAM</div><div class="toc-page-num">176</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">7.1. Những hạn chế, tồn tại</div><div class="toc-page-num">176</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">7.2. Nguyên nhân của những hạn chế</div><div class="toc-page-num">177</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 8: KINH NGHIỆM PHÁT TRIỂN DU LỊCH CỦA MỘT SỐ NƯỚC</div><div class="toc-page-num">179</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">8.1. Kinh nghiệm các nước châu Á</div><div class="toc-page-num">179</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">8.2. Bài học cho Việt Nam</div><div class="toc-page-num">191</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 9: ĐỊNH HƯỚNG PHÁT TRIỂN DU LỊCH VIỆT NAM ĐẾN 2030, TẦM NHÌN 2045</div><div class="toc-page-num">201</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">9.1. Bối cảnh và xu hướng phát triển</div><div class="toc-page-num">201</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">9.2. Quan điểm, mục tiêu phát triển</div><div class="toc-page-num">204</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">CHƯƠNG 10: GIẢI PHÁP PHÁT TRIỂN DU LỊCH VIỆT NAM</div><div class="toc-page-num">206</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">10.1. Tăng cường vai trò lãnh đạo của Đảng, quản lý của Nhà nước</div><div class="toc-page-num">206</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">10.2. Hoàn thiện thể chế, chính sách</div><div class="toc-page-num">215</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">10.3. Phát triển sản phẩm du lịch đặc trưng, chất lượng cao</div><div class="toc-page-num">222</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">10.4. Đầu tư phát triển cơ sở hạ tầng</div><div class="toc-page-num">231</div></div>
        <div class="toc-row"><div class="toc-label toc-level-2">10.5. Phát triển nguồn nhân lực chất lượng cao</div><div class="toc-page-num">239</div></div>

        <div class="toc-row"><div class="toc-label toc-level-1">TÀI LIỆU THAM KHẢO</div><div class="toc-page-num">252</div></div>
        <div class="toc-row"><div class="toc-label toc-level-1">1. DANH MỤC BẢNG BIỂU</div><div class="toc-page-num">254</div></div>
        <div class="toc-row"><div class="toc-label toc-level-1">2. CÁC YẾU TỐ ĐA PHƯƠNG TIỆN SỬ DỤNG TRONG BẢN THẢO</div><div class="toc-page-num">257</div></div>
        <div class="toc-row"><div class="toc-label toc-level-1">3. DANH MỤC FOOTNOTE (chú thích)</div><div class="toc-page-num">271</div></div>
      </div>
    `
  },

  // TRANG TRÁCH NHIỆM (Page 5)
  {
    id: "trach-nhiem", page: "5", title: "TRANG TRÁCH NHIỆM",
    content: `
      <div class="content-container" style="text-align: center;">
        <h3 class="h3-uppercase">DẤU CHÂN DU LỊCH VIỆT NAM</h3>
        
        <p class="p-base">Không phần nào trong xuất bản phẩm này được xuất bản hoặc phát hành dưới bất kỳ hình thức nào nếu không có sự cho phép của Nhà xuất bản Hà Nội</p>
        
        <div style="width: 50%; border-top: 1px solid #999; margin: 15px auto;"></div>
        
        <h4 class="h4-uppercase">NHÀ XUẤT BẢN HÀ NỘI</h4>
        <p class="p-base">Số 4, Tống Duy Tân, Hàng Bông, Hoàn Kiếm, Hà Nội</p>
        <p class="p-base"><strong>Điện thoại:</strong> (024) 3 825 2916 &nbsp;&nbsp; <strong>Fax:</strong> (024) 3 928 9143</p>

        <div style="margin-bottom: 15px;">
          <p class="p-base"><strong>Chịu trách nhiệm xuất bản:</strong></p>
          <p class="p-base"><strong>Tổng Giám đốc - Tổng Biên tập:</strong></p>
          <p class="p-base" style="font-weight: bold; text-transform: uppercase;">VŨ VĂN VIỆT</p>
        </div>

        <div style="margin-bottom: 15px; line-height: 1.6;">
          <p class="p-base"><strong>Biên tập sách điện tử:</strong> Điêu Thị Hải Yến</p>
          <p class="p-base"><strong>Trình bày:</strong> Lê Minh Hoàng</p>
          <p class="p-base"><strong>Thiết kế:</strong> Tâm An</p>
          <p class="p-base"><strong>Kỹ thuật sách điện tử:</strong> Hải Yến</p>
          <p class="p-base"><strong>Thiết kế bìa sách:</strong> Hà An</p>
        </div>
        
        <div style="width: 50%; border-top: 1px solid #999; margin: 15px auto;"></div>
        
        <div style="font-size: 0.9em;">
          <p class="p-base">Giấy chấp nhận đăng ký kế hoạch xuất bản số: 1711-2021/CXBIPH/05-130/HN</p>
          <p class="p-base">QĐXB số: 1155/QĐ-HN do Nhà xuất bản Hà Nội cấp ngày 1/6/2021</p>
          <p class="p-base">ISBN: 978-604-55-9560-2. Nộp lưu chiểu năm 2021</p>
        </div>
      </div>
    `
  },

  // GIỚI THIỆU NỘI DUNG SÁCH (Page 6)
  {
    id: "gioi-thieu-noi-dung", page: "6",
    title: "GIỚI THIỆU NỘI DUNG SÁCH",
    content: `
      <div class="content-container">
        <h1 class="h1-center">GIỚI THIỆU NỘI DUNG SÁCH</h1>
        <p class="p-justify">"Dấu chân du lịch Việt Nam" là bản thảo được biên soạn công phu, tổng hợp và sưu tầm từ nhiều nguồn tư liệu chính thống, uy tín, bao gồm các báo cáo ngành, nghiên cứu khoa học, văn kiện của Đảng và Nhà nước, cùng hệ thống dữ liệu do các tổ chức trong nước và quốc tế công bố. Mục tiêu của cuốn sách là mang đến cho độc giả một cái nhìn tổng quan, sâu sắc và khách quan về quá trình phát triển du lịch Việt Nam, từ nền tảng lý luận đến thực tiễn vận hành, từ những điều kiện tự nhiên – văn hóa đặc sắc đến các hướng đi chiến lược trong tương lai.</p>

        <p class="p-justify">Trong bối cảnh ngành du lịch Việt Nam đang có bước chuyển mình mạnh mẽ, việc có được một tài liệu tổng hợp, hệ thống và dễ tiếp cận trở nên vô cùng cần thiết. Cuốn sách không chỉ phục vụ nhu cầu tham khảo của các nhà nghiên cứu, giảng viên, sinh viên ngành du lịch, mà còn dành cho độc giả phổ thông có niềm yêu thích khám phá, tìm hiểu về đất nước và con người Việt Nam. Với lối trình bày mạch lạc, kết hợp giữa phân tích lý luận, dẫn chứng thực tiễn và các ví dụ sinh động, "Dấu chân du lịch Việt Nam" giúp người đọc hình dung rõ hơn những giá trị nổi bật đã, đang và sẽ góp phần định hình thương hiệu du lịch quốc gia.</p>

        <p class="p-justify">Một trong những điểm nhấn quan trọng của cuốn sách là khả năng kết nối tài nguyên du lịch phong phú của Việt Nam theo một cấu trúc chặt chẽ. Từ những bãi biển trải dài của Phú Quốc, Nha Trang, Mũi Né đến các di sản thiên nhiên thế giới như Vịnh Hạ Long, Vườn quốc gia Phong Nha – Kẻ Bàng; từ những quần thể di tích lịch sử – văn hóa như Cố đô Huế, Phố cổ Hội An đến bản sắc văn hóa độc đáo của đồng bào các dân tộc miền núi phía Bắc và Tây Nguyên – tất cả được tái hiện bằng góc nhìn hệ thống, hướng đến mục tiêu làm sáng rõ sức hấp dẫn đặc trưng của từng vùng miền. Những địa danh quen thuộc như Sa Pa, Hà Giang, Đà Lạt, Cần Thơ, hay những điểm đến mới nổi như Bình Liêu, Quy Nhơn, Lý Sơn cũng được đề cập như những gợi ý tham khảo thiết thực dành cho độc giả muốn lập kế hoạch du lịch.</p>
      </div>
    `
  },

  // TRANG 7
  {
    id: "trang-7", page: "7", title: "TRANG 7",
    content: `
      <div class="content-container">
        <p class="p-justify">"Dấu chân du lịch Việt Nam" là cuốn cẩm nang hữu ích dành cho những ai muốn khám phá Việt Nam một cách có hệ thống. Cuốn sách không chỉ gợi ý những điểm đến mà còn mang đến những trải nghiệm phong phú, những nét văn hóa độc đáo, những lễ hội đặc trưng của từng vùng miền, từ Nam Trung Bộ sôi động đến Tây Nguyên gió lộng, từ Đông Bắc hùng vĩ đến những vùng đất khác của đất nước. Mỗi điểm đến không chỉ được mô tả bởi vẻ đẹp thiên nhiên mà còn qua những câu chuyện, giá trị văn hóa và chiều sâu lịch sử, nhằm giúp độc giả hiểu, cảm nhận và ghi nhớ những giá trị tiềm ẩn.</p>

        <p class="p-justify">Bên cạnh việc gợi ý điểm đến, cuốn sách còn truyền cảm hứng cho việc khám phá Việt Nam một cách có trách nhiệm. Những thông điệp về phát triển du lịch bền vững, tôn trọng thiên nhiên, trân trọng di sản và bảo tồn văn hóa được lồng ghép xuyên suốt các trang sách. Sự kết hợp giữa tri thức khoa học và tinh thần nhân văn tạo nên một bản thảo vừa hữu ích cho nghiên cứu, vừa giàu giá trị truyền cảm hứng cho độc giả.</p>

        <p class="p-justify">Với tất cả nội dung đó, "Dấu chân du lịch Việt Nam" không chỉ là một tập hợp thông tin mà còn là sự kết nối giữa lý thuyết và thực tiễn, giữa tri thức và kinh nghiệm, là cầu nối giữa quá khứ và định hướng tương lai. Tác phẩm hy vọng sẽ trở thành một tài liệu tham khảo đáng tin cậy và là người bạn đồng hành của mỗi độc giả trên hành trình khám phá vùng đất Việt Nam tươi đẹp và đa dạng.</p>
      </div>
    `
  },

  // LỜI NHÀ XUẤT BẢN (Page 8)
  {
    id: "loi-nha-xuat-ban", page: "8", title: "LỜI NHÀ XUẤT BẢN",
    content: `
      <div class="content-container">
        <h1 class="h1-center">LỜI NHÀ XUẤT BẢN</h1>
        
        <p class="p-justify">Nhà xuất bản Hà Nội trân trọng giới thiệu đến quý độc giả cuốn sách "Dấu chân du lịch Việt Nam" – công trình biên soạn mang tính tổng hợp và hệ thống, phản ánh toàn diện bức tranh du lịch Việt Nam từ quá khứ, hiện tại đến những triển vọng tương lai. Tác phẩm được xây dựng trên nền tảng tư liệu chính thống, có độ tin cậy cao, kết hợp giữa lý luận chuyên ngành và những dẫn chứng thực tiễn sinh động.</p>

        <p class="p-justify">Cuốn sách mang đến góc nhìn sâu sắc về tài nguyên du lịch, chính sách phát triển, thành tựu, khó khăn, cũng như các định hướng chiến lược nhằm thúc đẩy du lịch Việt Nam phát triển bền vững. Đặc biệt, nội dung còn gợi mở nhiều điểm đến đặc sắc trên khắp mọi miền đất nước, giúp độc giả có thêm cảm hứng khám phá và trải nghiệm.</p>

        <p class="p-justify">Với hình thức trình bày khoa học, ngôn ngữ chuẩn mực và tính ứng dụng cao, "Dấu chân du lịch Việt Nam" là tài liệu tham khảo hữu ích cho nhà quản lý, nhà nghiên cứu, giảng viên, sinh viên và độc giả yêu thích du lịch. Nhà xuất bản Hà Nội tin tưởng rằng cuốn sách sẽ đóng góp tích cực vào việc lan tỏa giá trị văn hóa, lịch sử và vẻ đẹp thiên nhiên của Việt Nam đến đông đảo bạn đọc.</p>

        <p class="p-center" style="font-weight: bold; font-size: var(--reader-font-size);">Chúng tôi trân trọng giới thiệu.</p>
      </div>
    `
  },

  // LỜI CỦA CÁC TÁC GIẢ SƯU TẦM (Page 9)
  {
    id: "loi-tac-gia", page: "9", title: "LỜI CỦA CÁC TÁC GIẢ SƯU TẦM",
    content: `
      <div class="content-container">
        <h1 class="h1-center">LỜI CỦA CÁC TÁC GIẢ SƯU TẦM</h1>
        
        <p class="p-justify">Chúng tôi biên soạn cuốn "Dấu chân du lịch Việt Nam" với mong muốn đóng góp một tài liệu tổng hợp, hệ thống và đáng tin cậy dành cho những ai quan tâm tới sự phát triển của ngành du lịch nước nhà. Tác phẩm được xây dựng trên cơ sở sưu tầm, chọn lọc từ nhiều nguồn tư liệu chính thống, các báo cáo nghiên cứu, văn kiện định hướng và dữ liệu thực tiễn của các cơ quan chuyên môn trong và ngoài nước.</p>

        <p class="p-justify">Trong quá trình thực hiện, chúng tôi nỗ lực bảo đảm tính khách quan, khoa học và độ chính xác cao nhất. Cuốn sách không chỉ nhằm phản ánh hiện trạng và tiềm năng du lịch Việt Nam, mà còn mong muốn góp phần gợi mở những suy nghĩ tích cực về con đường phát triển bền vững trong tương lai.</p>

        <p class="p-justify">Chúng tôi hy vọng rằng những thông tin và góc nhìn được chia sẻ trong sách sẽ trở thành nguồn tham khảo hữu ích, đồng thời mang lại cảm hứng khám phá cho độc giả yêu mến văn hóa và cảnh quan của đất nước.</p>

        <p class="p-justify">Xin trân trọng cảm ơn sự đồng hành và ủng hộ của quý bạn đọc.</p>
      </div>
    `
  },

  // LỜI MỞ ĐẦU (Page 10)
  {
    id: "loi-mo-dau", page: "10", title: "LỜI MỞ ĐẦU",
    content: `
      <div class="content-container">
        <h1 class="h1-center">LỜI MỞ ĐẦU</h1>
        
        <p class="p-justify-indent">Trong bối cảnh hội nhập sâu rộng và sự dịch chuyển mạnh mẽ của nền kinh tế toàn cầu, du lịch đang trở thành một trong những ngành kinh tế dịch vụ có tốc độ tăng trưởng cao nhất, đóng vai trò quan trọng trong chiến lược phát triển kinh tế – xã hội của nhiều quốc gia. Việt Nam, với lợi thế về tài nguyên thiên nhiên phong phú, nền văn hóa đa dạng và bề dày lịch sử, đang đứng trước cơ hội lớn để khẳng định vị thế là một điểm đến hấp dẫn trên bản đồ du lịch thế giới. Tuy nhiên, bên cạnh những thành tựu đáng ghi nhận, hoạt động du lịch Việt Nam vẫn đối mặt với nhiều hạn chế, thách thức cần được phân tích sâu sắc để định hướng phát triển bền vững trong tương lai. Chính từ yêu cầu đó, cuốn sách "Dấu chân du lịch Việt Nam" được hình thành như một nỗ lực tổng hợp, đánh giá và định hướng toàn diện về lĩnh vực du lịch nước ta.</p>

        <h2 class="h2-indent">Tính cấp thiết của chủ đề</h2>

        <p class="p-justify-indent">Trong hơn ba thập niên đổi mới, du lịch Việt Nam đã đạt nhiều cột mốc quan trọng về tăng trưởng khách, mở rộng sản phẩm và nâng cao vị thế trên trường quốc tế. Sự xuất hiện của nhiều thương hiệu du lịch mới, sự cải thiện đáng kể cơ sở hạ tầng, cùng sự thay đổi trong nhu cầu và hành vi của du khách đã tạo ra môi trường phát triển đầy năng động. Tuy vậy, ngành du lịch vẫn đang chịu tác động của nhiều biến động: cạnh tranh khu vực gay gắt, tác động của biến đổi khí hậu, yêu cầu ngày càng cao về chất lượng dịch vụ, cũng như áp lực bảo tồn tài nguyên và gìn giữ bản sắc văn hóa.</p>
      </div>
    `
  },

  // TRANG 11 (tiếp LỜI MỞ ĐẦU)
  {
    id: "loi-mo-dau-2", page: "11", title: "LỜI MỞ ĐẦU (tiếp)",
    content: `
      <div class="content-container">
        <p class="p-justify-indent">Việc nhận diện đúng những cơ hội và thách thức, đánh giá khách quan thực trạng và năng lực cạnh tranh của du lịch Việt Nam trở nên cấp thiết hơn bao giờ hết. Đây là tiền đề quan trọng để hoạch định chiến lược, định hướng chính sách và xây dựng các mô hình phát triển phù hợp trong giai đoạn mới.</p>

        <h2 class="h2-indent">Mục đích và ý nghĩa nghiên cứu</h2>

        <p class="p-justify-indent">Cuốn sách được biên soạn nhằm đạt ba mục tiêu chính</p>

        <p class="p-justify-indent"><strong>Thứ nhất,</strong> cung cấp một bức tranh tổng thể, hệ thống và có chiều sâu về quá trình hình thành, phát triển và đổi mới của ngành du lịch Việt Nam.</p>

        <p class="p-justify-indent"><strong>Thứ hai,</strong> phân tích những yếu tố ảnh hưởng, những điểm mạnh – điểm yếu của du lịch nước ta trong quan so sánh với các quốc gia trong khu vực và trên thế giới. Qua đó đưa ra các bài học kinh nghiệm quốc tế có giá trị tham khảo cho quá trình hoạch định chính sách.</p>

        <p class="p-justify-indent"><strong>Thứ ba,</strong> đề xuất các định hướng và hệ thống giải pháp nhằm thúc đẩy du lịch Việt Nam phát triển theo hướng chuyên nghiệp, hiện đại, bền vững và có khả năng cạnh tranh cao.</p>

        <p class="p-justify-indent"><strong>Ý nghĩa của cuốn sách</strong> không chỉ nằm ở giá trị học thuật và nghiên cứu, mà còn ở tính ứng dụng thực tiễn đối với các nhà quản lý, doanh nghiệp, sinh viên ngành du lịch và những ai quan tâm đến sự phát triển của ngành kinh tế quan trọng này. Tác phẩm kỳ vọng góp phần cung cấp thêm tri thức, minh chứng và dữ liệu cho hoạt động nghiên cứu, giảng dạy, lập quy hoạch, hoạch định chính sách và xây dựng chiến lược phát triển du lịch ở cả cấp trung ương và địa phương.</p>
      </div>
    `
  },

  // TRANG 12 (Kết cấu của cuốn sách)
  {
    id: "ket-cau-cuon-sach", page: "12", title: "KẾT CẤU CỦA CUỐN SÁCH",
    content: `
      <div class="content-container">
        <h2 class="h2-indent">Kết cấu của cuốn sách "Dấu chân du lịch Việt Nam":</h2>
        
        <p class="p-justify-indent">"Dấu chân du lịch Việt Nam" gồm 10 chương, được triển khai theo logic từ cơ sở lý luận, thực tiễn đến định hướng và giải pháp phát triển:</p>

        <p class="p-justify-indent"><strong>Chương 1: Du lịch và phát triển du lịch</strong></p>
        <p class="p-justify-indent">Trình bày các khái niệm, chức năng, vai trò và các mô hình phát triển du lịch trên thế giới, tạo nền tảng lý luận cho toàn bộ nội dung sách.</p>

        <p class="p-justify-indent"><strong>Chương 2: Quan điểm của Đảng và Nhà nước về phát triển du lịch ở Việt Nam</strong></p>
        <p class="p-justify-indent">Phân tích đường lối, chủ trương và chính sách phát triển du lịch qua từng giai đoạn, làm rõ vai trò của du lịch trong chiến lược phát triển kinh tế – xã hội quốc gia.</p>

        <p class="p-justify-indent"><strong>Chương 3: Tài nguyên du lịch của Việt Nam</strong></p>
        <p class="p-justify-indent">Tổng hợp hệ thống tài nguyên du lịch tự nhiên và nhân văn, đánh giá mức độ hấp dẫn, tiềm năng khai thác và những giá trị đặc thù của từng loại hình.</p>

        <p class="p-justify-indent"><strong>Chương 4: Phát triển du lịch Việt Nam thời kỳ đổi mới</strong></p>
        <p class="p-justify-indent">Nêu bật những chuyển biến mạnh mẽ của ngành du lịch giai đoạn sau đổi mới, bao gồm tăng trưởng thị trường, mở rộng</p>
      </div>
    `
  },

  // TRANG 13 (tiếp Kết cấu của cuốn sách)
  {
    id: "ket-cau-cuon-sach-2", page: "13", title: "KẾT CẤU CỦA CUỐN SÁCH (tiếp)",
    content: `
      <div class="content-container">
        <p class="p-justify-indent">sản phẩm, phát triển cơ sở hạ tầng và nâng cao năng lực cạnh tranh</p>

        <p class="p-justify-indent"><strong>Chương 5: Du lịch tại các vùng kinh tế trọng điểm của Việt Nam</strong></p>
        <p class="p-justify-indent">Khảo sát thực trạng phát triển du lịch tại các vùng năng động nhất của cả nước, phân tích mô hình phát triển và những yếu tố tạo nên lợi thế khu vực.</p>

        <p class="p-justify-indent"><strong>Chương 6: Du lịch tại vùng Tây Nguyên và các tỉnh miền núi phía Bắc</strong></p>
        <p class="p-justify-indent">Làm rõ giá trị tài nguyên đặc thù, cơ hội và thách thức trong việc khai thác du lịch tại hai khu vực giàu bản sắc văn hóa và cảnh quan đặc sắc nhưng còn nhiều khó khăn về hạ tầng.</p>

        <p class="p-justify-indent"><strong>Chương 7: Hạn chế và thách thức của du lịch Việt Nam</strong></p>
        <p class="p-justify-indent">Đưa ra những vấn đề cốt lõi đang cản trở sự phát triển bền vững: chất lượng dịch vụ, năng lực quản lý, tính liên kết vùng, nguồn nhân lực, môi trường và thương hiệu điểm đến.</p>

        <p class="p-justify-indent"><strong>Chương 8: Kinh nghiệm phát triển du lịch quốc tế</strong></p>
        <p class="p-justify-indent">Phân tích các mô hình thành công trên thế giới, từ đó rút ra những bài học quan trọng có thể vận dụng vào điều kiện của Việt Nam</p>

        <p class="p-justify-indent"><strong>Chương 9: Định hướng phát triển du lịch của Việt Nam trong tương lai</strong></p>
      </div>
    `
  },
  {
    id: "refs", page: "20", title: "TÀI LIỆU THAM KHẢO",
    content: `
      <h1 style="font-size: var(--reader-font-size);">TÀI LIỆU THAM KHẢO</h1>
      <p class="p-base">1. Báo cáo Chiến lược phát triển du lịch Việt Nam (tài liệu tham khảo - ví dụ).</p>
      <p class="p-base">2. Các nghiên cứu, bài báo khoa học về du lịch bền vững, quản lý điểm đến và phát triển sản phẩm du lịch.</p>
      <p class="p-base">3. Các nguồn thông tin chính thức từ Bộ Văn hóa, Thể thao và Du lịch Việt Nam, các ấn phẩm địa phương và tài liệu quốc tế về phát triển du lịch.</p>
    `
  },

  {
    id: "cover4", page: "21", title: "BÌA 4",
    content: `
      <div style="height:100%; display:flex; align-items:center; justify-content:center;">
        <img src="assets/icons/ebook_img/bia_4.jpg" alt="Bìa 4" style="max-height:100%; width:auto; display:block; object-fit:contain;" />
      </div>
    `
  },
];