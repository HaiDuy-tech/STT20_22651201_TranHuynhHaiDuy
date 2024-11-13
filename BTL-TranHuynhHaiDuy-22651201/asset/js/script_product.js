// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/img/Canon1.jpg',
    'Máy ảnh KTS Canon Canon EOS R50 kit RF-S 18-45mm',
    'DESIGNED',
    '54990000',
    `Máy ảnh Canon EOS R50 Kit RF-S18-45mm F4.5-6.3 IS STM là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh mirrorless nhỏ gọn nhưng mạnh mẽ.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS APS-C 24.2MP kết hợp với bộ xử lý hình ảnh DIGIC X, mang lại hình ảnh sắc nét và chi tiết. 
Hệ thống lấy nét: Hệ thống lấy nét tự động Dual Pixel CMOS AF II với 651 điểm lấy nét, cho phép lấy nét nhanh chóng và chính xác. 
Khả năng quay video: Hỗ trợ quay video UHD 4K 30p, đáp ứng nhu cầu quay phim chất lượng cao. 
Thiết kế và kết nối: Thân máy nhỏ gọn, màn hình cảm ứng đa góc 3.0" 1.62 triệu điểm ảnh, tích hợp Wi-Fi và Bluetooth, cho phép chia sẻ hình ảnh và điều khiển từ xa.`,
    '')

BestSeller.add('./asset/img/canonRP.jpg',
    'Máy ảnh Canon EOS RP Body - Hàng chính hãng',
    'DESIGNED',
    '24990000',
    `Máy ảnh Canon EOS RP là một trong những mẫu máy ảnh không gương lật full-frame nhẹ nhất của Canon, phù hợp cho cả nhiếp ảnh gia chuyên nghiệp và người mới bắt đầu.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS full-frame 26.2MP kết hợp với bộ xử lý hình ảnh DIGIC 8, mang lại hình ảnh sắc nét và chi tiết. 
Hệ thống lấy nét: Hệ thống lấy nét tự động Dual Pixel CMOS AF với 4,779 điểm lấy nét, cho phép lấy nét nhanh chóng và chính xác. 
Khả năng quay video: Hỗ trợ quay video 4K UHD, đáp ứng nhu cầu quay phim chất lượng cao. 
Thiết kế và kết nối: Thân máy nhỏ gọn, màn hình cảm ứng xoay lật 3.0" 1.04 triệu điểm ảnh, tích hợp Wi-Fi và Bluetooth, cho phép chia sẻ hình ảnh và điều khiển từ xa.`,
    '');

BestSeller.add('./asset/img/canonM200.jpg',
    `MÁY ẢNH CANON EOS M200 KIT EF-M15-45MM F3.5-6.3 IS STM/ ĐEN `,
    'DESIGNED',
    '29990000',
    `Máy ảnh Canon EOS M200 Kit EF-M15-45mm F3.5-6.3 IS STM màu đen là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh mirrorless nhỏ gọn nhưng mạnh mẽ.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS APS-C 24.1MP kết hợp với bộ xử lý hình ảnh DIGIC 8, mang lại hình ảnh sắc nét và chi tiết. 
Hệ thống lấy nét: Hệ thống lấy nét tự động Dual Pixel CMOS AF với 143 điểm lấy nét, cho phép lấy nét nhanh chóng và chính xác. 
Khả năng quay video: Hỗ trợ quay video 4K UHD, đáp ứng nhu cầu quay phim chất lượng cao. 
Thiết kế và kết nối: Thân máy nhỏ gọn, màn hình cảm ứng lật 3.0" 1.04 triệu điểm ảnh, tích hợp Wi-Fi và Bluetooth, cho phép chia sẻ hình ảnh và điều khiển từ xa. `,
    '');

