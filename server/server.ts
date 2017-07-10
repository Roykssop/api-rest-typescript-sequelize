import * as ORM from "sequelize";
import * as express from "express";
import { Application,Request,Response } from "express";
import { findAllCourses } from "./queries/findAllCourses";
import { initRestApi } from "./api/api";
import { errorHandler } from "./api/errorHandler";
const bodyParser = require('body-parser');

const app:Application = express();

app.use(bodyParser.json());
initRestApi(app);

app.use(errorHandler);

app.listen(9000,()=>{
  console.log("Server running on port 90");
})


/*findAllCourses()
  .then((res)=> console.log(JSON.stringify(res)))
  .catch((err)=> console.log(err))

console.log("server is running");*/