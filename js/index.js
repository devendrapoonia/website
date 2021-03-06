console.log('Loaded');


window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
};

let links = document.getElementsByTagName('a');

for (let item of links) {
    item.addEventListener('click', toggleMenu);
};

let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let nameval = $('#name').val();
    let emailval = $('#email').val();
    let message = $('#message').val();


    let regex = /^([_\-\.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    
    if(grecaptcha.getResponse() == ""){
        alert('Please check the captcha!')
    }else{

    if (regex.test(emailval) === true && nameval.trim() !== '' && message.trim() !== '') {
        var link = "https://docs.google.com/forms/d/e/1FAIpQLSfnz5SRNGoGzBRG2mecELS-nbaa1t2gQsvHNoryfwoJ66Owyw/formResponse";
        jQuery.ajax({
            url: link,
            data: { "entry.46084455": $("#name").val(), "entry.1920329375": $("#email").val(), "entry.1180652057": $("#message").val() },
            type: "POST",
            dataType: "xml",
            crossDomain: true
        });
        form.style.display = 'none';
        document.getElementById('feedback').style.opacity = '1';
    }else{
        alert('Please enter correct details!');
    };
}
});

$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 'easeinExpo');
            return false;
        }
    });
});