BestSeller.add('./asset/img/canonG7X.jpg',
    `Máy ảnh KTS Canon PowerShot G7X Mark II - Đen (Hàng chính hãng)`,
    'DESIGNED',
    '4990000',
    `Máy ảnh Canon PowerShot G7X Mark II là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh compact nhỏ gọn nhưng mạnh mẽ.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS 1.0 inch 20.1MP kết hợp với bộ xử lý hình ảnh DIGIC 7, mang lại hình ảnh sắc nét và chi tiết. 
Ống kính và zoom: Ống kính zoom quang học 4.2x (24-100mm) với khẩu độ f/1.8 - f/2.8, cho phép chụp ảnh đẹp ngay cả trong điều kiện ánh sáng yếu. 
Màn hình và thiết kế: Màn hình LCD cảm ứng 3.0 inch có khả năng nghiêng lên 180° và nghiêng xuống 45°, thiết kế nhỏ gọn, dễ dàng mang theo mọi lúc mọi nơi. 
Kết nối: Hỗ trợ kết nối Wi-Fi và NFC, dễ dàng chia sẻ ảnh và video lên mạng xã hội hoặc điều khiển máy bằng smartphone.`,
    '')

BestSeller.add('./asset/img/14.jpg',
    `Canon EOS 200D Kit 18-55mm IS STM-Hàng Chính Hãng`,
    'DESIGNED',
    '4590000',
    `Máy ảnh Canon EOS 200D Kit 18-55mm IS STM là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh DSLR nhỏ gọn, dễ sử dụng nhưng vẫn đảm bảo chất lượng hình ảnh cao.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS APS-C 24.1MP kết hợp với bộ xử lý hình ảnh DIGIC 7, mang lại hình ảnh sắc nét và chi tiết.
Hệ thống lấy nét: Hệ thống lấy nét tự động Dual Pixel CMOS AF với 9 điểm lấy nét, cho phép lấy nét nhanh chóng và chính xác.
Khả năng quay video: Hỗ trợ quay video Full HD 1080p với tốc độ 60 khung hình/giây, đáp ứng nhu cầu quay phim chất lượng cao.
Thiết kế và kết nối: Thân máy nhỏ gọn, màn hình cảm ứng lật 3.0" 1.04 triệu điểm ảnh, tích hợp Wi-Fi, NFC và Bluetooth, cho phép chia sẻ hình ảnh và điều khiển từ xa.`,
    '')

BestSeller.add('./asset/img/13.jpg',
    `MÁY ẢNH CANON EOS M200 KIT EF-M15-45MM F3.5-6.3 IS STM/ ĐEN`,
    'DESIGNED',
    '26990000',
    `Máy ảnh Canon EOS M200 Kit EF-M15-45mm F3.5-6.3 IS STM màu đen là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh mirrorless nhỏ gọn nhưng mạnh mẽ.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS APS-C 24.1MP kết hợp với bộ xử lý hình ảnh DIGIC 8, mang lại hình ảnh sắc nét và chi tiết.
Hệ thống lấy nét: Hệ thống lấy nét tự động Dual Pixel CMOS AF với 143 điểm lấy nét, cho phép lấy nét nhanh chóng và chính xác.
Khả năng quay video: Hỗ trợ quay video 4K UHD, đáp ứng nhu cầu quay phim chất lượng cao.
Thiết kế và kết nối: Thân máy nhỏ gọn, màn hình cảm ứng lật 3.0" 1.04 triệu điểm ảnh, tích hợp Wi-Fi và Bluetooth, cho phép chia sẻ hình ảnh và điều khiển từ xa.`,
    '')

