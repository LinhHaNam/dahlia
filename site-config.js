/**
 * =========================================================================
 * CẤU HÌNH DÙNG CHUNG TOÀN BỘ WEBSITE - THE DAHLIA TRAVEL
 * Tệp: site-config.js
 * =========================================================================
 * Khi bạn muốn đổi thông báo khuyến mãi, mã giảm giá hoặc thông tin liên hệ,
 * BẠN CHỈ CẦN CHỈNH SỬA TẠI FILE NÀY 1 LẦN.
 * Toàn bộ các trang và hệ thống tính tiền đặt tour sẽ tự động nhận mã ngay lập tức!
 */

const SITE_CONFIG = {
  // -------------------------------------------------------------
  // 1. DÒNG THÔNG BÁO ƯU ĐÃI TRÊN CÙNG (TOP ANNOUNCEMENT BAR)
  // -------------------------------------------------------------
  promo: {
    // Tiêu đề in đậm (hiển thị cạnh biểu tượng hộp quà)
    title: "Ưu đãi mùa du lịch 2026:",

    // Mã ưu đãi 1 (Đổi mã hoặc mức giảm ở đây, form đặt tour tự động nhận luôn!)
    code1: "DEPTRAI",
    desc1: "giảm ngay 10%",

    // Mã ưu đãi 2
    code2: "VIP",
    desc2: "giảm 200.000₫!",

    /**
     * TÙY CHỌN NÂNG CAO (Nội dung tự do):
     * Nếu bạn muốn hiển thị một câu thông báo tự do bất kỳ không theo dạng 2 mã ở trên,
     * hãy điền nội dung (có thể chứa chữ hoặc thẻ HTML) vào giữa 2 dấu ngoặc kép bên dưới.
     * Ví dụ: "<b>Chào hè 2026:</b> Tặng vé buffet du thuyền cho tất cả booking trước 30/04!"
     * 
     * Nếu để rỗng "" thì hệ thống sẽ tự động hiển thị theo title, code1, code2 ở trên.
     */
    customHtml: ""
  },

  // -------------------------------------------------------------
  // 2. DANH SÁCH MÃ GIẢM GIÁ HOẠT ĐỘNG (Áp dụng khi khách đặt tour)
  // Bạn có thể thêm bất kỳ mã nào vào đây:
  // - type: "percent" (theo %) | value: 10 nghĩa là 10%
  // - type: "fixed" (số tiền cố định) | value: 200000 nghĩa là 200.000₫
  // -------------------------------------------------------------
  coupons: {
    "DEPTRAI": { type: "percent", value: 10, label: "Giảm 10% tổng tiền tour" },
    "VIP": { type: "fixed", value: 200000, label: "Giảm trực tiếp 200.000 ₫" },
    "DAHLIA10": { type: "percent", value: 10, label: "Giảm 10% tổng hóa đơn" },
    "SUMMER": { type: "fixed", value: 150000, label: "Giảm 150.000 ₫ mùa du lịch" }
  },

  // -------------------------------------------------------------
  // 3. THÔNG TIN LIÊN HỆ DÙNG CHUNG
  // -------------------------------------------------------------
  contact: {
    hotline: "1900 888 666",
    wapus: "0988 888 888",
    email: "booking@dahlia.travel"
  }
};

/**
 * Lấy thông tin chi tiết của một mã giảm giá (áp dụng vào form tính tiền tour)
 * @param {string} code 
 * @returns {{ type: 'percent'|'fixed', value: number, label: string } | null}
 */
function getPromoCodeDetails(code) {
  if (!code) return null;
  const upperCode = code.trim().toUpperCase();

  // 1. Kiểm tra trong danh sách coupons cấu hình
  if (SITE_CONFIG.coupons && SITE_CONFIG.coupons[upperCode]) {
    return SITE_CONFIG.coupons[upperCode];
  }

  // 2. Tự động nhận diện nếu người dùng đổi code1 trong promo
  if (SITE_CONFIG.promo && SITE_CONFIG.promo.code1 && SITE_CONFIG.promo.code1.trim().toUpperCase() === upperCode) {
    const desc = SITE_CONFIG.promo.desc1 || "";
    const isPercent = desc.includes("%");
    const num = parseInt(desc.replace(/\D/g, "")) || (isPercent ? 10 : 200000);
    return {
      type: isPercent ? "percent" : "fixed",
      value: num,
      label: isPercent ? `Giảm ${num}% tổng hóa đơn` : `Giảm trực tiếp ${num.toLocaleString('vi-VN')} ₫`
    };
  }

  // 3. Tự động nhận diện nếu người dùng đổi code2 trong promo
  if (SITE_CONFIG.promo && SITE_CONFIG.promo.code2 && SITE_CONFIG.promo.code2.trim().toUpperCase() === upperCode) {
    const desc = SITE_CONFIG.promo.desc2 || "";
    const isPercent = desc.includes("%");
    const num = parseInt(desc.replace(/\D/g, "")) || (isPercent ? 10 : 200000);
    return {
      type: isPercent ? "percent" : "fixed",
      value: num,
      label: isPercent ? `Giảm ${num}% tổng hóa đơn` : `Giảm trực tiếp ${num.toLocaleString('vi-VN')} ₫`
    };
  }

  // 4. Kiểm tra trong PROMO_CODES mặc định
  if (typeof PROMO_CODES !== "undefined" && PROMO_CODES[upperCode]) {
    return PROMO_CODES[upperCode];
  }

  return null;
}

