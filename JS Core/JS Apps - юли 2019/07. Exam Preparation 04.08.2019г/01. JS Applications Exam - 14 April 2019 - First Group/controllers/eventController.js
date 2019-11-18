const eventController = function () {

    const getCreateEvent = function (context) {

        helper.userLogged(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/event/createEvent.hbs')
        })
    };

    const postCreateEvent = function (context) {

        eventModel.createEvent(context.params)
            .then(helper.handler)
            .then((data) => {
                //TODO notify
                homeController.getHome(context)
            })
    };

    const getEventDetails = async function (context) {

        helper.userLogged(context)

        let response = await eventModel.getEvent(context.params.eventId);
        let event = await response.json();

        Object.keys(event).forEach((key) => {
            context[key] = event[key];
        });

        context.isCreator = JSON.parse(storage.getData("userInfo")).username === event.organizer

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/event/detailsEvent.hbs')
        })
    };

    const getEditEvent = async function (context) {

        helper.userLogged(context)

        let response = await eventModel.getEvent(context.params.eventId)
        let event = await response.json();

        Object.keys(event).forEach((key) => {
            context[key] = event[key];
        });
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/event/editEvent.hbs')
        })
    };

    const postEditEvent = function (context) {

        eventModel.editEvent(context.params)
            .then(helper.handler)
            .then((data) => {
                console.log(data)
                homeController.getHome(context);
            })
    };

    const getDeleteEvent = function (context) {

        eventModel.deleteEvent(context.params.eventId)
            .then(helper.handler)
            .then((data) => {
                console.log(data)
                homeController.getHome(context);
            })
    };

    const getJoinEvent = function (context) {

        eventModel.joinEvent(context.params.eventId)
            .then(helper.handler)
            .then((data) => {
                console.log(data)
                homeController.getHome(context);
            })
    }

    return {
        getCreateEvent,
        postCreateEvent,
        getEventDetails,
        getEditEvent,
        postEditEvent,
        getDeleteEvent,
        getCreateEvent,
        getJoinEvent,
    };

}();