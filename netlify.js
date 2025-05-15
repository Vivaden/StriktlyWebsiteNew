// This is a small script to modify the built output for Netlify deployment
// It ensures the frontend assets are in the right place

import { promises as fs } from 'fs';
import path from 'path';

async function prepareForNetlify() {
  console.log('Preparing build for Netlify deployment...');
  
  // Copy index.html to the root of the dist folder
  try {
    await fs.copyFile(path.join('dist', 'client', 'index.html'), path.join('dist', 'index.html'));
    console.log('Successfully copied index.html to dist root');
  } catch (error) {
    console.error('Error copying index.html:', error);
  }
  
  console.log('Build preparation complete!');
}

prepareForNetlify();