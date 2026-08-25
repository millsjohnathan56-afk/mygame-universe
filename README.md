# MyGame Universe v4 — Phone Deployment

This version is intentionally simple to deploy from Android.

## Recommended phone workflow
1. Create a GitHub repository.
2. Upload the project files through GitHub's browser/mobile tools.
3. Import the repository into a Node-capable host.
4. Build: `npm install`
5. Start: `npm start`

## Vercel note
Vercel supports Node.js serverless functions, but this v4 is designed as a simple serverless-compatible starter. It does NOT use WebSockets or SQLite. Those require a separate real-time/managed infrastructure layer for production.

## Data warning
The in-memory maps are for a demo. They reset when the serverless function instance is replaced. For real public accounts, saves, moderation, and friends, connect a managed database such as Postgres and use a managed session store.

## Security
The demo uses a simplified hash for portability. Replace it with bcrypt/Argon2 and use a real email provider for recovery before public launch. Never commit real passwords or secrets.

## Admin
The first registered user is marked admin only as a demo convenience. For a public service, replace this with secure server-side admin provisioning.
