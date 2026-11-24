# Sema

Sema (Diário Escolar) is a school management system: schools, classrooms (including multigrade classes), teachers and timetables, enrollment, school years and terms, grades, attendance and the official documents a school has to issue.

It started in 2021 as a system for a single municipal school network. This repository is where it grows into a multi-tenant platform, where any number of organizations (a city's education department, a private school group or a single private school) each run any number of schools.

## Layout

| Path | What it is |
|---|---|
| `lib/api` | REST API: Node.js, Express, TypeORM, tsyringe, PostgreSQL, Redis |
| `lib/client` | Web app: Next.js 15, React 19, Tailwind |
| `lib/new-client` | Unfinished Remix rewrite of the web app |
| `lib/report-engine` | Report service: Java, Quarkus, JasperReports, gRPC |

## Running locally

You need Node.js with Yarn, PostgreSQL and Redis running locally. For the report service you also need Java 21 and Maven.

```sh
# API
cd lib/api
cp .env.example .env        # fill in the values
yarn install
yarn dev:createdb           # creates the schema and seeds an admin user
yarn dev:server             # http://localhost:3333

# Web app
cd lib/client
cp .env.example .env.local
yarn install
yarn dev                    # http://localhost:3001

# Report service
cd lib/report-engine
./mvnw quarkus:dev          # http://localhost:8080
```

The report templates that were specific to one municipality were removed. The report service builds and runs, but the documents will come back as per-organization templates.

## Data

Only use made-up data. Database dumps, spreadsheets and exported files must never be committed (`.gitignore` blocks `*.sql`, `*.xlsx` and `*.csv`).

## License

MIT
