# Peterson Hydroponics

A modern, accessible website for Peterson Hydroponics - a sustainable agriculture company specializing in hydroponic farming solutions.

## Project Overview

Peterson Hydroponics is a React-based web application that showcases the company's hydroponic farming products and services. The website provides visitors with information about sustainable agriculture practices, product catalogs, delivery services, and contact information.

### What the Site Does

- **Product Showcase**: Displays a collection of hydroponically grown produce including lettuce, cabbage, and other fresh vegetables
- **Service Information**: Details the company's hydroponic farming services and delivery options
- **About Section**: Shares the company's story, mission, and impact on sustainable agriculture
- **Contact & Reviews**: Allows customers to get in touch and read testimonials from satisfied clients
- **Event Finding**: Helps users discover local events and markets where Peterson products are available

### Main Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations powered by Framer Motion
- **Accessibility**: Integrated with the Boafo accessibility widget to ensure the site is usable by all visitors, including those with disabilities
- **Interactive Components**: Dynamic navigation, image galleries, and form handling
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

### Technologies Used

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 7.1.12
- **Styling**: Tailwind CSS 3.4.4 with PostCSS and Autoprefixer
- **Routing**: React Router DOM 6.24.0
- **Animations**: Framer Motion 12.5.0
- **Icons**: Lucide React and React Icons
- **Form Handling**: Formik with Yup validation, Formspree for submissions
- **Accessibility**: Boafo Accessibility Widget 1.1.8
- **Linting**: ESLint with React-specific plugins

### Accessibility with Boafo

This website uses the [Boafo Accessibility Widget](https://boafo.co) to make the site accessible to all users. Boafo provides features such as:

- Text-to-speech functionality
- Font size adjustments
- Contrast controls
- Reading guides
- Keyboard navigation support
- Screen reader compatibility

The widget ensures compliance with accessibility standards and provides an inclusive experience for visitors with visual, motor, or cognitive disabilities.

---

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget on your own project, you'll need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Create an account or log in to your existing account
3. Navigate to your dashboard
4. Generate a new API key for your project
5. Copy the API key - you'll need it for the integration

**Important**: Never commit your actual API key to version control. Always use environment variables to store sensitive credentials.

---

## How to Integrate the Boafo Widget

Follow these steps to integrate the Boafo Accessibility Widget into your Next.js or React project:

### 1. Install the Package

```bash
npm install boafo-accessibility-widget
```

Or using pnpm:

```bash
pnpm add boafo-accessibility-widget
```

### 2. Create a Client Component

Create a new file at `app/components/BoafoWidgetInitializer.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_BOAFO_API_KEY;
    if (apiKey) {
      initializeBoafoWidget(apiKey);
    } else {
      console.warn("Boafo API key not found. Please set NEXT_PUBLIC_BOAFO_API_KEY in your .env file.");
    }
  }, []);

  return null; // nothing to render
}
```

### 3. Import and Use in Layout

Import and use the `BoafoWidgetInitializer` component inside `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";

export const metadata: Metadata = {
  title: "My Website",
  description: "Accessibility powered by Boafo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BoafoWidgetInitializer />
        {children}
      </body>
    </html>
  );
}
```

### 4. TypeScript Support

For TypeScript support, create `src/types/global.d.ts` with the module declaration:

```typescript
declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}
```

Update your `tsconfig.json` to include the types directory:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}
```

### 5. Static HTML Integration

For static HTML integration (non-React projects), add the Boafo script tag to your HTML file using the `data-api-key` attribute:

```html
<script
  src="https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js"
  data-api-key="YOUR_BOAFO_API_KEY"
  defer
></script>
```

**Note**: For production environments, use a build tool to inject the environment variable instead of hardcoding the API key.

---

## Setup Instructions

Follow these steps to set up and run the Peterson Hydroponics project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/GROW-YAI/peterson-hydroponics.git
cd peterson-hydroponics
```

2. **Install dependencies**

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

3. **Set up environment variables**

Copy the example environment file to create your own `.env` file:

```bash
cp .env.example .env
```

Open the `.env` file and add your Boafo API key:

```env
NEXT_PUBLIC_BOAFO_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the API key you obtained from [boafo.co](https://boafo.co).

4. **Run the development server**

```bash
npm run dev
```

Or using pnpm:

```bash
pnpm dev
```

5. **Open your browser**

Navigate to `http://localhost:5173` (or the URL shown in your terminal) to view the website.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

### Project Structure

```
peterson-hydroponics/
├── app/                      # Next.js app directory (if using Next.js)
│   ├── components/           # React components
│   │   ├── BoafoWidgetInitializer.tsx
│   │   └── features/         # Feature-specific components
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout
├── src/                      # Source files
│   ├── assets/               # Images and static assets
│   ├── components/           # Reusable components
│   ├── layouts/              # Layout components
│   ├── pages/                # Page components
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Utility functions
├── public/                   # Public static files
├── .env                      # Environment variables (not in git)
├── .env.example              # Example environment variables
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

### Environment Variables

The following environment variables are used in this project:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_BOAFO_API_KEY` | Your Boafo Accessibility Widget API key | Yes |

**Security Note**: Never commit `.env` files to version control. The `.gitignore` file is configured to exclude all `.env*` files.

---

## License

This project is proprietary and confidential.

## Support

For questions or support, please contact the Peterson Hydroponics team.