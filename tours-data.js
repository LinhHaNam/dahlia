// Dahlia Travel - Danh mục dữ liệu Tour chính thức
const TOURS_DATA = {
  "ninh-binh": {
    id: "ninh-binh",
    name: "Ninh Bình — Tuyệt tác Di sản Tràng An & Hang Múa",
    destination: "Ninh Bình",
    duration: "1 ngày",
    durationDays: 1, // Đi về trong ngày (Ngày kết thúc = Ngày đi)
    price: 1250000,
    originalPrice: 1550000,
    rating: 4.9,
    reviewsCount: 168,
    image: "images/tour1.png",
    gallery: ["images/tour1.png", "images/tour-b.png", "images/tour-c.png"],
    buffetHighlight: "Buffet trưa đặc sản dê núi Ninh Bình miễn phí (> 30 món)",
    buffetDetail: "Thưởng thức tiệc BUFFET trưa không giới hạn tại nhà hàng sinh thái 4 sao: Dê nướng tảng, cơm cháy Ninh Bình, dê xào lăn, nem chua Yên Mạc, gà đồi hấp lá chanh, rau củ quả hữu cơ và chè tráng miệng thanh mát.",
    highlights: [
      "Buffet trưa đặc sản Cố Đô miễn phí không giới hạn",
      "Xe Limousine Dcar đón trả tận nơi tại Hà Nội",
      "Thuyền nan khám phá hang động Tràng An tuyến VIP",
      "Chinh phục đỉnh Ngọa Long - Hang Múa ngắm sông Ngô Đồng",
      "Bảo hiểm du lịch trọn gói mức 50.000.000 VNĐ"
    ],
    inclusions: [
      "Xe du lịch Limousine cao cấp đón trả tại Hà Nội",
      "Bữa trưa Buffet đặc sản dê núi & cơm cháy Ninh Bình",
      "Vé tham quan quần thể danh thắng Tràng An & vé thuyền nan VIP",
      "Vé thắng cảnh Đỉnh Hang Múa & Cố đô Hoa Lư",
      "Hướng dẫn viên chuyên nghiệp, nhiệt tình thuyết minh",
      "Nước suối khoáng 02 chai/người/ngày + khăn lạnh",
      "Bảo hiểm du lịch mức bồi thường 50.000.000đ/vụ"
    ],
    exclusions: [
      "Đồ uống gọi thêm trong bữa ăn (bia, nước ngọt...)",
      "Chi phí mua sắm cá nhân ngoài chương trình",
      "Tiền tip cho lái xe, hướng dẫn viên (tùy tâm)"
    ],
    itinerary: [
      {
        time: "07:30 - 08:00",
        title: "Đón quý khách tại Hà Nội",
        desc: "Xe Limousine và hướng dẫn viên đón quý khách tại các khách sạn khu vực Phố Cổ / The Dahlia hoặc Nhà hát Lớn, bắt đầu hành trình xuôi về Cố Đô Hoa Lư theo đường cao tốc."
      },
      {
        time: "10:00 - 11:30",
        title: "Chiêm bái Cố Đô Hoa Lư ngàn năm lịch sử",
        desc: "Thăm Đền Vua Đinh Tiên Hoàng và Đền Vua Lê Đại Hành, lắng nghe những câu chuyện hào hùng về kinh đô đầu tiên của nhà nước phong kiến tập quyền Việt Nam thế kỷ thứ 10."
      },
      {
        time: "11:45 - 13:00",
        title: "Đại tiệc BUFFET trưa đặc sản Dê núi (Miễn phí trọn gói)",
        desc: "Nghỉ ngơi và thưởng thức bữa tiệc BUFFET hơn 30 món ăn đặc sắc của đất Ninh Bình: Dê núi hấp tía tô, dê nướng xiên, cơm cháy sốt dê, các món gà nướng, chè sen tráng miệng."
      },
      {
        time: "13:30 - 15:30",
        title: "Du ngoạn thuyền nan Di sản Thế giới Tràng An",
        desc: "Lên thuyền xuôi dòng sông Sào Khê trong vắt, len lỏi qua các hang động huyền ảo (Hang Sáng, Hang Tối, Hang Nấu Rượu) và ghé thăm phim trường Kong: Skull Island."
      },
      {
        time: "16:00 - 17:30",
        title: "Chinh phục đỉnh Ngọa Long - Tuyệt cảnh Hang Múa",
        desc: "Thử sức với gần 500 bậc đá uốn lượn như Vạn Lý Trường Thành thu nhỏ để lên đỉnh núi Múa, thu trọn vào tầm mắt bức tranh thiên nhiên Tam Cốc mênh mông thơ mộng."
      },
      {
        time: "17:45 - 19:30",
        title: "Khởi hành về Hà Nội - Kết thúc tour",
        desc: "Quý khách lên xe Limousine trở về thủ đô. Xe trả khách an toàn tại điểm hẹn ban đầu. Tạm biệt và hẹn gặp lại quý khách trong các hành trình tiếp theo!"
      }
    ]
  },

  "ha-giang": {
    id: "ha-giang",
    name: "Hà Giang Hùng Vĩ — Chinh phục Mã Pí Lèng & Hẻm Tu Sản",
    destination: "Hà Giang",
    duration: "3 ngày 2 đêm",
    durationDays: 3, // Đi 3 ngày 2 đêm (Ngày kết thúc = Ngày đi + 2)
    price: 2850000,
    originalPrice: 3450000,
    rating: 4.95,
    reviewsCount: 215,
    image: "images/hagiang.jpg",
    gallery: ["images/hagiang.jpg", "images/hero.png", "images/tour-b.png"],
    buffetHighlight: "Trọn gói 5 bữa ăn đặc sản Tây Bắc + Buffet lẩu gà đen vùng cao",
    buffetDetail: "Miễn phí toàn bộ 5 bữa chính tiêu chuẩn cao cấp: Tiệc BUFFET lẩu gà đen nấm rừng trứ danh Hà Giang, thịt lợn cắp nách nướng thảo mộc, cá suối chiên giòn, thắng dền, xôi ngũ sắc và bữa sáng dinh dưỡng mỗi ngày.",
    highlights: [
      "Buffet lẩu gà đen nấm rừng + 5 bữa ăn đặc sản Tây Bắc",
      "Du thuyền trên hẻm vực Tu Sản sâu nhất Đông Nam Á",
      "Chinh phục Đệ nhất hùng quan Mã Pí Lèng huyền thoại",
      "Check-in Cột cờ Lũng Cú cực Bắc Tổ quốc linh thiêng",
      "Xe cabin cung điện nằm êm ái cao cấp đưa đón khứ hồi"
    ],
    inclusions: [
      "Xe giường nằm / Cabin cung điện VIP Hà Nội - Hà Giang khứ hồi",
      "Xe máy đời mới hoặc xe du lịch di chuyển suốt cung đường Hà Giang",
      "02 đêm lưu trú tại khách sạn 3-4 sao và Resort view thung lũng",
      "05 bữa ăn chính (có 01 bữa Buffet Lẩu Gà Đen) + 02 bữa sáng",
      "Vé du thuyền trên sông Nho Quế khám phá hẻm Tu Sản",
      "Toàn bộ vé tham quan: Cột cờ Lũng Cú, Dinh Vua Mèo, Nhà Pao",
      "Hướng dẫn viên bản địa am hiểu sâu sắc phong tục văn hóa",
      "Tặng áo cờ đỏ sao vàng lưu niệm + Bảo hiểm du lịch 50.000.000đ"
    ],
    exclusions: [
      "Chi phí cá nhân: đồ uống ngoài menu, giặt là, điện thoại",
      "Thuế VAT (nếu cần xuất hóa đơn tài chính)"
    ],
    itinerary: [
      {
        time: "Ngày 1",
        title: "Hà Nội - Cột Mốc Km0 - Cổng Trời Quản Bạ - Rừng Thông Yên Minh",
        desc: "Khởi hành từ Hà Nội. Đến thành phố Hà Giang check-in Cột mốc Km0. Bắt đầu vượt dốc Bắc Sum, chiêm ngưỡng Núi Đôi Cô Tiên tại Cổng trời Quản Bạ, ngắm cánh đồng tam giác mạch và nghỉ đêm tại thị trấn Yên Minh thơ mộng."
      },
      {
        time: "Ngày 2",
        title: "Dinh Thự Vua Mèo - Cực Bắc Lũng Cú - Mã Pí Lèng - Sông Nho Quế",
        desc: "Thăm Dinh thự họ Vương cổ kính, chạm tay vào cột cờ Lũng Cú linh thiêng nơi địa đầu Tổ quốc. Buổi chiều chinh phục đèo Mã Pí Lèng, lên thuyền lướt nhẹ trên dòng sông Nho Quế xanh như ngọc qua hẻm Tu Sản. Buổi tối thưởng thức BUFFET lẩu gà đen tại Phố Cổ Đồng Văn."
      },
      {
        time: "Ngày 3",
        title: "Chợ Phiên Đồng Văn - Dốc Thẩm Mã - Làng dệt Lùng Tám - Hà Nội",
        desc: "Trải nghiệm không khí rộn rã của chợ phiên vùng cao sáng sớm. Trên đường về, dừng chân check-in Dốc Thẩm Mã khúc khuỷu, thăm làng dệt lanh truyền thống Lùng Tám của người H'Mông. Chiều lên xe trở về Hà Nội lúc 21:00."
      }
    ]
  },

  "sapa": {
    id: "sapa",
    name: "Sapa Mờ Sương — Chinh phục Đỉnh Fansipan & Bản Cát Cát",
    destination: "Sapa",
    duration: "2 ngày 1 đêm",
    durationDays: 2, // Đi 2 ngày 1 đêm (Ngày kết thúc = Ngày đi + 1)
    price: 2150000,
    originalPrice: 2650000,
    rating: 4.92,
    reviewsCount: 184,
    image: "images/sapa.jpg",
    gallery: ["images/sapa.jpg", "images/room-apt.png", "images/tour-c.png"],
    buffetHighlight: "Buffet sáng quốc tế tại khách sạn 4 sao + Tiệc lẩu cá hồi Tây Bắc",
    buffetDetail: "Miễn phí BUFFET sáng Á - Âu tiêu chuẩn 4 sao với hơn 40 món phong phú và 02 bữa chính ẩm thực vùng cao gồm tiệc Lẩu cá hồi tươi Sapa, thịt lợn bản nướng than hồng, nấm hương rừng và rau cải mèo ngọt mát.",
    highlights: [
      "Buffet sáng cao cấp tại khách sạn 4 sao view mây núi",
      "Vé cáp treo 3 dây chinh phục Đỉnh Fansipan 3.143m khứ hồi",
      "Xe Limousine VIP đưa đón êm ái, tiện nghi cổng sạc, Wi-Fi",
      "Tản bộ khám phá văn hóa người H'Mông tại Bản Cát Cát",
      "Tặng voucher tắm lá thuốc Dao Đỏ thảo mộc thư giãn"
    ],
    inclusions: [
      "Xe Limousine Dcar giường nằm VIP Hà Nội - Sapa khứ hồi",
      "01 đêm phòng nghỉ tiêu chuẩn 4 sao trung tâm thị xã Sapa",
      "01 bữa Buffet sáng tiêu chuẩn 4 sao + 02 bữa chính đặc sản",
      "Vé cáp treo Fansipan Sun World khứ hồi",
      "Vé tham quan bản du lịch Cát Cát & vườn hoa Check-in",
      "Hướng dẫn viên suốt hành trình chu đáo, tận tâm",
      "Bảo hiểm du lịch tối đa 50.000.000 VNĐ/người"
    ],
    exclusions: [
      "Vé tàu hỏa leo núi Mường Hoa & tàu hỏa đỉnh Fansipan",
      "Đồ uống cá nhân, tiền tip cho HDV và lái xe"
    ],
    itinerary: [
      {
        time: "Ngày 1",
        title: "Hà Nội - Đèo mây Sapa - Bản Cát Cát - Chợ Đêm & Nhà Thờ Đá",
        desc: "Xe Limousine đón tại Hà Nội chạy cao tốc Nội Bài - Lào Cai. Đến Sapa ăn trưa và nhận phòng khách sạn 4 sao. Buổi chiều tản bộ xuống Thung lũng Mường Hoa, thăm Bản Cát Cát, thác Tiên Sa thơ mộng. Tối tự do thưởng thức đồ nướng và không khí se lạnh của thị xã sương mù."
      },
      {
        time: "Ngày 2",
        title: "Chinh phục Nóc Nhà Đông Dương Fansipan 3.143m - Hà Nội",
        desc: "Thưởng thức bữa sáng Buffet tại khách sạn. Trải nghiệm hệ thống cáp treo đạt kỷ lục thế giới bay qua biển mây lên Đỉnh Fansipan. Chiêm bái Đại tượng Phật A Di Đà bằng đồng lớn nhất Việt Nam. Ăn trưa lẩu cá hồi, chiều lên Limousine về lại Hà Nội khoảng 19:30."
      }
    ]
  },

  "ha-noi": {
    id: "ha-noi",
    name: "Hà Nội 36 Phố Phường — Ký ức Thăng Long & Tinh hoa Ẩm thực",
    destination: "Hà Nội",
    duration: "1 ngày",
    durationDays: 1, // Đi trong ngày
    price: 750000,
    originalPrice: 950000,
    rating: 4.88,
    reviewsCount: 142,
    image: "images/tour3.png",
    gallery: ["images/tour3.png", "images/story.png", "images/hero.png"],
    buffetHighlight: "Trọn gói Food Tour ẩm thực Hà Nội: Phở Thìn, Cà phê trứng Giảng",
    buffetDetail: "Thưởng thức không giới hạn các món ăn di sản Hà Thành: Bữa trưa bún chả que tre nướng than hoa gia truyền, nếm thử Phở Bát Đàn, Bánh gối, Nem rán Lý Quốc Sư và tráng miệng Cà phê Trứng Giảng trứ danh 1946.",
    highlights: [
      "Trọn gói ẩm thực di sản phố cổ từ sáng đến chiều",
      "Trải nghiệm đi xe xích lô truyền thống quanh Hồ Gươm",
      "Thăm Văn Miếu Quốc Tử Giám - trường đại học đầu tiên",
      "Khám phá dấu ấn kiến trúc Pháp cổ & Nhà thờ Lớn",
      "Hướng dẫn viên người Hà Nội gốc kể chuyện lịch sử dí dỏm"
    ],
    inclusions: [
      "Xe ô tô máy lạnh đón trả các điểm tham quan tại Hà Nội",
      "01 giờ trải nghiệm xe xích lô ngắm 36 phố phường",
      "Toàn bộ ẩm thực trong tour: Bữa trưa bún chả + Cà phê trứng Giảng",
      "Vé tham quan: Văn Miếu Quốc Tử Giám, Đền Ngọc Sơn, Nhà tù Hỏa Lò",
      "Hướng dẫn viên chuyên nghiệp song ngữ Việt - Anh",
      "Nước khoáng, khăn lạnh phục vụ suốt chuyến đi"
    ],
    exclusions: [
      "Chi phí mua quà đặc sản (ô mai, cốm làng Vòng...)",
      "Các dịch vụ giải trí không nằm trong chương trình"
    ],
    itinerary: [
      {
        time: "08:30 - 10:00",
        title: "Dạo xích lô Hồ Gươm & Đền Ngọc Sơn",
        desc: "Đón quý khách tại sảnh khách sạn. Thong dong trên chiếc xích lô truyền thống ngắm nhìn Tháp Rùa, Cầu Thê Húc, Đền Ngọc Sơn và hít thở bầu không khí sớm mai của thủ đô ngàn năm văn hiến."
      },
      {
        time: "10:15 - 11:45",
        title: "Thăm Trường Đại học đầu tiên - Văn Miếu Quốc Tử Giám",
        desc: "Khám phá Khuê Văn Các biểu tượng thủ đô, bia Tiến sĩ thời Hậu Lê và lắng nghe câu chuyện về tinh thần hiếu học của cha ông."
      },
      {
        time: "12:00 - 13:30",
        title: "Bữa trưa Tinh hoa Ẩm thực Phố Cổ (Bao gồm trọn gói)",
        desc: "Thưởng thức set menu bún chả Hà Nội nướng que tre chuẩn vị truyền thống cùng nem cua bể giòn rụm, rau sống tươi ngon tại quán ăn nức tiếng."
      },
      {
        time: "14:00 - 15:45",
        title: "Di tích lịch sử Nhà tù Hỏa Lò & Hoàng Thành Thăng Long",
        desc: "Trải nghiệm không gian lịch sử thiêng liêng và xúc động tại Hỏa Lò - nơi lưu dấu ý chí quật cường của các chiến sĩ cách mạng Việt Nam."
      },
      {
        time: "16:00 - 17:30",
        title: "Khám phá ngõ nhỏ phố cổ & Thưởng thức Cà Phê Trứng Giảng",
        desc: "Dạo bước qua những phố nghề cổ xưa (Hàng Bạc, Hàng Mã, Hàng Đào) và dừng chân tại quán Giảng thưởng thức tách cà phê trứng béo ngậy ấm nồng."
      }
    ]
  },

  "ha-long": {
    id: "ha-long",
    name: "Hạ Long Kỳ Quan — Du thuyền 5 Sao Vịnh Di Sản & Hang Sửng Sốt",
    destination: "Hạ Long",
    duration: "2 ngày 1 đêm",
    durationDays: 2, // Đi 2 ngày 1 đêm (Ngày kết thúc = Ngày đi + 1)
    price: 3650000,
    originalPrice: 4500000,
    rating: 4.98,
    reviewsCount: 312,
    image: "images/tour2.png",
    gallery: ["images/tour2.png", "images/tour-b.png", "images/tour-c.png"],
    buffetHighlight: "Đại tiệc BUFFET hải sản tôm hùm, cua biển không giới hạn",
    buffetDetail: "Đặc quyền ẩm thực đẳng cấp 5 sao: Bữa trưa BUFFET hải sản quốc tế (hàu nướng mỡ hành, tôm sú, cua biển, cá hồi sashami tươi sống), Bữa tối Fine Dining 5 món lãng mạn dưới ánh nến và tiệc Buffet Brunch thịnh soạn ngày về.",
    highlights: [
      "Đại tiệc Buffet hải sản tươi sống cao cấp trên vịnh di sản",
      "Phòng nghỉ hạng sang có ban công riêng view trọn vịnh 100%",
      "Bể bơi vô cực dát vàng 4 mùa ngắm hoàng hôn vịnh biển",
      "Chèo thuyền Kayak vịnh Lan Hạ & tắm biển đảo Ti Tốp cát trắng",
      "Tiệc hoàng hôn Sunset Party với rượu vang & hoa quả miễn phí"
    ],
    inclusions: [
      "Xe Limousine đưa đón khứ hồi cao tốc Hà Nội - Hạ Long tận nơi",
      "01 đêm phòng nghỉ cao cấp trên Du thuyền 5 sao (có ban công riêng)",
      "04 bữa ăn chuẩn 5 sao (02 tiệc Buffet hải sản + 01 tối Fine Dining + 01 sáng nhẹ)",
      "Vé tham quan vịnh Hạ Long, Hang Sửng Sốt, Hang Luồn, Đảo Ti Tốp",
      "Trải nghiệm chèo kayak tự do hoặc thuyền nan khám phá hang động",
      "Tiệc trà chiều Sunset Party ngắm hoàng hôn với rượu vang & snack",
      "Lớp học nấu món ăn truyền thống & câu mực đêm trên du thuyền",
      "Bảo hiểm du thuyền mức bồi thường tối đa 100.000.000đ"
    ],
    exclusions: [
      "Dịch vụ Spa & Massage trên du thuyền",
      "Đồ uống trong quầy Bar (rượu mạnh, cocktail nhập khẩu)"
    ],
    itinerary: [
      {
        time: "Ngày 1",
        title: "Hà Nội - Cảng quốc tế Tuần Châu - Lên Du Thuyền 5 Sao - Đảo Ti Tốp",
        desc: "Xe Limousine đón tại Hà Nội đi cao tốc đến Tuần Châu. Đội ngũ thủy thủ đoàn chào đón bằng nước trái cây. Thưởng thức bữa trưa BUFFET hải sản thịnh soạn khi tàu nhổ neo đi qua Hòn Chó Đá, Đỉnh Hương. Chiều chèo kayak tại Hang Luồn và leo đỉnh núi ngắm 360 độ vịnh đảo Ti Tốp. Tham gia tiệc Sunset Party với rượu vang miễn phí."
      },
      {
        time: "Ngày 2",
        title: "Thái Cực Quyền Đón Bình Minh - Hang Sửng Sốt - Buffet Brunch - Hà Nội",
        desc: "Đón ngày mới với bài tập Taichi trên sundeck thoáng đãng. Khám phá vẻ đẹp kỳ ảo của Hang Sửng Sốt - hang động lớn nhất vịnh Hạ Long. Thưởng thức bữa trưa BUFFET sớm (Brunch) trong lúc tàu nhẹ nhàng lướt về bến cảng. Chiều 15:30 xe đưa quý khách về đến Hà Nội an toàn."
      }
    ]
  }
};

