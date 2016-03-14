/**
 * Created by Dean on 13-Mar-16.
 */
let SlackAPI = Meteor.npmRequire( 'node-slack' ),
    Slack    = new SlackAPI(Meteor.settings.private.slack.hookUrl );
