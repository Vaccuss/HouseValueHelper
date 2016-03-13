/**
 * Created by Dean on 13-Mar-16.
 */
Meteor.startup(function () {
    Meteor.startup(function () {
        smtp = {
            username: 'deansteven308@gmail.com',
            password: 'Deathblades1',
            server: 'smtp.gmail.com',
            port: 587
        };

        process.env.MAIL_URL = 'smtp://' + smtp.username + ':' + smtp.password + '@' +smtp.server + ':' + smtp.port;
    });
});