BestSeller.add('./asset/img/sonyZV-1Den.jpg',
    `Máy ảnh KTS Sony ZV-1 II (máy ảnh vlog cao cấp nhỏ gọn) - Màu đen`,
    'TRADITIONAL',
    '54990000',
    `Máy ảnh Sony ZV-1 II là phiên bản nâng cấp của dòng máy ảnh vlog nhỏ gọn, được thiết kế đặc biệt cho các vlogger và người sáng tạo nội dung.

Đặc điểm nổi bật:

Ống kính và cảm biến: Trang bị ống kính zoom góc rộng 18-50mm f/1.8-4.0, kết hợp với cảm biến Exmor RS CMOS 1 inch, mang lại chất lượng hình ảnh sắc nét và chi tiết. 
Màn hình và thiết kế: Màn hình LCD cảm ứng 3.0 inch có thể lật 180 độ, thuận tiện cho việc chụp ảnh selfie và quay vlog. Thiết kế nhỏ gọn, dễ dàng mang theo mọi lúc mọi nơi. 
Khả năng quay video: Hỗ trợ quay video 4K ở tốc độ lên đến 30fps, đáp ứng nhu cầu quay phim chất lượng cao. 
Micro và kết nối: Trang bị micro thông minh với khả năng giảm tiếng ồn, cho âm thanh rõ ràng. Hỗ trợ kết nối Wi-Fi và Bluetooth, dễ dàng chia sẻ hình ảnh và điều khiển từ xa.`,
    '')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('./asset/img/sony6400.jpeg',
    `MÁY ẢNH SONY A6400 (BLACK + KIT 16-50) - CHÍNH HÃNG`,
    'TRADITIONAL',
    `54990000`,
    `Máy ảnh Sony Alpha A6400 (màu đen) kèm ống kính 16-50mm f/3.5-5.6 OSS là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh không gương lật nhỏ gọn nhưng mạnh mẽ.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS APS-C Exmor 24.2MP kết hợp với bộ xử lý hình ảnh BIONZ X, mang lại hình ảnh sắc nét và chi tiết. 
Hệ thống lấy nét: Hệ thống lấy nét tự động Fast Hybrid AF với 425 điểm lấy nét theo pha và tương phản, cho phép lấy nét nhanh chóng và chính xác. 
Khả năng quay video: Hỗ trợ quay video 4K và Full HD 1080p, đáp ứng nhu cầu quay phim chất lượng cao. 
Thiết kế và kết nối: Thân máy nhỏ gọn, màn hình cảm ứng lật 180 độ, tích hợp Wi-Fi và Bluetooth, cho phép chia sẻ hình ảnh và điều khiển từ xa.`,
    '');

FeatureProduct.add('./asset/img/sONYa7.jpeg',
    `Sony A7 Mark II - Chính hãng`,
    'TRADITIONAL',
    `24990000`,
    `Máy ảnh Sony Alpha A7 Mark II là phiên bản nâng cấp của dòng máy ảnh không gương lật full-frame, nổi bật với nhiều cải tiến về thiết kế và hiệu suất.

Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến full-frame 24.3 megapixel kết hợp với bộ xử lý hình ảnh BIONZ X, mang lại hình ảnh sắc nét và chi tiết. 
Hệ thống ổn định hình ảnh: Được trang bị hệ thống ổn định hình ảnh 5 trục, giúp giảm thiểu hiện tượng mờ nhòe khi chụp ở tốc độ chậm hoặc trong điều kiện ánh sáng yếu. 
Hệ thống lấy nét: Sử dụng hệ thống lấy nét Fast Hybrid AF với 117 điểm lấy nét theo pha và 25 điểm lấy nét theo tương phản, cho phép lấy nét nhanh chóng và chính xác. 
Khả năng quay video: Hỗ trợ quay video Full HD với nhiều tùy chọn khung hình, đáp ứng nhu cầu quay phim chất lượng cao. 
Thiết kế và kết nối: Thân máy bằng hợp kim magie, nhỏ gọn và bền bỉ. Tích hợp kết nối Wi-Fi và NFC, cho phép chia sẻ hình ảnh và điều khiển từ xa.`,
    '');

FeatureProduct.add('./asset/img/SONYa2.gif',
    `Máy ảnh KTS Sony Alpha ILCE 6400L KIT 16-50 F3.5-5.6 OSS`,
    'TRADITIONAL',
    `14990000`,
    `Máy ảnh kỹ thuật số Sony Alpha ILCE-6400L KIT 16-50mm F3.5-5.6 OSS là một mẫu máy ảnh không gương lật (mirrorless) thuộc dòng Alpha của Sony, được thiết kế nhỏ gọn và linh hoạt, phù hợp cho cả nhiếp ảnh gia chuyên nghiệp và người dùng đam mê.
    
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến APS-C Exmor CMOS 24.2MP kết hợp với bộ xử lý hình ảnh BIONZ X, máy ảnh mang lại chất lượng hình ảnh sắc nét, chi tiết và màu sắc trung thực.
Hệ thống lấy nét tự động: Sở hữu 425 điểm lấy nét theo pha và 425 điểm lấy nét tương phản, cùng với công nghệ Real-time Eye AF và Real-time Tracking, máy ảnh đảm bảo khả năng lấy nét nhanh chóng và chính xác, đặc biệt hữu ích khi chụp các đối tượng chuyển động.
Quay video 4K: Hỗ trợ quay video độ phân giải 4K với khả năng lấy mẫu màu 4:2:2, phù hợp cho việc sản xuất nội dung chất lượng cao.
Màn hình cảm ứng xoay lật: Màn hình LCD 3.0 inch có khả năng lật 180 độ, thuận tiện cho việc chụp selfie và quay vlog.
Kết nối không dây: Tích hợp Wi-Fi và Bluetooth, cho phép chia sẻ hình ảnh và điều khiển máy ảnh từ xa thông qua thiết bị di động.`,
    '');

