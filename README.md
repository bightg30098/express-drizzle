# Express Drizzle Starter

This is a starter for Express and Drizzle ORM.

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Drizzle ORM](https://orm.drizzle.team/docs/quick-start) - TypeScript ORM that lets you love SQL

## Pre-requisites

- [node.js 18.16.0](https://nodejs.org/en/)
- [pnpm v8](https://pnpm.io/)
- [postgresql](https://www.postgresql.org/)

## Getting started

```bash
git clone https://{your-username}:{your-access-token}@gitlab.devpack.cc/vd2200/training/express-drizzle.git
cd express-drizzle
cp .env.example .env
pnpm i
pnpm dev
```

## Setup PostgreSQL

Please follow the [instructions](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database) on the Setting up postgresql to install PostgreSQL on your machine. \
Once you have installed PostgreSQL, \
you can start the database server by using pgAdmin. \
and run the following command to apply the migration.

```bash
pnpm migrate
```
