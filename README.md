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
Then open your browser: [http://localhost:3000](http://localhost:3000)

---

## Running with Docker

```bash
docker build -t testgroup-demo .
docker run --env-file .env -p 3000:3000 testgroup-demo
```

---

## Deployment

- The project is ready to deploy on any platform that supports Docker (Railway, Render, etc.).
- Automatic builds from GitHub are also supported.

---

## Observations

- I can modify the backend (`index.js`) to query other Supabase tables if needed.
- I enabled policies in Supabase to allow public read access to the necessary tables used by the application.

---

## Notes for Review

- The main page's title and message can be edited from Contentful (https://www.contentful.com/).
- By using the frontend buttons, you can query students ("students") and enrollments ("enrollments") directly from Supabase.
- The frontend is fully functional and responsive.

---

## Author

- Niklaus (Wotklaus)