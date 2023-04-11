module.exports = () => {
    const app = express();
    require("./server.Routes.js")(app)
    return app;
}