// Mã giảm giá hợp lệ
const PROMO_CODES = {
  "DAHLIA10": { type: "percent", value: 10, label: "Giảm 10% tổng hóa đơn" },
  "MIXIVIVU": { type: "percent", value: 15, label: "Giảm 15% ưu đãi MixiVivu" },
  "TRANGNAU": { type: "fixed", value: 200000, label: "Giảm trực tiếp 200.000 ₫" },
  "SUMMER": { type: "fixed", value: 150000, label: "Giảm 150.000 ₫ mùa du lịch" }
};

// Tự động đồng bộ mã từ SITE_CONFIG (nếu có)
if (typeof SITE_CONFIG !== "undefined") {
  if (SITE_CONFIG.coupons) Object.assign(PROMO_CODES, SITE_CONFIG.coupons);
  if (SITE_CONFIG.promo) {
    if (SITE_CONFIG.promo.code1 && typeof getPromoCodeDetails === "function") {
      const p1 = getPromoCodeDetails(SITE_CONFIG.promo.code1);
      if (p1) PROMO_CODES[SITE_CONFIG.promo.code1.toUpperCase()] = p1;
    }
    if (SITE_CONFIG.promo.code2 && typeof getPromoCodeDetails === "function") {
      const p2 = getPromoCodeDetails(SITE_CONFIG.promo.code2);
      if (p2) PROMO_CODES[SITE_CONFIG.promo.code2.toUpperCase()] = p2;
    }
  }
}

// Format số tiền VNĐ
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', '₫');
}

// Định dạng ngày theo chuẩn VN (dd/mm/yyyy)
function formatDateVN(dateObj) {
  const d = String(dateObj.getDate()).padStart(2, '0');
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const y = dateObj.getFullYear();
  return `${d}/${m}/${y}`;
}

// Lấy thứ trong tuần tiếng Việt
function getDayNameVN(dateObj) {
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  return days[dateObj.getDay()];
}

// Tính ngày kết thúc dựa vào ngày khởi hành và số ngày của tour
function calculateEndDate(startDateStr, durationDays) {
  if (!startDateStr) return null;
  const start = new Date(startDateStr);
  if (isNaN(start.getTime())) return null;
  
  const end = new Date(start);
  if (durationDays > 1) {
    end.setDate(start.getDate() + (durationDays - 1));
  }
  return end;
}
