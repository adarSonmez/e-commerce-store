# My Boutique - E-Commerce Store

A modern, responsive e-commerce application built with React, TypeScript, and Firebase, featuring a complete shopping experience with user authentication, cart management, and payment processing.

## 🚀 Live Demo

Visit the live application: [https://my-boutique.netlify.app/](https://my-boutique.netlify.app/)

## ✨ Features

### Core Functionality

- **Product Catalog**: Browse collections of hats, jackets, sneakers, and clothing for men and women
- **Interactive Product Slider**: Custom-built slider component with smooth animations
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **User Authentication**: Sign up/in with email or Google OAuth
- **Secure Payments**: Stripe integration for payment processing
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Technical Features

- **Progressive Web App (PWA)**: Service worker implementation for offline functionality
- **State Management**: Redux Toolkit with persistence
- **Real-time Data**: Firebase Firestore integration
- **Type Safety**: Full TypeScript implementation
- **Modern Routing**: React Router v6 with protected routes
- **Accessibility**: ARIA labels and semantic HTML

## 🛠 Tech Stack

### Frontend

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management with RTK Query
- **React Router v6** - Client-side routing
- **Sass** - Advanced CSS preprocessing

### Backend & Services

- **Firebase Authentication** - User management
- **Firestore** - NoSQL database
- **Stripe** - Payment processing
- **Netlify Functions** - Serverless backend

### Development Tools

- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **Workbox** - Service worker management
- **Redux DevTools** - State debugging

## 🚦 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Firebase project with Authentication and Firestore enabled
- Stripe account for payment processing

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/e-commerce-store.git
   cd e-commerce-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

   ```env
   # Firebase Configuration
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id

   # Stripe Configuration
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Start development server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## 📱 Usage

### For Customers

1. **Browse Products**: Navigate through different collections on the homepage
2. **Product Details**: Use the interactive slider to view products
3. **Shopping Cart**: Add items and manage quantities
4. **Authentication**: Sign up or sign in to access checkout
5. **Payment**: Complete purchases using test card: `4242 4242 4242 4242`

### Test Payment Information

- **Card Number**: 4242 4242 4242 4242
- **Expiry**: 01/30
- **CVC**: 123

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── cart-dropdown/   # Shopping cart dropdown
│   ├── collection-slider/ # Product carousel
│   ├── custom-button/   # Styled button component
│   ├── form-input/      # Form input with floating labels
│   └── ...
├── pages/              # Route components
│   ├── homepage/       # Landing page
│   ├── shop/          # Product catalog
│   ├── checkout/      # Payment processing
│   └── ...
├── store/             # Redux state management
│   └── features/      # Feature-based slices
│       ├── auth/      # Authentication state
│       ├── cart/      # Shopping cart state
│       ├── shop/      # Product catalog state
│       └── ...
├── utils/             # Utility functions
│   ├── firebase/      # Firebase configuration
│   └── stripe/        # Stripe configuration
└── assets/           # Static assets
```

## 🎨 Key Components

### State Management

- **Auth Slice**: Manages user authentication state with Firebase integration
- **Cart Slice**: Handles shopping cart operations using Redux Toolkit's createEntityAdapter
- **Shop Slice**: Manages product catalog with async thunks for data fetching
- **Directory Slice**: Controls homepage category navigation

### Custom Components

- **CollectionSlider**: Interactive product carousel with touch/mouse controls
- **PaymentForm**: Stripe-integrated payment processing
- **CustomButton**: Reusable button with multiple variants
- **FormInput**: Input component with floating label animations

## 🔧 Scripts

```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run test suite
npm run eject    # Eject from Create React App (irreversible)
```

## 🌐 Deployment

The application is configured for deployment on Netlify with:

- Automatic redirects for SPA routing
- Serverless functions for payment processing
- PWA capabilities with service worker registration

## 🔒 Security Features

- Firebase Authentication with Google OAuth
- Protected routes for authenticated users
- Secure payment processing through Stripe
- Environment variable protection for sensitive keys

## 🎯 Performance Optimizations

- Code splitting with React.lazy (ready for implementation)
- Redux state persistence for improved UX
- Optimized images and assets
- Service worker caching strategies
- Responsive design for various screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Adar Sönmez**

- LinkedIn: [https://www.linkedin.com/in/adar-sonmez/](https://www.linkedin.com/in/adar-sonmez/)

## 🙏 Acknowledgments

- Firebase for backend services
- Stripe for payment processing
- React community for excellent documentation
- All contributors and users of this project

---

**Note**: This is a portfolio project demonstrating modern React development practices. Payment functionality uses Stripe's test mode with provided test card details.
