const app = Sammy("body", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);
    
    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    //Events
    this.get("#/createEvent", eventController.getCreateEvent);
    this.post("#/createEvent", eventController.postCreateEvent);

    this.get("#/eventDetails/:eventId", eventController.getEventDetails);
    this.get("#/editEvent/:eventId", eventController.getEditEvent);
    this.post("#/editEvent/:eventId", eventController.postEditEvent);

    this.get("#/deleteEvent/:eventId", eventController.getDeleteEvent);
    this.get("#/joinEvent/:eventId", eventController.getJoinEvent);

});

(() => {
    app.run('#/home');
})();