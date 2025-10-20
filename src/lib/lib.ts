import Databse from "@tauri-apps/plugin-sql";

const db = Databse.load("sqlite:data.db");

// Schema
//
// CREATE TABLE blobItem(
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     itemName TEXT NOT NULL,
//     description TEXT,
//     isFunction BOOLEAN NOT NULL,
//     blobValue TEXT NOT NULL,
//     parentId INTEGER,
//     CONSTRAINT fk_parent_id FOREIGN KEY (parentId) REFERENCES projects(id);
// );
//
// CREATE TABLE projects(
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT NOT NULL
// );
//
