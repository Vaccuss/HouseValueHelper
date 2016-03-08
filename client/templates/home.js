/**
 * Created by Dean on 08-Mar-16.
 */
$("#checkbox").checkbox();


Template.home.events({
    'click input': function () {
        $('#myToggleButton').button()
    },

    'click select': function () {
        $("select .ui.dropdown").dropdown();
    }

});

