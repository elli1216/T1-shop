# T1 Shop - E-commerce Store

An e-commerce web application for T1 esports team merchandise, built with React. Shop for official T1 apparel, accessories, and collectibles.

## 🏪 Features

- **Product Catalog**: Browse T1 merchandise organized by categories (Shirts, Accessories, Collectibles)
- **Product Search**: Find specific items quickly with the search functionality
- **Shopping Cart**: Add items to cart and manage quantities
- **Checkout System**: Complete purchases with order confirmation
- **Responsive Design**: Optimized for desktop and mobile devices
- **Category Navigation**: Filter products by category for easy browsing

## 🛍️ Product Categories

- **Shirts**: T1 logo t-shirts, player-specific merchandise (Faker, Keria), bomber jackets
- **Accessories**: Various T1 branded accessories
- **Collectibles**: Special T1 memorabilia and collectible items

## 🛠️ Technologies Used

- **Frontend**: React 19, React Router DOM
- **Styling**: SCSS/CSS with custom styling
- **Icons**: FontAwesome React components
- **State Management**: React Context API for cart functionality
- **Data**: JSON-based product database

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd T1-shop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 📝 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder with optimized performance.

### `npm run eject`
**Note: This is a one-way operation!** Removes the single build dependency and gives you full control over configuration files.

## 📁 Project Structure

```
T1-shop/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/          # Product images
├── src/
│   ├── Components/          # React components
│   │   ├── basket.jsx       # Shopping cart
│   │   ├── checkout.jsx     # Checkout process
│   │   ├── home.jsx         # Homepage
│   │   ├── productDetail.jsx # Product details
│   │   └── ...
│   ├── context/             # React Context for state management
│   ├── css/                 # Compiled CSS files
│   ├── db/                  # JSON database
│   └── ...
└── ...
```

## 🎮 About T1

T1 is a world-renowned esports organization, home to legendary players like Faker. This shop offers official merchandise for fans to show their support for the team.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational/demonstration purposes.