FeatureProduct.add('./asset/img/1.jpeg',
    `MÁY ẢNH SONY ZV-E10 + KIT 16-50MM F/3.5-5.6 - CHÍNH HÃNG`,
    'TRADITIONAL',
    `44990000`,
    `Máy ảnh Sony ZV-E10 kèm ống kính kit 16-50mm F/3.5-5.6 là lựa chọn lý tưởng cho những người sáng tạo nội dung và vlogger, kết hợp giữa chất lượng hình ảnh cao và tính năng hỗ trợ quay video chuyên nghiệp.
    
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến APS-C Exmor CMOS 24.2MP và bộ xử lý BIONZ X, ZV-E10 mang lại hình ảnh sắc nét, chi tiết với dải ISO từ 100-32000, mở rộng đến 51200, giúp chụp tốt trong điều kiện ánh sáng yếu. 
Quay video 4K: Hỗ trợ quay video 4K với khả năng lấy mẫu màu 4:2:2, phù hợp cho việc sản xuất nội dung chất lượng cao. 
Màn hình xoay lật: Màn hình LCD cảm ứng 3.0 inch có khả năng lật 180 độ, thuận tiện cho việc chụp selfie và quay vlog. 
Hệ thống lấy nét tự động: Sở hữu 425 điểm lấy nét theo pha và 425 điểm lấy nét tương phản, cùng với công nghệ Real-time Eye AF và Real-time Tracking, máy ảnh đảm bảo khả năng lấy nét nhanh chóng và chính xác, đặc biệt hữu ích khi chụp các đối tượng chuyển động. 
Âm thanh chất lượng cao: Tích hợp micro 3 viên nén định hướng với kính chắn gió, đảm bảo âm thanh rõ ràng và giảm tiếng ồn môi trường. 
 `,
    '');

FeatureProduct.add('./asset/img/2.jpeg',
    `MÁY QUAY PHIM SONY FX30 + BỘ PHẬN TAY CẦM XLR- CHÍNH HÃNG`,
    'TRADITIONAL',
    `19990000`,
    `Máy quay phim Sony FX30 kèm bộ phận tay cầm XLR là một sản phẩm chính hãng thuộc dòng Cinema Line của Sony, được thiết kế để đáp ứng nhu cầu quay phim chuyên nghiệp với chất lượng hình ảnh cao và tính năng linh hoạt.
    
    Đặc điểm nổi bật:

Cảm biến và chất lượng hình ảnh: Trang bị cảm biến CMOS APS-C BSI 26.1MP, FX30 cho phép quay video UHD 4K lên đến 120 khung hình/giây, hỗ trợ 10-bit 4:2:2 XAVC S-I và đầu ra RAW 16-bit, mang lại hình ảnh sắc nét và chi tiết. 
Thiết kế nhỏ gọn: Với trọng lượng chỉ 544 gram, FX30 có thiết kế nhỏ gọn, thuận tiện cho việc di chuyển và quay phim trong nhiều điều kiện khác nhau. 
Hệ thống lấy nét tự động: Sử dụng công nghệ lấy nét tự động theo pha, theo dõi khuôn mặt và mắt, đảm bảo khả năng lấy nét nhanh chóng và chính xác. 
Ổn định hình ảnh: Tích hợp hệ thống ổn định hình ảnh 5 trục trong thân máy, giúp tạo ra những cảnh quay mượt mà ngay cả khi cầm tay.`,
    '');

