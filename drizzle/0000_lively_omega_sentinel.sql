CREATE TABLE IF NOT EXISTS "example" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"description" text,
	"count" integer,
	"price" double precision,
	"created_at" date,
	"updated_at" date
);
