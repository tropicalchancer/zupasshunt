# ZuPass Hunt

A Next.js application that verifies ZuPass credentials and shows a winning message upon successful verification.

## Features
- ZuPass authentication integration
- Supabase database integration
- Responsive design
- Persistent authentication state
- Beautiful UI with animations

## Prerequisites
- Node.js 18+ installed
- A Supabase account (https://supabase.com)
- ZuPass credentials

## Getting Started

First, install the dependencies:
```bash
npm install --legacy-peer-deps
```

Note: We use `--legacy-peer-deps` due to dependency conflicts between ZuPass packages and React 19.

### Supabase Setup
1. Create a new project at https://supabase.com
2. Go to Project Settings -> API and copy:
   - Project URL
   - anon/public key
3. Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Run the following SQL in your Supabase SQL editor to set up the users table:
   ```sql
   create table public.users (
     id uuid references auth.users on delete cascade not null primary key,
     email text,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     updated_at timestamp with time zone default timezone('utc'::text, now()) not null
   );

   -- Enable Row Level Security
   alter table public.users enable row level security;

   -- Create policies
   create policy "Users can view their own data"
     on public.users for select
     using ( auth.uid() = id );

   create policy "Users can update their own data"
     on public.users for update
     using ( auth.uid() = id );
   ```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used
- Next.js 14
- TypeScript
- Tailwind CSS
- ZuPass Authentication
- Supabase (Database & Auth)

## Project Structure
```
src/
├── app/                # Next.js app directory
│   ├── page.tsx       # Main page component
│   └── popup/         # Zupass popup handling
│       └── page.tsx
├── components/         # React components
│   └── auth/          # Authentication components
│       └── auth-protection.tsx
├── lib/               # Utility functions
│   └── supabase.ts    # Supabase client configuration
├── middleware.ts      # Authentication middleware
└── public/            # Static assets
```

## Authentication Flow
1. User visits the site and sees a "Verify with ZuPass" button
2. Clicking the button opens a popup for Zupass authentication
3. After successful verification, the popup closes automatically
4. The user is automatically created/updated in Supabase
5. The main page shows a celebratory "You Won!" message

## License
MIT
