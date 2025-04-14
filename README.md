# ZuPass Hunt

A Next.js application that verifies ZuPass credentials and shows a winning message upon successful verification.

## Features
- ZuPass authentication integration
- Responsive design
- Persistent authentication state
- Beautiful UI with animations

## Getting Started

First, install the dependencies:
```bash
npm install --legacy-peer-deps
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
└── public/            # Static assets
```

## Authentication Flow
1. User visits the site and sees a "Verify with ZuPass" button
2. Clicking the button opens a popup for Zupass authentication
3. After successful verification, the popup closes automatically
4. The main page shows a celebratory "You Won!" message

## License
MIT
