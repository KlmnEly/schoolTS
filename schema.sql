DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS student_schedule;
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS teacher_course;
DROP TABLE IF EXISTS teacher_profession;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS professions;
DROP TABLE IF EXISTS document_types;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TYPE IF EXISTS day_week;

create type day_week as enum ('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo');

create table if not exists roles (
	id_role serial primary key,
	name varchar(50) not null unique,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists document_types (
	id_document_type serial primary key,
	name varchar(100) not null unique,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists courses (
	id_course serial primary key,
	name varchar(100) not null unique,
	description varchar(255),
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists professions (
	id_profession serial primary key,
	name varchar(100) not null unique,
	description varchar(255),
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists subjects (
	id_subject serial primary key,
	name varchar(100) not null,
	description varchar(255),
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists users (
	id_user serial primary key,
	role_id int not null,
	username varchar(50) not null unique,
	password varchar(255) not null,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	foreign key (role_id) references roles(id_role)
);

create table if not exists students (
	id_student serial primary key,
	document_type_id int not null ,
	full_name varchar(150) not null,
	document_number varchar (20) not null unique,
	birth_date date not null,
	status boolean default true,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	foreign key (document_type_id) references document_types(id_document_type)
);

create table if not exists teachers (
	id_teacher serial primary key,
	user_id int not null,
	document_type_id int not null,
	full_name varchar(150) not null,
	document_number varchar (20) not null unique,
	birth_date date not null,
	status boolean default true,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	foreign key (user_id) references users(id_user),
	foreign key (document_type_id) references document_types(id_document_type)
);

create table if not exists teacher_profession (
	id_teacher_profession serial primary key,
	teacher_id int not null,
	profession_id int not null,
	status boolean default true,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	foreign key (teacher_id) references teachers(id_teacher),
	foreign key (profession_id) references professions(id_profession)
);

create table if not exists teacher_course (
	id_teacher_course serial primary key,
	teacher_id int not null,
	course_id int not null,
	status boolean default true,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	foreign key (teacher_id) references teachers(id_teacher),
	foreign key (course_id) references courses(id_course)
);

create table if not exists schedules (
	id_schedule serial primary key,
	teacher_course_id int not null,
	subject_id int not null,
	day day_week not null,
	hour_start time not null,
	hour_end time not null,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	unique (teacher_course_id, subject_id, day, hour_start, hour_end),

	foreign key (teacher_course_id) references teacher_course(id_teacher_course),
    foreign key (subject_id) references subjects(id_subject)
);

create table if not exists student_schedule (
	id_student_schedule serial primary key,
	student_id int not null,
	schedule_id int not null,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	foreign key (student_id) references students(id_student),
    foreign key (schedule_id) references schedules(id_schedule)
);

create table if not exists grades (
	id_grade serial primary key,
	student_id int not null,
	schedule_id int not null,
	grade decimal(4,2) not null check (grade between 0.00 and 5.00),
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,

	unique (student_id, schedule_id),

	foreign key (student_id) references students(id_student),
    foreign key (schedule_id) references schedules(id_schedule)
);