/**
 * Created by Dean on 13-Mar-16.
 */

SlackAPI = Meteor.npmRequire('node-slack');
var Slacker = new SlackAPI(Meteor.settings.private.slack.hookUrl);

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

    //"send_mail": function (data) {
    //    Email.send({
    //        from: "EmailBot@townsville-property.heroku.com",
    //        to: "deansteven308@gmail.com",
    //        subject: "Client Appraisal - " + data.first_name + " " + data.last_name,
    //        html: "<h1>" + data.first_name + " " + data.last_name + "</h1>" +
    //        "<h2>" + data.email +"</h2>" +
    //        "<h2>" + data.phone_number +"</h2>" +
    //        "<p> Address: " + data.address + "</p>" +
    //        "<p> Condition: " + data.condition + "</p>" +
    //        "<p> Bathrooms: " + data.bathrooms + "</p>" +
    //        "<p> Bedrooms: " + data.bedrooms + "</p>" +
    //        "<p> Car Ports: " + data.car_ports + "</p>" +
    //        "<p> Property type: " + data.property_type + "</p>" +
    //        "<p> Other Features: " + data.other_features + "</p>"
    //    })
    //}
});