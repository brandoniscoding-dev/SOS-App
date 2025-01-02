<div align="center">
  <br />
    <a href="your-demo-video-link" target="_blank">
      <img src="./public/report.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748" alt="prisma" />
  </div>

  <h3 align="center">SoS App</h3>

  <div align="center">
    A secure platform for anonymous incident reporting.
  </div>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Environment Setup](#environment)
6. 🚀 [Deployment](#deployment)
7. 🧑‍💻 [Testing](#testing)
8. 🤝 [Contributing](#contributing)
9. 📝 [License](#license)

---

## 🤖 Introduction

Welcome to the **SoS App**! This application provides a secure and user-friendly platform to report incidents anonymously. Built with the latest technologies, it ensures that sensitive information remains private while allowing users to report issues efficiently. The app is hosted online, making it accessible from anywhere, and relies on a cloud-hosted database for seamless data management.

---

## ⚙️ Tech Stack

The **SoS App** is built using the following technologies:

- **Next.js 14** – A powerful React framework for building server-side rendered applications.
- **TypeScript** – For type safety and better developer experience.
- **Prisma** – A modern database toolkit for working with databases, with support for PostgreSQL.
- **NextAuth.js** – For secure authentication with easy configuration.
- **Tailwind CSS** – For a responsive and customizable UI.
- **React Hook Form** – For building forms with minimal re-renders and better performance.
- **GeminiAI** – For integrating AI functionalities.
- **BCrypt** – For secure password hashing and encryption.

---

## 🔋 Features

- **Anonymity** – All reports are submitted anonymously, ensuring user privacy.
- **Admin Panel** – Special access for admins to manage reports and user data.
- **Real-time Updates** – Reports are processed and updated in real time.
- **Secure Authentication** – Admin users are authenticated securely via NextAuth.js.
- **Responsive Design** – Built using Tailwind CSS to ensure the app is usable on both desktop and mobile devices.
- **AI Integration** – Use GeminiAI to automate certain actions and enhance reporting functionalities.

---

## 🤸 Quick Start

To get started quickly, follow the steps below:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd anonymous-reporting-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

---

## 🕸️ Environment Setup

Create a `.env` file in the root directory with the following environment variables:

```env
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000/api/auth"
GEMINI_API_KEY=AIzaSyD3gDRNNd3wlCCZGYGaEmuNd_OPAbq_6bA

DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYjVlYWQ4NWMtZmI5NC00ZGEzLWIwNmItOGRiMjE0MzQyMzMxIiwidGVuYW50X2lkIjoiNWUzNTk1NjcyNjJmMTQ5NTExY2VlYjQwN2U1Nzg3YTMwMTYzMzIxZDNiZDU4NDJmZTNiYmZiMDMyYzg5ZTVjNSIsImludGVybmFsX3NlY3JldCI6ImQyNTFmYjBmLTQ4ODgtNDQ2OS04MDc1LTU0NmM4NGUxMWY2NyJ9.GCddZ6h2Qqneu3RVkIGmJPq41dzjrscALLAhHGk0XdU"
PULSE_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYjVlYWQ4NWMtZmI5NC00ZGEzLWIwNmItOGRiMjE0MzQyMzMxIiwidGVuYW50X2lkIjoiNWUzNTk1NjcyNjJmMTQ5NTExY2VlYjQwN2U1Nzg3YTMwMTYzMzIxZDNiZDU4NDJmZTNiYmZiMDMyYzg5ZTVjNSIsImludGVybmFsX3NlY3JldCI6ImQyNTFmYjBmLTQ4ODgtNDQ2OS04MDc1LTU0NmM4NGUxMWY2NyJ9.GCddZ6h2Qqneu3RVkIGmJPq41dzjrscALLAhHGk0XdU"
```

---

## 🚀 Deployment

The application can be deployed to production using **Vercel**:

1. Push your code to a Git repository.
2. Connect the repository to **Vercel**.
3. Set up the environment variables in the Vercel dashboard.
4. Deploy and watch the magic happen!

---

## 🧑‍💻 Testing

### Admin Login

For testing the app as an **admin**, use the following credentials:

- **Email**: `admin@gmail.com`
- **Password**: `admin1234`

This will give you access to the **Admin Panel** where you can manage reports and view user data.

---

## 🤝 Contributing

We welcome contributions! Please follow our [Contributing Guidelines](CONTRIBUTING.md) to help improve the project.

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

