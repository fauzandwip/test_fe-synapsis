# Blogs App

Welcome to Blogs App! This is Technicall Test Frontend Engineer Internship from Synapsis.id.

## Table of Contents

- [Blogs App](#blogs-app)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Go Rest Access Token](#go-rest-access-token)
  - [Project Structure](#project-structure)

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository: `git clone https://github.com/fauzandwip/test_fe-synapsis.git`
2. Navigate to the project directory: `cd test_fe-synapsis`
3. Install dependencies: `npm install`
4. Create `.env` file, then copy all the variables from `.env.example` to `.env` file and fill in all the variables
5. Start the development server: `npm run dev`
6. Open your browser and visit: `http://localhost:3000`

## Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root directory of the project and copy all the variables from `.env.example` to `.env` file and fill in all the variables.

## Go Rest Access Token

How to get Go Rest Access Token?

1. Visit https://gorest.co.in/consumer/login url
2. Sign in using your Github/Google/Microsoft account
3. After successful login, copy the access token and fill it into the `NEXT_PUBLIC_GOREST_ACCESS_TOKEN` variable in the `.env` file that you created

## Project Structure

- **`pages/`**: Contains Next.js pages. Each file in this directory corresponds to a route in this app.
- **`components/`**: Reusable React components used throughout the app.
  - **`icons/`**: Contains icon-related components.
  - **`form/`**: Contains form-related components.
- **`types/`**: TypeScript type definitions used in this project.
- **`public/`**: Static files like images, fonts, etc.
- **`.env`**: Environment variables configuration file.
