$(document).ready(function() {
    console.log('here');
    $('nav.sidebar').load('./components/sidebar.html');
    $('div.cards').load('./components/PersonalInformation/index.html');
});