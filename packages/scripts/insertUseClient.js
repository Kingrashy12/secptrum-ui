#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Ensure the path to the dist directory is correct
const distDir = path.join(__dirname, '../dist');

// Check if the directory exists
if (fs.existsSync(distDir)) {
  // Recursively add 'use client' directive to all relevant files in 'dist'
  function addUseClientToFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively check subdirectories
        addUseClientToFiles(fullPath);
      } else if (file.endsWith('.js') || file.endsWith('.ts')) {
        // Read the file
        const content = fs.readFileSync(fullPath, 'utf8');

        // Check if 'use client' is already present
        if (!content.startsWith('"use client";')) {
          // Add 'use client' at the top
          const newContent = `"use client";\n${content}`;

          // Write the file back with 'use client' at the top
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Added 'use client' to: ${fullPath}`);
        }
      }
    });
  }

  addUseClientToFiles(distDir);
} else {
  console.error(
    `Directory ${distDir} does not exist. Make sure Rollup build was successful.`
  );
}
