//Katex imports
import { renderToString } from "katex";
// SQL imports
import { createClient } from "@libsql/client";

export const db = createClient({
  url: import.meta.env.VITE_TURSO_DATABASE_URL,
  authToken: import.meta.env.VITE_TURSO_AUTHTOKEN,
});

// NOTE: Projects based functions
export interface Projects {
  id: number;
  title: string;
}

export async function createProject(title: string): Promise<number> {
  try {
    await db.execute("INSERT INTO projects (title) VALUES (?)", [title]);
    return 201;
  } catch (err) {
    console.log(err);
    return 500;
  }
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

export async function getProjectById(id: number): Promise<Projects | number> {
  try {
    const result = await db.execute("SELECT * FROM projects WHERE id = ?", [
      id,
    ]);
    const projects = (result.rows ?? []) as unknown as Projects[];
    return projects.length > 0 ? projects[0] : 404;
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
    return 201;
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

// NOTE: blob based functions
export interface Blobs {
  id: number;
  blobName: string;
  description: string;
  isFunction: boolean;
  blobValue: string; // TODO: May not be a string, check
  projectId: number;
}

export async function createBlob(
  blobName: string,
  description: string,
  isFunction: boolean,
  blobValue: string,
  projectId: number,
): Promise<number> {
  try {
    await db.execute(
      "INSERT INTO blobs (blobName, description, isFunction, blobValue, projectId) VALUES (?, ?, ?, ?, ?)",
      [blobName, description, isFunction, blobValue, projectId],
    );
    return 201;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function getALLBlobs(): Promise<Blobs[] | number> {
  try {
    const result = await db.execute("SELECT * FROM blobs");
    return (result.rows ?? []) as unknown as Blobs[];
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function getBlobById(id: number): Promise<Blobs | number> {
  try {
    const result = await db.execute("SELECT * FROM blobs WHERE id = ?", [id]);
    const blobs = (result.rows ?? []) as unknown as Blobs[];
    return blobs.length > 0 ? blobs[0] : 404;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function getBlobsByProjectId(
  projectId: number,
): Promise<Blobs[] | number> {
  try {
    const result = await db.execute("SELECT * FROM blobs WHERE projectId = ?", [
      projectId,
    ]);
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
    await db.execute("UPDATE blobs SET blobName=? WHERE id=?", [
      blobName,
      blobId,
    ]);
    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function updateBlob(
  id: number,
  blobName: string,
  description: string,
  isFunction: boolean,
  blobValue: string,
): Promise<number> {
  try {
    await db.execute(
      "UPDATE blobs SET blobName=?, description=?, isFunction=?, blobValue=? WHERE id=?",
      [blobName, description, isFunction, blobValue, id],
    );
    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

export async function deleteBlob(id: number): Promise<number> {
  try {
    await db.execute("DELETE FROM blobs WHERE id = ?", [id]);
    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
}

// NOTE: Katex based function
export function renderKatex(expression: string) {
  const katex = renderToString(expression, {
    throwOnError: false,
    displayMode: true,
  });
  return katex;
}
