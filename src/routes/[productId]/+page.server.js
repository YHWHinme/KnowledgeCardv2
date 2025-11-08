import { getProjectById, getBlobsByProjectId } from '$lib/lib';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
  const projectId = parseInt(params.productId || '0', 10);
  if (isNaN(projectId)) {
    throw error(400, 'Invalid project ID');
  }

  const project = await getProjectById(projectId);
  if (typeof project === 'number') {
    throw error(project === 404 ? 404 : 500, 'Project not found');
  }

  const blobs = await getBlobsByProjectId(projectId);
  if (typeof blobs === 'number') {
    throw error(500, 'Failed to load blobs');
  }

  return { project, blobs };
};