$('div.nextButton').on('click', function() {
    $('nav.sidebar ul li:nth-child(3)').click();
});

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
var formArray = [];

function populate(frm, data) {
  $.each(data, function(key, value){
    $('[name='+key+']', frm).val(value);
  });
}

$('#addNewForm').on('click', function() {
    var formData = getFormData($('form'));
    formArray.push(formData);
    $('form').find('input[type=text], input[type=number]').val('');
    $('.setPositionLeft').show();
});

$('.setPositionLeft').on('click', function() {
  var fields = formArray.pop();
  if(fields && Object.keys(fields).length > 0) {
    populate('form', fields);
  } else {
    $(this).hide();
  }
})