import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "jquery/dist/jquery.min.js";
import $ from 'jquery';
import "countup.js/dist/countUp.min.js";
import { CountUp } from 'countup.js';
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/style.css";


$(window).scroll(function(){
    if($(this).scrollTop()>=500){
        $("#navB").addClass("sty");
    }
    else{
        $("#navB").removeClass("sty");
    }
});
$(function(){
    $(".nav-link").click(function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
    let year =new Date();
    $("#fully").text(year.getFullYear());

    const website = new CountUp('website',250);
    website.start();
    const app = new CountUp('app',100);
    app.start();
    const users = new CountUp('users',10000);
    users.start();
    const editing = new CountUp('editing',30);
    editing.start();
    
    
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
