DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS student_schedule;
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS teacher_course;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS professions;
DROP TABLE IF EXISTS document_types;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

create table if not exists roles (
	id_role serial primary key,
	name varchar(50) not null unique,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists document_types (
	id_document_type serial primary key,
	name varchar(100) not null,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists courses (
	id_course serial primary key,
	name varchar(100) not null,
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
	role_id int references roles(id_role),
	username varchar(50) not null unique,
	password varchar(255) not null,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists students (
	id_student serial primary key,
	full_name varchar(150) not null,
	document_type_id int not null references document_types(id_document_type),
	document_number varchar (20) not null unique,
	profession_id int not null,
	birth_date date not null,
	status boolean default true
);

create table if not exists teachers (
	id_teacher serial primary key,
	user_id int references users(id_user),
	document_type_id int references document_types(id_document_type),
	profession_id int references professions(id_profession),
	full_name varchar(150) not null,
	document_number varchar (20) not null unique,
	birth_date date not null,
	status boolean default true,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists teacher_course (
	id_teacher_course serial primary key,
	teacher_id int references teachers(id_teacher),
	course_id int references courses(id_course),
	status boolean default true
);

create table if not exists schedules (
	id_schedule serial primary key,
	teacher_course_id int not null references teacher_course(id_teacher_course),
	subject_id int references subjects(id_subject),
	day date not null,
	hour_start time not null,
	hour_end time not null,
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists student_schedule (
	id_student_schedule serial primary key,
	student_id int references students(id_student),
	schedule_id int references schedules(id_schedule),
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists grades (
	id_grade serial primary key,
	student_id int not null references students(id_student),
	schedule_id int not null references schedules(id_schedule),
	grade decimal(4,2) not null check (grade between 0.00 and 5.00),
	status boolean default TRUE,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);