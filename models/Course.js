const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  facultyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Course;
