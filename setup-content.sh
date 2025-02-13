#!/bin/bash

# Remove existing content to start fresh
rm -rf projects/project1 projects/project2

# Create projects directory structure
mkdir -p projects/project1
mkdir -p projects/project2

# Create sample content for project1
cat > projects/project1/index.md << EOL
---
title: Project 1
---

# Project 1

This is the landing page for Project 1.

## Features
- Feature 1
- Feature 2
- Feature 3
EOL

# Create sample content for project2
cat > projects/project2/index.md << EOL
---
title: Project 2
---

# Project 2

Welcome to Project 2's landing page.

## Features
- Custom Feature A
- Custom Feature B
- Custom Feature C
EOL

# Print directory structure for verification
echo "Created the following structure:"
tree projects/

# Make the script executable
chmod +x setup-content.sh 