DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS student_schedule;
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS teacher_course;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS professions;
DROP TYPE IF EXISTS types_document;

CREATE TYPE types_document as enum (
'CC',
'CE',
'PP',
'PEP'
);

create table if not exists courses (
	id_course serial primary key,
	name varchar(100) not null,
	description varchar(255),
	status boolean default TRUE
);

create table if not exists professions (
	id_profession serial primary key,
	name varchar(100) not null unique,
	description varchar(255),
	status boolean default TRUE
);

create table if not exists subjects (
	id_subject serial primary key,
	name varchar(100) not null,
	description varchar(255),
	status boolean default TRUE
);

create table if not exists teachers (
	id_teacher serial primary key,
	full_name varchar(150) not null,
	document_type types_document not null,
	document_number varchar (20) not null unique,
	profession_id int references professions(id_profession),
	birth_date date not null,
	status boolean default true
);

create table if not exists teacher_course (
	id_teacher_course serial primary key,
	teacher_id int references teachers(id_teacher),
	course_id int references courses(id_course),
	status boolean default true
);

create table if not exists students (
	id_student serial primary key,
	full_name varchar(150) not null,
	document_type types_document not null,
	document_number varchar (20) not null unique,
	profession_id int not null,
	birth_date date not null,
	status boolean default true
);

create table if not exists schedules (
	id_schedule serial primary key,
	teacher_course_id int not null references teacher_course(id_teacher_course),
	day date not null,
	hour_start time not null,
	hour_end time not null,
	subject_id int references subjects(id_subject),
	status boolean default TRUE
);

create table if not exists student_schedule (
	id_student_schedule serial primary key,
	student_id int references students(id_student),
	schedule_id int references schedules(id_schedule),
	status boolean default TRUE
);

create table if not exists grades (
	id_grade serial primary key,
	grade decimal(4,2) not null check (grade between 0.00 and 5.00),
	student_id int not null references students(id_student),
	schedule_id int not null references schedules(id_schedule),
	status boolean default TRUE
);