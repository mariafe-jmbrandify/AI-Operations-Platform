function runWorkflow() {

    App.start();

}

function dailySummary() {

    App.dailySummary();

}

function onOpen() {

    App.menu();

}

function doPost(e) {

    App.webhook(e);

}