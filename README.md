MyBrand - Online Learning Platform
A modern, responsive online learning platform built with Next.js that allows users to browse courses, manage their profiles, and access educational content.

🚀 Features
User Authentication: Secure login and registration system

Course Management: Browse all courses and add new courses

User Profiles: Personalized user profiles with photo upload

Responsive Design: Mobile-first design that works on all devices

Pricing Plans: Multiple subscription options for users

🛠️ Tech Stack
Frontend: Next.js 14, React, Tailwind CSS

Authentication: Firebase Auth (context-based)

UI Components: Custom components with SweetAlert2 for notifications

Routing: Next.js App Router

📦 Installation & Setup
Prerequisites
Node.js 18+ installed on your system

npm or yarn package manager

Installation Steps
Clone the repository

bash
git clone <your-repository-url>
cd mybrand-learning-platform
Install dependencies

bash
npm install
# or
yarn install
Environment Setup
Create a .env.local file in the root directory and add your Firebase configuration:

env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
Run the development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:3000