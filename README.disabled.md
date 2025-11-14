````markdown
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6a953915-2155-4847-bd2d-3d953c46c1d0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6a953915-2155-4847-bd2d-3d953c46c1d0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact form setup (Supabase + Resend)

To enable the contact form that calls a Supabase Edge Function and sends email via Resend:

1) Frontend env
- Copy `.env.example` to `.env.local` and set your Supabase URL. I've added a default `.env.local` that points to `http://127.0.0.1:54321` for local Supabase CLI.

```
cp .env.example .env.local
# edit .env.local for production deployments
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
```

Restart the dev server after editing env. In development, if `VITE_SUPABASE_URL` is not set, the app will fall back to `http://127.0.0.1:54321`.

2) Deploy the Edge Function
- Requires the Supabase CLI and that you're logged in and linked to your project.

```
supabase functions deploy send-contact-email
```

3) Set the Resend API key secret

```
supabase secrets set RESEND_API_KEY=your_resend_api_key
```

4) Test the function

```
curl -i -X POST "https://<your-project-ref>.supabase.co/functions/v1/send-contact-email" \
	-H "Content-Type: application/json" \
	-d '{"name":"Test","email":"me@example.com","subject":"Hello","message":"Hi there"}'
```

Notes:
- Ensure your Resend sender is verified; using `onboarding@resend.dev` may only deliver to verified recipients.
- CORS is enabled for `POST` and `OPTIONS` requests with `*` origin by default in the function.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6a953915-2155-4847-bd2d-3d953c46c1d0) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

````
