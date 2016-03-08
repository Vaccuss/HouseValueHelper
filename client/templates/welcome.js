/**
 * Created by Dean on 08-Mar-16.
 */


Template.welcome.helpers({
    'click #button': function () {
        var address = $('#address').text();
        Session.set('address', address)
    },



});