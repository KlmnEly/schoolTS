import { DataTypes, Sequelize } from "sequelize";

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

export function initializeModels(sequelize: Sequelize) {
    Role.init(
        {
            id_role: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: 'Role',
            tableName: 'roles',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Course.init(
        {
            id_course: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: 'Course',
            tableName: 'courses',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"

        }
    );

    DocumentType.init(
        {
            id_document_type: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: 'DocumentType',
            tableName: 'document_types',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Grade.init(
        {
            id_grade: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            student_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'students',
                    key: 'id_student'
                }
            },
            schedule_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'schedules',
                    key: 'id_schedule'
                }
            },
            grade: {
                type: DataTypes.DECIMAL(4, 2),
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'Grade',
            tableName: 'grades',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Profession.init(
        {
            id_profession: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: 'Profession',
            tableName: 'professions',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Schedule.init(
        {
            id_schedule: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            teacher_subject_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'teacher_subject',
                    key: 'id_teacher_subject'
                }
            },
            subject_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'subjects',
                    key: 'id_subject'
                }
            },
            day: {
                type: DataTypes.ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'),
                allowNull: false
            },
            hour_start: {
                type: DataTypes.TIME,
                allowNull: false
            },
            hour_end: {
                type: DataTypes.TIME,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'Schedule',
            tableName: 'schedules',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    StudentSchedule.init(
        {
            id_student_schedule: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            student_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'students',
                    key: 'id_student'
                }
            },
            schedule_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'schedules',
                    key: 'id_schedule'
                }
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'StudentSchedule',
            tableName: 'student_schedule',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Student.init(
        {
            id_student: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            document_type_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'document_types',
                    key: 'id_document_type'
                }
            },
            full_name: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            document_number: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true
            },
            birth_date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'Student',
            tableName: 'students',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Subject.init(
        {
            id_subject: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'Subject',
            tableName: 'subjects',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    TeacherCourse.init(
        {
            id_teacher_course: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            teacher_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'teachers',
                    key: 'id_teacher'
                }
            },
            course_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'courses',
                    key: 'id_course'
                }
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'TeacherCourse',
            tableName: 'teacher_course',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    TeacherProfession.init(
        {
            id_teacher_profession: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            teacher_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'teachers',
                    key: 'id_teacher'
                }
            },
            profession_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'professions',
                    key: 'id_profession'
                }
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'TeacherProfession',
            tableName: 'teacher_profession',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Teacher.init(
        {
            id_teacher: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'users',
                    key: 'id_user'
                }
            },
            document_type_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'document_types',
                    key: 'id_document_type'
                }
            },
            full_name: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            document_number: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true
            },
            birth_date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'Teacher',
            tableName: 'teachers',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    User.init(
        {
            id_user: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            role_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'roles',
                    key: 'id_role'
                }
            },
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    ApplyAssociations();
}