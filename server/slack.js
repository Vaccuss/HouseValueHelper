/**
 * Created by Dean on 13-Mar-16.
 */
let SlackAPI = Meteor.npmRequire( 'node-slack' ),
    Slack    = new SlackAPI(Meteor.settings.private.slack.hookUrl );




//Slack.send({
//    text: "Isn't life a series of images that change as they repeat themselves?",
//});

