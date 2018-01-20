var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            console.log('e name', e);
            var img_index = 1;
            var img = $('<img />').attr({
                'id': 'myImage' + img_index,
                'src': e.target.result,
            }).appendTo('.gallery');
            img_index++;
            // $('.profile-pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(".file-upload").on('change', function() {
    readURL(this);
});