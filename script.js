document.addEventListener('DOMContentLoaded', () => {

    const brandSwiper = new Swiper('.brandSwiper', {
        slidesPerView: 3,         // Yan-yana 3 sütun
        grid: {
            rows: 2,              // Üst-üstə 2 sətir (cəmi 6 loqo eyni anda görünür)
            fill: 'row'
        },
        spaceBetween: 20,         // Loqolar arasındakı məsafə
        slidesPerGroup: 3,        // Next basanda 3 sütun hərəkət etsin

        // Meqa-menyu gizli olduğu üçün mütləqdir:
        observer: true,
        observeParents: true,

        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
    });

    const diskSwiper = new Swiper('.diskSwiper', {
        slidesPerView: 3,
        grid: { rows: 2, fill: 'row' },
        spaceBetween: 20,
        slidesPerGroup: 3,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.disk-next',
            prevEl: '.disk-prev',
        },
    });


});

///marka -------------------------
// Menyunun açılıb-bağlanması
function toggleDropdown() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('hidden');
}

// Markanın seçilməsi
function selectBrand(name, imgPath) {
    const selectedArea = document.getElementById('selected-brand');

    // Yuxarıdakı hissəni şəkil və yazı ilə yeniləyirik
    selectedArea.innerHTML = `
        <img src="${imgPath}" class="w-5 h-5 object-contain">
        <span class="text-xs text-black font-bold uppercase">${name}</span>
    `;

    // Menyunun bağlanması
    document.getElementById('dropdown-menu').classList.add('hidden');
}

// Kənara klikləyəndə menyunun bağlanması
window.onclick = function (event) {
    if (!event.target.closest('#brand-dropdown')) {
        document.getElementById('dropdown-menu').classList.add('hidden');
    }
}


///////markaaaa
// Tab keçid funksiyası
function toggleTab(section, type) {
    const paramsContent = document.getElementById(section + '-params-content');
    const autoContent = document.getElementById(section + '-auto-content');
    const tabParams = document.getElementById(section + '-tab-params');
    const tabAuto = document.getElementById(section + '-tab-auto');

    if (type === 'params') {
        paramsContent.classList.remove('hidden');
        paramsContent.classList.add('block');
        autoContent.classList.add('hidden');
        tabParams.className = "bg-[#333638] text-white px-2 py-3 transition-all";
        tabAuto.className = "bg-white text-gray-800 px-2 py-3 transition-all";
    } else {
        paramsContent.classList.add('hidden');
        autoContent.classList.remove('hidden');
        autoContent.classList.add('block');
        tabAuto.className = "bg-[#333638] text-white px-2 py-3 transition-all";
        tabParams.className = "bg-white text-gray-800 px-2 py-3 transition-all";
    }
}

// Dropdown açma/bağlama
function toggleUniversalDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const menu = dropdown.querySelector('.menu');

    // Digər menyuları bağla
    document.querySelectorAll('.menu').forEach(m => {
        if (m !== menu) m.classList.add('hidden');
    });

    menu.classList.toggle('hidden');
}

// Seçim etmə
function selectUniversalOption(dropdownId, name, imgPath) {
    const dropdown = document.getElementById(dropdownId);
    const selectedArea = dropdown.querySelector('.selected-area');

    selectedArea.innerHTML = `
            <img src="${imgPath}" class="w-5 h-5 object-contain">
            <span class="text-xs text-black font-bold uppercase">${name}</span>
        `;

    dropdown.querySelector('.menu').classList.add('hidden');
}

// Kənara klikləyəndə bağla
window.onclick = function (event) {
    if (!event.target.closest('.relative')) {
        document.querySelectorAll('.menu').forEach(m => m.classList.add('hidden'));
    }
}


//disk mentiqinin islemesi

