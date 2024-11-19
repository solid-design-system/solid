import { mkdir } from 'fs/promises';
import { deleteAsync } from 'del';
import { getPath, job } from '../shared.js';

export const runCleanup = job('Cleaning up artifacts...', async () => {
  const dir = getPath('./dist');
  await deleteAsync(dir);
  return mkdir(dir, {
    recursive: true
  });
});
