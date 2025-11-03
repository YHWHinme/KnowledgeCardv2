import Databse from "@tauri-apps/plugin-sql";
import { createClient } from "@libsql/client";

export const db = createClient({
  url: Deno.env.get("VITE_TURSO_DATABASE_URl"),
  authToken: Deno.env.get("VITE_TURSO_AUTHTOKEN"),
});

// NOTE: Projects based functions
interface Projects {
  id: number;
  title: string;
}

export async function getAllProjects(): Promise<Projects[] | number> {
  try {
    const result = await db.execute("SELECT * FROM projects");
    return result.rows as Projects;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

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
