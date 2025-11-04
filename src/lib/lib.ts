import { createClient } from "@libsql/client";

export const db = createClient({
  url: import.meta.env.VITE_TURSO_DATABASE_URl,
  authToken: import.meta.env.VITE_TURSO_AUTHTOKEN,
});

// NOTE: Projects based functions
interface Projects {
  id: number;
  title: string;
}

export async function getAllProjects(): Promise<Projects[] | number> {
  try {
    const result = await db.execute("SELECT * FROM projects");
    return (result.rows ?? []) as unknown as Projects[];
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function renameProject(
  projectId: number,
  new_title: string,
): Promise<number> {
  try {
    await db.execute("UPDATE projects SET title=? WHERE id=?", [
      new_title,
      projectId,
    ]);
    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function deleteProject(projectId: number): Promise<number> {
  try {
    // TODO: Ensure there's an alert confirming the deletion
    // I need to delete all tasks associated with this project too
    await db.execute("DELETE FROM projects WHERE id=?", [projectId]);
    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

// blob based functions
interface Blobs {
  id: number;
  blobName: string;
  description: string;
  isFunction: Boolean;
  blobValue: string; // TODO: May not be a string, check
  projectId: number;
}

export async function getALlBlobs(): Promise<Blobs[] | number> {
  try {
    const result = await db.execute("SELECT * FROM blobitems");
    return (result.rows ?? []) as unknown as Blobs[];
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function renameBlob(
  blobId: number,
  blobName: string,
): Promise<number> {
  try {
    await db.execute("UPDATE blobItems SET blobName=? WHERE id=?", [
      blobName,
      blobId,
    ]);
    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
}
// Schema
//
// CREATE TABLE blobItem( //     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     blobName TEXT NOT NULL,
//     description TEXT,
//     isFunction BOOLEAN NOT NULL,
//     blobValue TEXT NOT NULL,
//     projectId INTEGER,
//     CONSTRAINT fk_project_id FOREIGN KEY (projectId) REFERENCES projects(id)
// );
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT NOT NULL
// );
//
