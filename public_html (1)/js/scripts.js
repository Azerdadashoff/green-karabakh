function doGet() {
    var sheet = SpreadsheetApp.openById("1f3ojtNe0O2KMG3Gse5HPaugj5DZBPQV7Ivm6bDqZOAo").getSheetByName("QKU volunteers");
    var rowCount = sheet.getLastRow();
    
    var result = { "count": rowCount - 1 };  // başlıq sətrini çıxmaq üçün "-1" əlavə etdik
    
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  }


  document.querySelector('a[href="#About"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#About').scrollIntoView({
      behavior: 'smooth',
      block: 'center' // Bloku mərkəzə çəkir
    });
  });

  document.querySelector('a[href="#criteria"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#criteria').scrollIntoView({
      behavior: 'smooth',
      block: 'center' // Bloku mərkəzə çəkir
    });
  });


  document.querySelector('a[href="#topics"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#topics').scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Bloku mərkəzə çəkir
    });
  });

  // Hamburger menu functionality
  const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});





let lastScrollTop = 0;
let header = document.querySelector('header');
let isHeaderVisible = true;

document.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Aşağı sürüklənir
        if (isHeaderVisible) {
            header.classList.add('header-hidden');
            isHeaderVisible = false;
        }
    } else {
        // Yuxarı sürüklənir
        if (scrollTop === 0) {
            header.classList.remove('header-hidden');
            isHeaderVisible = true;
        }
    }

    lastScrollTop = scrollTop;
});


let topButton = document.getElementById("topBtn");

// Səhifə 20px-dən çox sürüşdüyündə düyməni görünən edin
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Düyməyə basıldığında səhifənin yuxarısına qaytarır
function topFunction() {
    document.body.scrollTop = 0; // Safari üçün
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE və Opera üçün
}