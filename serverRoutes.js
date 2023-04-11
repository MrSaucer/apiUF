module.exports = () =>{
    const controller = require("./db.json");

    app.route("api/v1/db")
    .get(controller.listDb)
}