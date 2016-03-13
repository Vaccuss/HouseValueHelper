/**
 * Created by Dean on 13-Mar-16.
 */

SlackAPI = Meteor.npmRequire('node-slack');
var Slacker = new SlackAPI(Meteor.settings.private.slack.hookUrl);

Meteor.methods({
    "New_client_log": function (data) {
        //console.log(data)
        Slacker.send({
            text: "Client Log",
            attachments : [
                {
                    fallback: "New Appraisal",
                    color: 'good',
                    fields: [
                        { title: data.first_name + ' ' + data.last_name, value: data.address }
                    ]
                }
            ]
        });
    }

});