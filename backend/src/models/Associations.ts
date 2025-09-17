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

/**
 * Initializes all model associations.
 *
 * Each association is defined using Sequelize methods:
 * - `hasMany`: One-to-Many relationship.
 * - `belongsTo`: Many-to-One relationship.
 * - `hasOne`: One-to-One relationship.
 * - `belongsToMany`: Many-to-Many relationship.
 *
 * Aliases (`as`) are defined to make query includes more readable.
 */

export const ApplyAssociations = () => {
    // Role and User (one-to-many)
    Role.hasMany(User, { foreignKey: 'role_id', as: 'roleUsers' });
    User.belongsTo(Role, { foreignKey: 'role_id', as: 'userRole' });

    // DocumentType and Teacher (one-to-many)
    DocumentType.hasMany(Teacher, { foreignKey: 'document_type_id', as: 'documentTeachers' });
    Teacher.belongsTo(DocumentType, { foreignKey: 'document_type_id', as: 'documentType' });

    // DocumentType and Student (one-to-many)
    DocumentType.hasMany(Student, { foreignKey: 'document_type_id', as: 'documentStudents' });
    Student.belongsTo(DocumentType, { foreignKey: 'document_type_id', as: 'documentType' });

    // User and Teacher (one-to-one)
    User.hasOne(Teacher, { foreignKey: 'user_id', as: 'userTeacher' });
    Teacher.belongsTo(User, { foreignKey: 'user_id', as: 'teacherUser' });

    // Teacher and TeacherProfession (one-to-many)
    Teacher.hasMany(TeacherProfession, { foreignKey: 'teacher_id', as: 'teacherProfessions' });
    TeacherProfession.belongsTo(Teacher, { foreignKey: 'teacher_id', as: 'teacher' });

    // Profession and TeacherProfession (one-to-many)
    Profession.hasMany(TeacherProfession, { foreignKey: 'profession_id', as: 'professionTeachers' });
    TeacherProfession.belongsTo(Profession, { foreignKey: 'profession_id', as: 'profession' });

    // Teacher and TeacherCourse (one-to-many)
    Teacher.hasMany(TeacherCourse, { foreignKey: 'teacher_id', as: 'coursesTaught' });
    TeacherCourse.belongsTo(Teacher, { foreignKey: 'teacher_id', as: 'teacher' });

    // Course and TeacherCourse (one-to-many)
    Course.hasMany(TeacherCourse, { foreignKey: 'course_id', as: 'courseTeachers' });
    TeacherCourse.belongsTo(Course, { foreignKey: 'course_id', as: 'course' });

    // TeacherCourse and Schedule (one-to-many)
    TeacherCourse.hasMany(Schedule, { foreignKey: 'teacher_course_id', as: 'teacherCourseSchedules' });
    Schedule.belongsTo(TeacherCourse, { foreignKey: 'teacher_course_id', as: 'teacherCourse' });

    // Subject and Schedule (one-to-many)
    Subject.hasMany(Schedule, { foreignKey: 'subject_id', as: 'subjectSchedules' });
    Schedule.belongsTo(Subject, { foreignKey: 'subject_id', as: 'subject' });

    // Student and Grade (one-to-many)
    Student.hasMany(Grade, { foreignKey: 'student_id', as: 'studentGrades' });
    Grade.belongsTo(Student, { foreignKey: 'student_id', as: 'student' });

    // Schedule and Grade (one-to-many)
    Schedule.hasMany(Grade, { foreignKey: 'schedule_id', as: 'scheduleGrades' });
    Grade.belongsTo(Schedule, { foreignKey: 'schedule_id', as: 'schedule' });

    // Teacher and Profession (many-to-many)
    Teacher.belongsToMany(Profession, {
      through: TeacherProfession,
      foreignKey: 'teacher_id',
      otherKey: 'profession_id',
      as: 'professions'
    });
    Profession.belongsToMany(Teacher, {
      through: TeacherProfession,
      foreignKey: 'profession_id',
      otherKey: 'teacher_id',
      as: 'teachersWithProfessions'
    });

    // Student and Schedule (many-to-many)
    Student.belongsToMany(Schedule, {
      through: StudentSchedule,
      foreignKey: 'student_id',
      otherKey: 'schedule_id',
      as: 'studentSchedules'
    });
    Schedule.belongsToMany(Student, {
      through: StudentSchedule,
      foreignKey: 'schedule_id',
      otherKey: 'student_id',
      as: 'students'
    });
};