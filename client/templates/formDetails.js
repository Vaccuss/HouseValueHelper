/**
 * Created by Dean on 12-Mar-16.
 */


Template.formDetails.events({
    'click #accord': function () {
        $('.ui.accordion').accordion();
    },


    "click #next": function () {
        $('.ui.accordion').accordion('open', 1);
    },

    "click #back": function () {
        $('.ui.accordion').accordion('open', 0);
    },

    "click #submit": function () {
        var address =  $('#address').val();
        var select_details =    $('.ui.dropdown').dropdown('get value');
        var other_features =  $('#other_features').val();
        var first_name =  $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var phone_number = $('#phone_number').val();

        var data = {
            "address"        : address,
            "property_type"  : select_details[0],
            "condition"      : select_details[1],
            "size_of_house"  : select_details[2],
            "bedrooms"       : select_details[3],
            "bathrooms"      : select_details[4],
            "car_ports"      : select_details[5],
            "other_features" : other_features,
            "first_name"     : first_name,
            "last_name"      : last_name,
            "email"          : email,
            "phone_number"   : phone_number
        };
        Meteor.call('New_client_log', data);
        Meteor.call('send_mail', data);
        Router.go('thank-you');
        //console.log(data)

    }

});