"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./api/api");
var errorHandler_1 = require("./api/errorHandler");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
api_1.initRestApi(app);
app.use(errorHandler_1.errorHandler);
app.listen(9000, function () {
    console.log("Server running on port 90");
});
/*findAllCourses()
  .then((res)=> console.log(JSON.stringify(res)))
  .catch((err)=> console.log(err))

console.log("server is running");*/ 
//# sourceMappingURL=server.js.map