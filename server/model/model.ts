import * as ORM from "sequelize";
import { Sequelize } from "sequelize";
import { initCourseModel } from "./initCourseModel";
import { initLessonModel } from "./initLessonModel";

const connection:Sequelize = new ORM('complete-typescript-course','root','',{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

connection.authenticate()
          .then(()=>{
              console.log("Connection has been stablished");
          })
          .catch((err)=>{
              console.log(err);
          });

export const courseModel = initCourseModel(connection);
export const lessonModel = initLessonModel(connection);

courseModel.hasMany(lessonModel, {foreignKey : 'courseId'});
lessonModel.belongsTo(courseModel,{foreignKey:'courseId'});