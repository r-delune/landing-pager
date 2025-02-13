#!/bin/bash

# Ensure PROJECT_NAME is set
if [ -z "$PROJECT_NAME" ]; then
    echo "Error: PROJECT_NAME environment variable is not set"
    exit 1
fi

echo "Building project: $PROJECT_NAME"

# Create project-specific environment
echo "PROJECT_NAME=$PROJECT_NAME" > .env

# Install dependencies
npm install

# Build the project
npm run build

# The .output directory will be automatically deployed by Netlify