FeatureProduct.add('./asset/img/3.jpeg',
    `MÁY ẢNH CANON EOS R6 MARK II KIT RF 24-105MM F/4-7.1 IS STM - CHÍNH HÃNG`,
    'DESIGNED',
    `29990000`,
    `Máy ảnh Canon EOS R6 Mark II kèm ống kính RF 24-105mm f/4-7.1 IS STM là một lựa chọn lý tưởng cho những người đam mê nhiếp ảnh và quay phim, kết hợp giữa hiệu suất mạnh mẽ và tính linh hoạt.
    
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS full-frame 24.2MP và bộ xử lý hình ảnh DIGIC X, máy ảnh mang lại chất lượng hình ảnh sắc nét, chi tiết và màu sắc trung thực. 
CANON VIỆT NAM
Chụp liên tục tốc độ cao: Hỗ trợ chụp liên tục lên đến 40 khung hình/giây, giúp bạn không bỏ lỡ khoảnh khắc quan trọng. 
Quay video 4K: Khả năng quay video 4K với chất lượng cao, phù hợp cho các nhà làm phim không chuyên. 
Hệ thống lấy nét tự động: Sử dụng công nghệ Dual Pixel CMOS AF II tiên tiến, đảm bảo khả năng lấy nét nhanh chóng và chính xác. 
Ổn định hình ảnh: Tích hợp hệ thống ổn định hình ảnh trong thân máy, giúp giảm thiểu rung lắc khi chụp ảnh và quay video.`,
    '');

FeatureProduct.add('./asset/img/4.jpeg',
    `MÁY ẢNH CANON EOS R10 + KIT RF-S 18-45MM IS STM - CHÍNH HÃNG`,
    'DESIGNED',
    `39990000`,
    `Máy ảnh Canon EOS R10 kèm ống kính RF-S 18-45mm f/4.5-6.3 IS STM là một lựa chọn lý tưởng cho những người đam mê nhiếp ảnh và quay phim, kết hợp giữa hiệu suất mạnh mẽ và tính linh hoạt.
    
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến APS-C CMOS 24.2MP và bộ xử lý hình ảnh DIGIC X, máy ảnh mang lại chất lượng hình ảnh sắc nét, chi tiết và màu sắc trung thực. 
Chụp liên tục tốc độ cao: Hỗ trợ chụp liên tục lên đến 23 khung hình/giây với màn trập điện tử và 15 khung hình/giây với màn trập cơ học, giúp bạn không bỏ lỡ khoảnh khắc quan trọng. 
Quay video 4K: Khả năng quay video 4K với chất lượng cao, phù hợp cho các nhà làm phim không chuyên. 
Hệ thống lấy nét tự động: Sử dụng công nghệ Dual Pixel CMOS AF II tiên tiến, đảm bảo khả năng lấy nét nhanh chóng và chính xác. 
Thiết kế nhỏ gọn: Với trọng lượng chỉ khoảng 429g, EOS R10 dễ dàng mang theo trong các chuyến đi.`,
    '');

FeatureProduct.add('./asset/img/5.jpeg',
    `MÁY ẢNH CANON EOS R50 KIT 18-45MM IS STM - CHÍNH HÃNG`,
    'DESIGNED',
    `49990000`,
    `Máy ảnh Canon EOS R50 kèm ống kính RF-S 18-45mm f/4.5-6.3 IS STM là một lựa chọn lý tưởng cho những người đam mê nhiếp ảnh và quay phim, kết hợp giữa hiệu suất mạnh mẽ và tính linh hoạt.
    
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến APS-C CMOS 24.2MP và bộ xử lý hình ảnh DIGIC X, máy ảnh mang lại chất lượng hình ảnh sắc nét, chi tiết và màu sắc trung thực. 
Chụp liên tục tốc độ cao: Hỗ trợ chụp liên tục lên đến 15 khung hình/giây với màn trập điện tử, giúp bạn không bỏ lỡ khoảnh khắc quan trọng. 
Quay video 4K: Khả năng quay video 4K với chất lượng cao, phù hợp cho các nhà làm phim không chuyên. 
Hệ thống lấy nét tự động: Sử dụng công nghệ Dual Pixel CMOS AF II tiên tiến, đảm bảo khả năng lấy nét nhanh chóng và chính xác. 
Thiết kế nhỏ gọn: Với trọng lượng chỉ khoảng 375g (bao gồm pin và thẻ nhớ), EOS R50 dễ dàng mang theo trong các chuyến đi.`,
    '');

