import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import 'jquery/dist/jquery.js';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '../sass/style.scss';

// اخفاء واظهار اخر الاعمال في الصفحة الرئيسية
$(function() {
    $(".h-projects-thumbnail").hover(
        function() {
            // عند دخول الماوس على العنصر
            $(this).find(".h-projects-category").hide();
            $(this).find(".h-projects-caption").slideDown(250);
        },
        function() {
            // عند خروج الماوس من العنصر
            $(this).find(".h-projects-category").show();
            $(this).find(".h-projects-caption").slideUp(250);
        }
    );
});

// شفرة تفاصيل المشروع
document.addEventListener('DOMContentLoaded', function () {
    let currentImage;

    document.querySelectorAll('a.thumbnail').forEach((thumbnail, index) => {
        thumbnail.setAttribute('data-image-id', index + 1);
        thumbnail.addEventListener('click', function (event) {
            event.preventDefault();
            currentImage = index + 1;
            updateGallery(thumbnail);
        });
    });

    document.getElementById('show-next-image').addEventListener('click', function () {
        if (currentImage < document.querySelectorAll('a.thumbnail').length) {
            currentImage++;
            updateGallery(document.querySelector(`a.thumbnail[data-image-id="${currentImage}"]`));
        }
    });

    document.getElementById('show-previous-image').addEventListener('click', function () {
        if (currentImage > 1) {
            currentImage--;
            updateGallery(document.querySelector(`a.thumbnail[data-image-id="${currentImage}"]`));
        }
    });

    function updateGallery(thumbnail) {
        const title = thumbnail.getAttribute('data-bs-title');
        const image = thumbnail.querySelector('img').getAttribute('src');

        document.getElementById('image-gallery-title').textContent = title;
        document.getElementById('image-gallery-image').setAttribute('src', image);

        disableButtons();
    }

    function disableButtons() {
        const totalImages = document.querySelectorAll('a.thumbnail').length;
        document.getElementById('show-previous-image').style.display = currentImage === 1 ? 'none' : 'inline-block';
        document.getElementById('show-next-image').style.display = currentImage === totalImages ? 'none' : 'inline-block';
    }
});

// كتابة التاريخ الحالي في جميع الحقوق محفوظة
var date = new Date();
var year = date.getFullYear();
document.getElementById('date').innerHTML = year;

// إظهار اسم الصورة بعد ادخالها في حقل التحميل
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });