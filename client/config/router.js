/**
 * Created by Dean on 08-Mar-16.
 */
Router.configure({
    layoutTemplate: 'standardLayout',
    notFoundTemplate: 'notFound'
});

Router.route('/', function () {
    this.render('home');
});