FeatureProduct.add('./asset/img/6.jpg',
    `Sony DSC-RX100M3 - Hàng chính hãng`,
    'TRADITIONAL',
    `9990000`,
    `Máy ảnh Sony DSC-RX100M3 là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh nhỏ gọn nhưng mạnh mẽ, phù hợp cho cả nhiếp ảnh gia chuyên nghiệp và người dùng phổ thông.
   
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến Exmor R CMOS loại 1.0 với độ phân giải 20.1 megapixel, kết hợp cùng bộ xử lý hình ảnh BIONZ X, giúp tái tạo hình ảnh sắc nét và chi tiết. 
Ống kính: Sử dụng ống kính ZEISS Vario-Sonnar T* với khẩu độ F1.8-2.8, tiêu cự 24-70mm (tương đương 35mm), cho phép chụp ảnh trong điều kiện ánh sáng yếu và tạo hiệu ứng bokeh đẹp mắt. 
Khung ngắm điện tử (EVF): Tích hợp khung ngắm điện tử OLED Tru-Finder với độ phân giải cao, hỗ trợ chụp ảnh chính xác và thuận tiện trong mọi điều kiện ánh sáng. 
Màn hình lật: Màn hình LCD 3.0 inch có khả năng lật 180 độ, hỗ trợ chụp ảnh selfie và quay vlog dễ dàng. 
Quay video Full HD: Hỗ trợ quay video Full HD với nhiều chế độ khung hình, đáp ứng nhu cầu quay phim chất lượng cao. `,
    '');

FeatureProduct.add('./asset/img/SonyA1.jpg',
    `Sony DSC-RX100M4 - Hàng chính hãng `,
    'TRADITIONAL',
    `12500000`,
    `Máy ảnh Sony Cyber-shot DSC-RX100 IV là phiên bản nâng cấp của dòng RX100, kết hợp thiết kế nhỏ gọn với hiệu suất cao, phù hợp cho cả nhiếp ảnh gia chuyên nghiệp và người dùng phổ thông. 
   
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến Exmor RS CMOS 1.0 inch với độ phân giải 20.1 megapixel, kết hợp bộ xử lý hình ảnh BIONZ X, mang lại hình ảnh sắc nét và chi tiết. 
Ống kính: Sử dụng ống kính ZEISS Vario-Sonnar T* với khẩu độ F1.8-2.8, tiêu cự 24-70mm (tương đương 35mm), cho phép chụp ảnh trong điều kiện ánh sáng yếu và tạo hiệu ứng bokeh đẹp mắt. 
Khung ngắm điện tử (EVF): Tích hợp khung ngắm điện tử OLED Tru-Finder với độ phân giải cao, hỗ trợ chụp ảnh chính xác và thuận tiện trong mọi điều kiện ánh sáng. 
Màn hình lật: Màn hình LCD 3.0 inch có khả năng lật 180 độ, hỗ trợ chụp ảnh selfie và quay vlog dễ dàng. 
Quay video 4K: Hỗ trợ quay video 4K với nhiều chế độ khung hình, đáp ứng nhu cầu quay phim chất lượng cao.`,
    '');

FeatureProduct.add('./asset/img/9.jpg',
    `MÁY ẢNH CANON POWERSHOT G7X MARK III (SILVER) - CHÍNH HÃNG`,
    'DESIGNED',
    `24990000`,
    `Máy ảnh Canon PowerShot G7 X Mark III (Silver) là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh nhỏ gọn nhưng mạnh mẽ, phù hợp cho cả nhiếp ảnh gia chuyên nghiệp và người dùng phổ thông.
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS 1.0 inch với độ phân giải 20.1 megapixel, kết hợp bộ xử lý hình ảnh DIGIC 8, mang lại hình ảnh sắc nét và chi tiết. 
Ống kính: Sử dụng ống kính 24-100mm f/1.8-2.8, cho phép chụp ảnh trong điều kiện ánh sáng yếu và tạo hiệu ứng bokeh đẹp mắt. 
Khả năng quay video: Hỗ trợ quay video 4K mà không bị crop, cho phép sáng tạo nhiều hơn trong việc quay phim. 
Truyền phát trực tiếp: Tích hợp chức năng truyền phát video trực tiếp lên YouTube thông qua Live Streaming, hỗ trợ các vlogger và blogger. 
Thiết kế nhỏ gọn: Với trọng lượng chỉ 304g, thiết kế sang trọng và dễ dàng mang theo. `,
    '');

