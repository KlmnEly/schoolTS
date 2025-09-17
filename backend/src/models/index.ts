import { sequelize } from "../config/database";

import Role from './Role';
import DocumentType from './Document_type';
import Course from './Course';
import Profession from './Profession';
import Subject from './Subject';
import User from './User';
import Student from './Student';
import Teacher from './Teacher';
import TeacherProfession from './Teacher_profession';
import TeacherCourse from './Teacher_course';
import Schedule from './Schedule';
import StudentSchedule from './Student_schedule';
import Grade from './Grade';

import { ApplyAssociations } from "./Associations";

ApplyAssociations();

const syncDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(" Connection established with the database.");

        await sequelize.sync();
        console.log(" Tables synchronized correctly.");
    } catch (error) {
        console.error(" Error synchronizing database:", error);
    }
};

export {
    sequelize,
    Role,
    DocumentType,
    Course,
    Profession,
    Subject,
    User,
    Student,
    Teacher,
    TeacherProfession,
    TeacherCourse,
    Schedule,
    StudentSchedule,
    Grade,
    syncDB,
};