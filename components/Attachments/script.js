var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var img_index = 1;
            var img = $('<img />').attr({
                'id': 'myImage' + img_index,
                'src': e.target.result,
            }).appendTo('.gallery');
            img_index++;
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(".file-upload").on('change', function() {
    readURL(this);
});

$('div.nextButton').on('click', function() {
  $('nav.sidebar ul li:nth-child(4)').click();
});
