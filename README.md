# AvoriazLoc - Studio Rental Management in Avoriaz

This project is a web application built with [Next.js](https://nextjs.org) to manage the rental of a studio in Avoriaz.
It includes features such as availability management, pricing, and practical information for visitors.

## Features

- **Week Management**: Add, update, and delete rental weeks or seasons using Prisma.
- **Authentication**: User authentication and admin rights verification.
- **Informative Pages**: Access, station, studio, useful links, privacy policy, legal notices.
- **Contact Form**: Allows users to ask questions or request information.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org)
- **ORM**: [Prisma](https://www.prisma.io)
- **Database**: PostgreSQL
- **Authentication**: [Auth.js](https://authjs.dev/)
- **UI**: React Aria and SCSS
- **Deployment**: [Vercel](https://vercel.com)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mowebiaz/avo_next2.git
   cd avo_next2_app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables in a .env file:

   ```bash
   DATABASE_URL
   ADMIN_EMAIL
   RESEND_API_KEY
   NEXT_PUBLIC_MAPS_API_KEY
   AUTH_SECRET
   AUTH_GOOGLE_ID
   AUTH_GOOGLE_SECRET
   ```

4. Generate the Prisma client and apply migrations:

   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is designed to be deployed on Vercel.
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contribution

Contributions are welcome!


