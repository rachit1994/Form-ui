var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.profile-pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(".file-upload").on('change', function() {
    readURL(this);
});

$('div.nextButton').on('click', function() {
    $('nav.sidebar ul li:nth-child(2)').click();
});