"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize 객체 선언시 매개변수로 "DB명, 사용자, 비번, 설정 정보 전체" 정보를 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = {'sequelize': sequelize, "Sequelize": Sequelize}

db.Todo = require("./Todo")(sequelize, Sequelize);
// db = {"sequelize" : sequelize, "Sequelize" : Sequelize}

module.exports = db;
// db 객체를 내보냄
