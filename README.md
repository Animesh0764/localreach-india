# LocalReach India

**India's First Hyperlocal Creator Platform**

Connect with micro & nano influencers (1,000–10,000 followers) in your exact locality, city, or PIN code. Perfect for local businesses like cafes, salons, boutiques, and cloud kitchens looking to drive real footfall through authentic local influence.

## 🎯 What is LocalReach?

LocalReach India is a platform that bridges the gap between local businesses and hyperlocal content creators. Unlike global influencer platforms that focus on reach, we prioritize **relevance**—connecting businesses with creators whose followers actually live in their neighborhood.

### Key Features

- **Hyperlocal Matching**: Find creators by PIN code, neighborhood, or city
- **Micro & Nano Creators**: Focus on 1K-10K follower accounts with higher engagement
- **Flexible Budgets**: Start campaigns from ₹2,000 (vs ₹50,000+ on global platforms)
- **Simple Contracts**: Auto-generated digital contracts, no legal headaches
- **Transparent Pricing**: Pay only when you close a deal (20% standard, 5% pro)
- **Free for Creators**: 100% free platform for content creators

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd localreach-india

# Step 3: Install dependencies
npm install
# or
bun install

# Step 4: Start the development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **shadcn-ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TanStack Query** - Data fetching and state management

## 📁 Project Structure

```
localreach-india/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── home/           # Homepage sections
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── ui/             # shadcn-ui components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── App.tsx             # Main app component
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Pages

- **Home** (`/`) - Landing page with hero, problem statement, and features
- **For Businesses** (`/for-businesses`) - Information for local businesses
- **For Creators** (`/for-creators`) - Information for content creators
- **How It Works** (`/how-it-works`) - Platform workflow explanation
- **About** (`/about`) - About LocalReach India

## 🚢 Deployment

The project is configured for deployment on Vercel. Simply push to your main branch and Vercel will automatically deploy.

For manual deployment:

```sh
npm run build
```

The `dist/` folder will contain the production-ready files.

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For contributions or questions, please contact the project maintainers.

---

Built with ❤️ for local businesses and creators across India
