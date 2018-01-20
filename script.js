$(document).ready(function() {
    console.log('here');
    $('nav.sidebar').load('./components/sidebar.html', function() {
      $('nav.sidebar ul li').on('click', function() {
        $('nav.sidebar ul li').removeClass('active');
        $(this).addClass('active');

        // sidebar function
        if(this.title === 'Personal Information') {
            $('div.cards').load('./components/PersonalInformation/index.html');
        } else if(this.title === 'Addresses') {
            $('div.cards').load('./components/Addresses/index.html');
        } else if(this.title === 'Attachements') {
            $('div.cards').load('./components/Attachments/index.html');
        } else if(this.title === 'Tax Information') {
            $('div.cards').load('./components/TaxInfo/index.html');
        } else if (this.title === 'Payment Information') {
            $('div.cards').load('./components/PaymentInfo/index.html');
        }

      })
    });

    $('div.cards').load('./components/PersonalInformation/index.html');
});