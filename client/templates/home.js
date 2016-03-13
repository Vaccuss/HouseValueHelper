/**
 * Created by Dean on 08-Mar-16.
 */


Template.home.events({
    'click select': function () {
        $("select.ui.dropdown").dropdown();
    }

});