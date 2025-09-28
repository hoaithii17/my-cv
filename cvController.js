exports.getHome = (req, res) => {
  res.render("index", {
    title: "CV Online - Nguyễn Thị Hoài Thi",
    name: "Nguyễn Thị Hoài Thi",
    description: "Một ngày nào đó tôi sẽ ngồi xuống và chúc mừng bản thân mình, mỉm cười và nói rằng nó rất khó khăn nhưng tôi đã làm được.",
    skills: ["Tôi sở hữu những kỹ năng chuyên ngành vững chắc, bao gồm HTML, CSS, Java, JavaScript, SQL, cùng khả năng phân tích và thiết kế hệ thống phần mềm. Bên cạnh đó, tôi cũng phát triển nhiều kỹ năng mềm quan trọng, như thuyết trình, tham gia các hoạt động ngoại khóa, và kinh nghiệm làm việc part-time. Tôi tự tin trong làm việc nhóm, có khả năng phối hợp hiệu quả với đồng nghiệp để đạt mục tiêu chung. Khả năng quản lý giúp tôi tổ chức công việc khoa học và đảm bảo tiến độ dự án. Tôi luôn chủ động học hỏi, áp dụng kiến thức chuyên môn vào thực tiễn. Khả năng thích nghi và giải quyết vấn đề linh hoạt là điểm mạnh giúp tôi vượt qua thử thách. Tất cả những kỹ năng này tạo nền tảng vững chắc để tôi phát triển sự nghiệp một cách toàn diện."],
    hobbies: ["Hát: không cần phải quá hay, chỉ cần thoải mái thả lòng theo giai điệu.","Đọc sách: là lúc tôi tìm thấy sự an yên, nhất là khi tâm trạng chùng xuống.","Du lịch: khám phá những miền đất mới, trải nghiệm những điều chưa từng biết, làm tâm hồn thêm rộng mở.",
"Nghe nhạc: mỗi nốt nhạc là liều thuốc chữa lành cho trái tim.","Lập trình: không chỉ là công việc, mà còn là phương tiện để kiếm ra tự do, để thực hiện mọi sở thích và đam mê của mình.","Tôi thích khám phá những điều mới mẻ qua du lịch, trải nghiệm văn hóa và ẩm thực khác nhau. Tham gia các hoạt động sáng tạo giúp tôi mở rộng tầm nhìn và rèn luyện tư duy. Tôi cũng quan tâm đến việc rèn luyện thể chất và các trò chơi thể thao nhẹ nhàng để giữ cân bằng cuộc sống. Thích thử thách bản thân qua các dự án nhỏ, học hỏi kỹ năng mới. Mỗi sở thích đều giúp tôi phát triển cả tinh thần lẫn kỹ năng sống."],
    projects: [
       { 
  name: "Quản lý bán hàng", 
  desc: "Ứng dụng web quản lý bán hàng cho nhà hàng nổi sông Hương, hỗ trợ theo dõi thực đơn, hóa đơn, khách hàng và báo cáo doanh thu." 
},  
{ 
  name: "Web cảnh báo thiên tai và cứu hộ", 
  desc: "Xây dựng website cảnh báo thiên tai, cung cấp thông tin kịp thời và điều động lực lượng cứu hộ hiệu quả." 
},  
{ 
  name: "Quản lý quán bida", 
  desc: "Ứng dụng quản lý quán bida với các chức năng theo dõi bàn chơi, tính tiền theo giờ, quản lý khách hàng và báo cáo doanh thu." 
},  
{ 
  name: "Quản lý shop mỹ phẩm", 
  desc: "Hệ thống quản lý shop mỹ phẩm, hỗ trợ theo dõi sản phẩm, tồn kho, đơn hàng, khách hàng và chương trình khuyến mãi." 
}  

    ],
    goals: ["Mục tiêu của tôi là luôn cố gắng để ngày hôm nay tiến bộ hơn ngày hôm qua, không ngừng hoàn thiện bản thân. Tôi mong muốn trở thành một lập trình viên full-stack vững vàng về cả frontend và backend, có thể tự tin tham gia vào nhiều dự án thực tế. Thông qua những trải nghiệm đó, tôi sẽ tích lũy thêm nhiều kiến thức, kỹ năng và kinh nghiệm quý báu. Đồng thời, tôi luôn chủ động học hỏi các công nghệ mới để không bị tụt lại phía sau trong thời đại số. Tôi khát khao được đóng góp giá trị cho cộng đồng công nghệ cũng như các sản phẩm mang tính ứng dụng cao. Từ đó, tôi hướng đến hình ảnh một người thành đạt, vừa có năng lực chuyên môn, vừa có tư duy cầu tiến và tinh thần trách nhiệm."],
    contact: {
      email: "nguyenhoaithi477@gmail.com",
      phone: "0386973091",
      address: "Huế, Việt Nam"
    }
  });
};
