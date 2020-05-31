$(document).ready(function(){
    
});
// Scroll to top 
$('.navbar-brand, .scroll_top').click(() => {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
});
$('#login-btn').click((e) => {
    e.preventDefault();
    let email = $('#login-mail').val();
    let pass = $('#login-pass').val();
    if(email === '' || pass === '') {
        $('#login-btn').html('Check values again!');
        setTimeout(() => {
            $('#login-btn').html('Login');
        }, 2000);
    }
    else {
        // ajax;
    }
});
$('#signup-btn').click((e) => {
    e.preventDefault();
    let name = $('#name').val();
    let phone = $('#phone').val();
    let email = $('#signup-mail').val();
    let pass = $('#signup-pass').val();
    let pass2 = $('#confirm-pass').val();
    let terms = $('#terms');
    if(name === '' || phone.length != 10 || email === '' || !terms.is(':checked')) {
        $('#signup-btn').html('Check values again!');
        setTimeout(() => {
            $('#signup-btn').html('SignUp');
        }, 2000);
    }
    else if(pass.length < 6 || pass != pass2) {
        $('#signup-btn').html('Check password!');
        setTimeout(() => {
            $('#signup-btn').html('SignUp');
        }, 2000);
    }
    else {
        // ajax;
    }
});