# Quotestagram

This is an example of a "gold standard" application for Unit 2 using Express.

## Setup

Install dependencies

```bash
npm i
```

Create the database with tables

```bash
psql -f database/schema.sql
```

Seed the database with data

```bash
psql -f database/seed.sql
```

Run the application

```bash
node server.js
```

Open the web browser

[http://localhost:4567](http://localhost:4567)
