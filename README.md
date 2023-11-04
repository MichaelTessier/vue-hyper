# VUE HYPER

Vue 3 application with

- typescript
- eslint
- prettier
- commitlint
- vitest
- unocss
- auto-import
- pinia
- vue-router
- supabase
- graphql/urql
- codegen
- github workflows
- vercel deployment

## SUPABASE

This project use [Supabase](https://supabase.com/)

Set up a Supabase project with sample data

```sql
  -- Create the table
  CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
  -- Insert some sample data into the table
  INSERT INTO countries (name) VALUES ('United States');
  INSERT INTO countries (name) VALUES ('Canada');
  INSERT INTO countries (name) VALUES ('Mexico');
```

Add variables environments

```.
- VITE_SUPABASE_URL=(url of your supabase)
- VITE_SUPABASE_KEY=(anon key)
- VITE_SUPABASE_ID=(id from url)
```

## CI

This project have a build step in CI github actions

Set up actions secrets on your github repo

```
VERCEL_ID
VERCEL_PROJECT_ID
VERCEL_TOKEN
```
