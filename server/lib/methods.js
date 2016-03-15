/**
 * Created by Dean on 13-Mar-16.
 */

SlackAPI = Meteor.npmRequire('node-slack');
var Slacker = new SlackAPI("https://hooks.slack.com/services/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");

Meteor.methods({
    "New_client_log": function (data) {
        //console.log(data)
        Slacker.send({
            text: "Appraisal Request",
            attachments: [
                {
                    fallback: "New Appraisal",
                    color: 'good',
                    fields: [
                        {title: data.first_name + ' ' + data.last_name, value: data.address},
                        {title: "Contact Details", value: data.email + " " + data.phone_number},
                        {title: "House Details", value: "Bed: " + data.bedrooms + " Bath: " + data.bathrooms + " Car: " + data.car_ports},
                        {title: "Conditon", value: data.condition},
                        {title: "Other Features", value: data.other_features}
                    ]
                }
            ]
        });
    }
});