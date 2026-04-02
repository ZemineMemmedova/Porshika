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
window.onclick = function(event) {
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
            tabParams.className = "bg-[#333638] text-white px-2 py-1 transition-all";
            tabAuto.className = "bg-white text-gray-800 px-2 py-1 transition-all";
        } else {
            paramsContent.classList.add('hidden');
            autoContent.classList.remove('hidden');
            autoContent.classList.add('block');
            tabAuto.className = "bg-[#333638] text-white px-2 py-1 transition-all";
            tabParams.className = "bg-white text-gray-800 px-2 py-1 transition-all";
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
    window.onclick = function(event) {
        if (!event.target.closest('.relative')) {
            document.querySelectorAll('.menu').forEach(m => m.classList.add('hidden'));
        }
    }


//disk mentiqinin islemesi

function toggleTab(section, type) {
    // Bölmələrin məzmun div-ləri
    const paramsContent = document.getElementById(section + '-params-content');
    const autoContent = document.getElementById(section + '-auto-content');
    
    // Tab düymələri
    const tabParams = document.getElementById(section + '-tab-params');
    const tabAuto = document.getElementById(section + '-tab-auto');
    
    // Alt düymə mətni
    const footerBtn = document.getElementById(section + '-footer-btn');

    if (type === 'params') {
        // Parametrləri göstər
        paramsContent.classList.remove('hidden');
        paramsContent.classList.add('block');
        autoContent.classList.remove('block');
        autoContent.classList.add('hidden');
        
        // Tab rənglərini dəyiş (Seçilmiş: Tünd, Seçilməmiş: Ağ)
        tabParams.className = "bg-[#333638] text-white px-2 py-1 transition-all";
        tabAuto.className = "bg-white text-gray-800 px-2 py-1 transition-all";
        
        // Alt düyməni yenilə
        footerBtn.innerText = section === 'shin' ? "Больше параметров +" : "Больше параметров +";
    } else {
        // Avtomobili göstər
        paramsContent.classList.remove('block');
        paramsContent.classList.add('hidden');
        autoContent.classList.remove('hidden');
        autoContent.classList.add('block');
        
        // Tab rənglərini dəyiş (Seçilmiş: Tünd, Seçilməmiş: Ağ)
        tabAuto.className = "bg-[#333638] text-white px-2 py-1 transition-all";
        tabParams.className = "bg-white text-gray-800 px-2 py-1 transition-all";
        
        // Alt düyməni yenilə
        footerBtn.innerText = section === 'shin' ? "Каталог авто +" : "Каталог авто +";
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
                if(nextBtn && prevBtn) {
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


