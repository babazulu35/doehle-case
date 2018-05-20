const jsonConcat = require('json-concat');

jsonConcat({
    src: ["mock/data/user.json", "mock/data/mainmenu.json", "mock/data/dashboard.json"],
    dest: "mock/mock.json"
}, function(json) {
    console.log("Concatted Json", json)
})