FeatureProduct.add('./asset/img/10.jpg',
    `MÁY ẢNH CANON POWERSHOT G7X MARK III BLACK - CHÍNH HÃNG`,
    'DESIGNED',
    `34990000`,
    `Máy ảnh Canon PowerShot G7 X Mark III (Black) là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh nhỏ gọn nhưng mạnh mẽ, phù hợp cho cả nhiếp ảnh gia chuyên nghiệp và người dùng phổ thông.

    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS 1.0 inch với độ phân giải 20.1 megapixel, kết hợp bộ xử lý hình ảnh DIGIC 8, mang lại hình ảnh sắc nét và chi tiết. 
Ống kính: Sử dụng ống kính 24-100mm f/1.8-2.8, cho phép chụp ảnh trong điều kiện ánh sáng yếu và tạo hiệu ứng bokeh đẹp mắt. 
Khả năng quay video: Hỗ trợ quay video 4K mà không bị crop, cho phép sáng tạo nhiều hơn trong việc quay phim. 
Truyền phát trực tiếp: Tích hợp chức năng truyền phát video trực tiếp lên YouTube thông qua Live Streaming, hỗ trợ các vlogger và blogger. 
Thiết kế nhỏ gọn: Với trọng lượng chỉ 304g, thiết kế sang trọng và dễ dàng mang theo.`,
    '');

FeatureProduct.add('./asset/img/11.jpeg',
    `MÁY ẢNH CANON EOS RP + KIT RF24-105MM F4- CHÍNH HÃNG`,
    'DESIGNED',
    `14990000`,
    `Máy ảnh Canon EOS RP kết hợp với ống kính RF24-105mm F4-7.1 IS STM là một lựa chọn lý tưởng cho những ai tìm kiếm một chiếc máy ảnh không gương lật full-frame nhỏ gọn nhưng mạnh mẽ.
    
    Đặc điểm nổi bật:

Cảm biến và bộ xử lý: Trang bị cảm biến CMOS full-frame 26.2 megapixel kết hợp với bộ xử lý hình ảnh DIGIC 8, mang lại hình ảnh sắc nét và chi tiết. 
Hệ thống lấy nét: Hệ thống lấy nét Dual Pixel CMOS AF với 4.779 điểm lấy nét, hỗ trợ lấy nét nhanh chóng và chính xác. 
Màn hình và kính ngắm: Màn hình LCD 3.0 inch cảm ứng có khả năng xoay lật, cùng với kính ngắm điện tử OLED 2.36 triệu điểm ảnh, hỗ trợ chụp ảnh linh hoạt và thuận tiện. 
Khả năng quay video: Hỗ trợ quay video 4K và Full HD 1080p, đáp ứng nhu cầu quay phim chất lượng cao. 
Kết nối: Tích hợp Wi-Fi và Bluetooth, cho phép kết nối và chia sẻ hình ảnh dễ dàng. `,
    '');

// FeatureProduct.add('./asset/img/STRAWJELLYJAM.png',
//     `STRAWJELLY JAM`,
//     'DESIGNED',
//     `69000`,
//     `Donut strawberry filling & chocolate top
// You adore real white chocolate. And love real strawberries? 
// This chocolatey flavour bomb with strawberry pieces is right up you alley! 
// Discover its super sweet strawberry filling yourself. `,
//     '');

// FeatureProduct.add('./asset/img/TheBelgiyummy.png',
//     `THE BELGIYUMMY`,
//     'DESIGNED',
//     `89000`,
//     `Donut Belgian chocolate filling & top
// Huuuge donut. Teeny-tiny country! 
// A luxuriously dark delight, proud of its white chocolate flakes, 
// indulgent choco chunks and authentic Belgian chocolate glazing. 
// Its even filled with REAL BELGIAN CHOCOLATE! Anyone got a map?`,
//     '');

// FeatureProduct.add('./asset/img/WillamonTell.png',
//     `WILLAMON TELL`,
//     'TRADITIONAL',
//     `49000`,
//     `Donut apple filling & cinnamon sugar`,
//     '');
localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));