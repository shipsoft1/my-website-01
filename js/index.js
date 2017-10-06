$(function() {

    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/danyluk65@gmail.com",
            method: "POST",
            data: { 
                clientName: $('#client-name').val(),
                clientEmail: $('#client-email').val(),
                clientQuestion: $('#client-comment').val()},
            dataType: "json"
        }).done(function() {
            form.reset();
            $('#message-box').html('Thank you!');
        }).fail(function() {
            $('#message-box').html('Sorry, error occured!');
        });
    });

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 500);
    });
});
