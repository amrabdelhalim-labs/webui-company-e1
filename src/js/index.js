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

// كتابة التاريخ الحالي في جميع الحقوق محفوظة
var date = new Date();
var year = date.getFullYear();
document.getElementById('date').innerHTML = year;