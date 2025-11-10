# Demo Project: Contentful + Supabase + Node.js + Docker

This application integrates:

- **Contentful**: I use a headless CMS to dynamically edit and display the main page's title and message.
- **Supabase**: Supabase serves as the cloud-based relational database to store and query lists of students and enrollments.
- **Node.js + Express**: Simple backend implementation connects Contentful and Supabase, exposes a REST API, and serves the frontend.
- **Docker**: The project is prepared to run and deploy on any platform that supports Docker.
- **Frontend HTML/CSS/JS**: I developed a clean, responsive, and functional web interface to display information and consume the APIs.

---

## Main Features

- I manage the title and main message from Contentful without touching the code.
- A **"Students"** button displays the list of registered students from Supabase.
- An **"Enrollments"** button displays the enrollments stored in the database.
- Both sources are queried in real time from the web interface.

---

## Repository Structure

```
/
├── public/                 # Frontend (index.html and assets)
├── .gitignore              # Ignores node_modules, .env, etc.
├── Dockerfile              # Backend Dockerization
├── index.js                # Main backend (Node/Express)
├── package.json            # Node.js dependencies
└── README.md               # This file
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create or edit the `.env` file with your Contentful and Supabase credentials:

```
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

### 3. Run the server locally

```bash
npm start
```
Open your browser: [http://localhost:3000](http://localhost:3000)

---

## Running with Docker

```bash
docker build -t wotklaus86682/test-group:latest .
docker run --env-file .env -p 3000:3000 wotklaus86682/test-group:latest
```

---

## Deployment (DockerHub)

The image for this project is publicly available at:  
**[https://hub.docker.com/r/wotklaus86682/test-group](https://hub.docker.com/r/wotklaus86682/test-group)**

To run this image from DockerHub anywhere:

```bash
docker pull wotklaus86682/test-group:latest
docker run --env-file .env -p 3000:3000 wotklaus86682/test-group:latest
```
*Make sure you provide the proper `.env` file for Contentful and Supabase configuration.*

---

## Observations

- The backend (`index.js`) can be easily modified to query other Supabase tables if needed.
- Public read policies were enabled in Supabase for the tables used by the application.

---

## Notes for Review

- The main page's title and message can be edited from Contentful (https://www.contentful.com/).
- The web frontend allows querying students ("students") and enrollments ("enrollments") directly from Supabase with just a click.
- The application is fully responsive and functional.

---

## Author

- Niklaus (Wotklaus)