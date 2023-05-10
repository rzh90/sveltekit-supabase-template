## Create the repo
1. Clone the repo.
2. Copy the `.env.example` file in the root directory and rename it `.env`.
3. Go to [Supabase](https://supabase.com/) and open the project.
4. Go to **Project Settings** > **API** to find the **project URL** and **anon API key**. Add them to the .env file.
```
NEXT_PUBLIC_SUPABASE_URL=project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=anon API key
```
5. Open a terminal and type `npm i` or `npm install` and press Enter.
6. Use `npm run dev` to start the server.
7. Open http://localhost:5173/ with your browser to see the result.