/**
 * Tự động đồng bộ nội dung thanh ưu đãi ra tất cả các trang
 */
function renderTopBarPromo() {
  const promoEl = document.getElementById("topBarPromo");
  if (!promoEl || !SITE_CONFIG || !SITE_CONFIG.promo) return;

  const isTourPage = window.location.pathname.endsWith("tour.html") || window.location.href.includes("tour.html");
  const p = SITE_CONFIG.promo;

  if (p.customHtml && p.customHtml.trim() !== "") {
    promoEl.innerHTML = `<i data-icon="gift"></i> ${p.customHtml}`;
  } else {
    // Link cho mã 1: Ở tour.html thì cuộn và tự điền; ở trang khác thì chuyển hướng sang tour.html
    const link1 = isTourPage ? "#couponInput" : `tour.html?coupon=${encodeURIComponent(p.code1)}#couponInput`;
    const click1 = isTourPage ? `onclick="if(typeof quickApplyCoupon==='function'){ quickApplyCoupon('${p.code1}'); }"` : "";

    // Link cho mã 2
    const link2 = isTourPage ? "#couponInput" : `tour.html?coupon=${encodeURIComponent(p.code2)}#couponInput`;
    const click2 = isTourPage ? `onclick="if(typeof quickApplyCoupon==='function'){ quickApplyCoupon('${p.code2}'); }"` : "";

    promoEl.innerHTML = `
      <i data-icon="gift"></i> <b>${p.title}</b> Nhập mã <a href="${link1}" ${click1}>${p.code1}</a> ${p.desc1} hoặc <a href="${link2}" ${click2}>${p.code2}</a> ${p.desc2}
    `.trim();
  }

  // Tự động render biểu tượng SVG
  if (typeof renderLineIcons === "function") {
    renderLineIcons(promoEl);
  }
}

/**
 * Tự động đồng bộ số điện thoại hotline & wapus ở thanh trên cùng
 */
function renderTopBarContact() {
  const contactEl = document.getElementById("topBarContact");
  if (!contactEl || !SITE_CONFIG || !SITE_CONFIG.contact) return;

  const c = SITE_CONFIG.contact;
  contactEl.innerHTML = `
    <span><i data-icon="phone"></i> Hotline: <b>${c.hotline}</b></span>
    <span><i data-icon="chat"></i> Hỗ trợ Wapus / Zalo: <b>${c.wapus}</b></span>
  `.trim();

  if (typeof renderLineIcons === "function") {
    renderLineIcons(contactEl);
  }
}

// Khởi chạy đồng bộ khi trang tải xong
function initSiteConfig() {
  renderTopBarPromo();
  renderTopBarContact();

  // Đồng bộ vào PROMO_CODES nếu có
  if (typeof PROMO_CODES !== "undefined") {
    if (SITE_CONFIG.coupons) Object.assign(PROMO_CODES, SITE_CONFIG.coupons);
    if (SITE_CONFIG.promo && SITE_CONFIG.promo.code1) {
      const d1 = getPromoCodeDetails(SITE_CONFIG.promo.code1);
      if (d1) PROMO_CODES[SITE_CONFIG.promo.code1.toUpperCase()] = d1;
    }
    if (SITE_CONFIG.promo && SITE_CONFIG.promo.code2) {
      const d2 = getPromoCodeDetails(SITE_CONFIG.promo.code2);
      if (d2) PROMO_CODES[SITE_CONFIG.promo.code2.toUpperCase()] = d2;
    }
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSiteConfig);
  } else {
    initSiteConfig();
  }
}
