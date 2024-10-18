#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Add "use client" to all files in the Next.js build
const nextJsDir = path.join(__dirname, '../dist');

function addUseClientToFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      addUseClientToFiles(fullPath); // Recursively process subdirectories
    } else if (file.endsWith('.js') || file.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');

      if (!content.startsWith('"use client";')) {
        const newContent = `"use client";\n${content}`;
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Added 'use client' to: ${fullPath}`);
      }
    }
  });
}

// Only apply this to the Next.js folder
if (fs.existsSync(nextJsDir)) {
  addUseClientToFiles(nextJsDir);
  console.log('Modified with "use client".');
  // console.log('Next.js build modified with "use client".');
} else {
  console.error(`Directory ${nextJsDir} does not exist.`);
}
