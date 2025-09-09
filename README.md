A modern, responsive React.js application that showcases and filters online courses across various categories. Features an elegant UI with smooth animations, favorites system, and dynamic filtering.

https://img.shields.io/badge/React-18.2.0-blue https://img.shields.io/badge/Tailwind-CSS-38B2AC https://img.shields.io/badge/License-MIT-green

https://via.placeholder.com/800x400/0f172a/ffffff?text=Courses-React+Demo

✨ Features
Category Filtering: Browse courses by Development, Business, Design, Lifestyle, or view All courses

Favorite System: Like/unlike courses with beautiful toast notifications

Responsive Design: Optimized for desktop, tablet, and mobile devices

Modern UI: Gradient designs, smooth animations, and 3D card effects

Loading Animation: Custom particle-based spinner with typewriter effect

API Integration: Fetches real course data from external API

🛠️ Tech Stack
Frontend Framework: React.js with Hooks

Styling: Tailwind CSS with custom animations

Icons: React Icons

Notifications: React Toastify

Build Tool: Create React App

🚀 How to Use
Browse Courses: View all available courses on the main page

Filter by Category: Click on category buttons (All, Development, Business, Design, Lifestyle) to filter courses

Add to Favorites: Click the heart icon on any course card to add it to your favorites

Notifications: Receive visual feedback when adding/removing favorites

📁 Project Structure
src/
├── components/
│   ├── Card.js          # Individual course card with like functionality
│   ├── Cards.js         # Container for displaying course cards
│   ├── Filter.js        # Category filter component
│   ├── Navbar.js        # Navigation header
│   └── Spinner.js       # Custom loading animation
├── data.js              # API URL and filter categories
├── App.js               # Main application component
├── index.js             # Application entry point
├── index.css            # Global styles and animations
└── App.css              # Basic App styles

🎨 UI/UX Features
Gradient text and backgrounds with animation effects

Smooth hover animations and transitions

3D card tilt effects on hover

Custom scrollbar styling

Typewriter animation for loading text

Floating particles in loading state

Responsive grid layout for course cards

🔧 Customization
Easily customize the app by:

Modifying the color scheme in index.css (update gradient values)

Adding new categories in data.js

Changing animation durations in CSS classes

Updating the API endpoint in data.js

🌐 API Reference
This project uses the CodeHelp API:

Endpoint: https://codehelp-apis.vercel.app/api/get-top-courses

Returns: Course data categorized by Development, Business, Design, and Lifestyle

