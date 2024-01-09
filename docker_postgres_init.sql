\c accountdb;
create table users(username varchar(30) primary key, password varchar(72), contact varchar(13), email varchar(30), type integer);
create database responderdb;
\c responderdb;
create table responses(responseid varchar(30) primary key, responderid varchar(30) not null, formid varchar(30) not null);