function toggleTab(section, type) {
    const paramsContent = document.getElementById(section + '-params-content');
    const autoContent = document.getElementById(section + '-auto-content');
    const tabParams = document.getElementById(section + '-tab-params');
    const tabAuto = document.getElementById(section + '-tab-auto');
    const footerBtn = document.getElementById(section + '-footer-btn');

    // Stil Sabitləri
    const activeDark = "bg-[#333638] text-white px-2 py-2 transition-all font-bold uppercase cursor-pointer";
    const activeWhite = "bg-white text-gray-900 px-2 py-2 transition-all font-bold uppercase cursor-pointer";

    if (type === 'params') {
        // Məzmunu dəyiş
        paramsContent.classList.replace('hidden', 'block');
        autoContent.classList.replace('block', 'hidden');

        // Düymə rəngləri: Parametrlər AĞ, Avtomobil TÜND (Şəkildəki sol tərəf kimi)
        tabParams.className = activeWhite;
        tabAuto.className = activeDark;

        footerBtn.innerText = "Daha çox parametr +";
    } else {
        // Məzmunu dəyiş
        paramsContent.classList.replace('block', 'hidden');
        autoContent.classList.replace('hidden', 'block');

        // Düymə rəngləri: Avtomobil AĞ, Parametrlər TÜND (Şəkildəki sağ tərəf kimi)
        tabAuto.className = activeWhite;
        tabParams.className = activeDark;

        footerBtn.innerText = "Kataloq avto +";
    }
}

//section 6

// Swiper Konfiqurasiyası
const swiper = new Swiper(".mySwiper", {
    loop: true,
    // Autoplay silindi - şəkillər öz-özünə getməyəcək
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Düymələrin görünməsi üçün əlavə tənzimləmə
    on: {
        init: function () {
            // Oxların rəngini və ölçüsünü məcburi tənzimləyirik
            const nextBtn = document.querySelector('.swiper-button-next');
            const prevBtn = document.querySelector('.swiper-button-prev');
            if (nextBtn && prevBtn) {
                nextBtn.style.color = '#000'; // Qara rəng (və ya dizayna uyğun seç)
                prevBtn.style.color = '#000';
            }
        },
    },
});


//slider-------------------------
document.addEventListener('DOMContentLoaded', () => {
    const tireSlider = new Swiper('.myTireSlider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,           // BU HİSSƏ: Sona çatanda əvvələ qaytarır
        autoplay: {           // İSTƏSƏN: Avtomatik özü çevrilsin deyə
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 4
            }
        },
    });
});
// scrol div
// var swiperThumbs = new Swiper(".thumbSwiper", {
//     spaceBetween: 10,
//     loop: true,
//     slidesPerView: 4,
//     watchSlidesProgress: true,
//     freeMode: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });





// Main Swiper (Yuxarıdakı böyük şəkil)
// var swiperMain = new Swiper(".mainSwiper", {
//     loop: true,
//     spaceBetween: 10,
//     thumbs: {
//         swiper: swiperThumbs,
//     },
// });

var thumbsSwiper = new Swiper(".thumbsSwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mainSwiper", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".product-swiper-button-next",
        prevEl: ".product-swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });


//cedvel

document.addEventListener('DOMContentLoaded', () => {
    // Bütün məhsul sətirlərini tapırıq
    const rows = document.querySelectorAll('[data-price]');

    rows.forEach(row => {
        const minusBtn = row.querySelector('button:first-of-type'); // İlk buton (-)
        const plusBtn = row.querySelector('button:nth-of-type(2)'); // İkinci buton (+)
        const input = row.querySelector('input');
        const price = parseFloat(row.getAttribute('data-price'));
        // Qiymət yazılan span-ı tapırıq
        const totalSpan = row.querySelector('span.font-bold.text-gray-800.text-\\[13px\\]');

        // 1. Default olaraq 4 təyin edirik
        input.value = 4;
        updateTotal();

        // 2. Hesablama funksiyası
        function updateTotal() {
            let count = parseInt(input.value) || 0;
            if (count < 1) count = 1;
            input.value = count;
            if (totalSpan) {
                totalSpan.innerText = `= ${Math.round(count * price)} AZN`;
            }
        }

        // 3. Hadisələri dinləyirik (Event Listeners)
        minusBtn.addEventListener('click', () => {
            input.value = (parseInt(input.value) || 1) - 1;
            updateTotal();
        });

        plusBtn.addEventListener('click', () => {
            input.value = (parseInt(input.value) || 0) + 1;
            updateTotal();
        });

        input.addEventListener('input', () => {
            updateTotal();
        });
    });
});