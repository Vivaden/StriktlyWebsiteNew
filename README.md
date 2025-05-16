# Striktly Website

A modern, conversion-optimized multilingual PEPPOL invoice management platform designed to simplify business compliance and streamline international invoicing processes.

## Features

- Responsive, modern design
- Multilingual support (English and Dutch)
- Detailed product features and pricing
- Contact form
- Micro-interactions for enhanced user experience

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Important Configuration Notes

- The site uses client-side routing with wouter
- Base path is set to `/StriktlyWebsiteNew/` for GitHub Pages compatibility
- A 404.html file is created to support client-side routing
- The deployment workflow is in `.github/workflows/static.yml`

### Setup GitHub Pages:

1. Push your changes to the `main` branch
2. Go to your GitHub repository settings
3. Navigate to "Pages" section
4. Under "Build and deployment", ensure "GitHub Actions" is selected
5. The site will be built and deployed automatically when you push to main

Your site will be available at: `https://[username].github.io/StriktlyWebsiteNew/`

### Troubleshooting Deployment

If deployment fails, check the following:
- Look at GitHub Actions build logs for errors
- Ensure GitHub Pages is enabled in repository settings
- Make sure the repository name exactly matches the basePath in the deployment config

### Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Tech Stack

- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Wouter for client-side routing
- Express server (for local development only)