
## 🎓 Top Courses Showcase

A sleek and responsive web application built with **React** and **Tailwind CSS** that showcases a curated list of top online courses.

### ✨ Features

* 📚 Browse a curated list of top online courses
* 🔎 Filter courses dynamically by category
* ❤️ Like your favorite courses
* 🔔 Instant visual feedback using toast notifications
* 📱 Fully responsive design (mobile, tablet, desktop)

### 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS
* **Notifications:** React-Toastify (or similar library)
* **State Management:** React Hooks / useState




🎓 Top Courses Showcase
A sleek and responsive web application built with React and Tailwind CSS that showcases a curated list of top online courses. Users can dynamically filter courses by category and "like" their favorites, receiving instant visual feedback through toast notifications.

✨ Key Features
Dynamic Data Fetching: Courses are fetched from a live API upon loading.

Category Filtering: Easily filter courses by categories such as Development, Business, Design, and Lifestyle.

Interactive Cards: Each course is displayed on a modern, animated card with a hover effect.

Like/Favorite System: Users can click a heart icon to "like" or "unlike" a course.

Toast Notifications: Instant, non-intrusive feedback for liking/unliking courses, powered by react-toastify.

Elegant Loading State: A custom-animated, visually appealing spinner is displayed while data is being fetched.

Responsive Design: A fully responsive layout that looks great on all devices, from mobile phones to desktops.

🛠️ Tech Stack & Dependencies
Frontend: React.js

Styling: Tailwind CSS

Icons: React Icons (specifically FcLike & FcLikePlaceholder)

Notifications: React Toastify

🚀 Installation & Setup
Follow these steps to get the project up and running on your local machine.

1. Clone the repository:
git clone https://github.com/MohitAnand29/Courses-React

2. Navigate to the project directory:
cd Courses-React

3. Install the necessary dependencies:
npm install

4. Start the development server:
npm start

The application will now be running on http://localhost:3000.


Usage Guide
Once the application is running, you can:

View all courses displayed by default under the "All" category.

Filter courses by clicking on the category buttons (e.g., "Development", "Business") at the top. The view will dynamically update to show only the courses from the selected category.

Favorite a course by clicking the heart icon on a course card. A success notification will appear. Clicking it again will remove it from favorites, triggering an info notification.

📁 Project Structure

The project follows a standard React application structure, with components organized for clarity and reusability.

```
.
└── src
    ├── components
    │   ├── Card.js         # Renders a single course card with like functionality.
    │   ├── Cards.js        # Renders the grid of all course cards based on the selected category.
    │   ├── Filter.js       # Renders the category filter buttons.
    │   ├── Navbar.js       # The main navigation bar with the application title.
    │   └── Spinner.js      # The loading animation component shown while fetching data.
    │
    ├── App.js              # The main application component; manages state and API calls.
    ├── App.css             # Default CSS file from Create React App, with minor styles.
    ├── data.js             # Contains the API URL and static data for filter buttons.
    ├── index.css           # Global styles, custom animations, and Tailwind CSS configurations.
    └── index.js            # The entry point of the React application.
```

🔮 Future Improvements
Here are some ideas for future enhancements:

Persistent Likes: Use localStorage or a backend to make the "liked" status persist across browser sessions.

Dedicated Favorites Page: Add a new filter category or a separate page to view all liked courses.

Search Functionality: Implement a search bar to find courses by title or keyword.

Accessibility Enhancements: Further improve ARIA attributes and keyboard navigation.

Custom Hooks: Refactor the API fetching logic into a custom hook (e.g., useFetchCourses) for cleaner code in App.js.

🤝 Contribution Guidelines
Contributions are welcome! If you have suggestions for improvements, please feel free to open an issue or submit a pull request.

Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

👨‍💻 Author
Your Name

GitHub: MohitAnand29

[LinkedIn Profile](https://www.linkedin.com/in/mohit-anand-981a55259/)
