
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

---

## 🚀 Installation & Setup

Follow these steps to get the project up and running on your local machine.

1. **Clone the repository**

   ```bash
   git clone https://github.com/MohitAnand29/Courses-React.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd Courses-React
   ```

3. **Install the necessary dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

👉 The application will now be running at:
[http://localhost:3000](http://localhost:3000) ✅

---


## 📖 Usage Guide

Once the application is running, you can:

* 📚 **View All Courses**

  * By default, all courses are displayed under the **"All"** category.

* 🔎 **Filter Courses by Category**

  * Click on the category buttons (e.g., **"Development"**, **"Business"**) at the top.
  * The view will dynamically update to show only the courses from the selected category.

* ❤️ **Favorite a Course**

  * Click the **heart icon** on a course card to add it to your favorites.
  * ✅ A **success notification** will appear.
  * 💡 Clicking it again will remove it from favorites, triggering an **info notification**.

---

## 📁 Project Structure

The project follows a standard **React application structure**, with components organized for clarity and reusability.

```bash
.
└── src
    ├── components
    │   ├── Card.js         # Renders a single course card with like functionality
    │   ├── Cards.js        # Renders the grid of all course cards based on the selected category
    │   ├── Filter.js       # Renders the category filter buttons
    │   ├── Navbar.js       # Main navigation bar with the application title
    │   └── Spinner.js      # Loading animation component shown while fetching data
    │
    ├── App.js              # Root application component; manages state and API calls
    ├── App.css             # Default CSS from Create React App with minor styles
    ├── data.js             # Contains API URL and static data for filter buttons
    ├── index.css           # Global styles, custom animations, and Tailwind CSS config
    └── index.js            # Entry point of the React application
```

---

## 🔮 Future Improvements

Here are some ideas for future enhancements:

* 💾 **Persistent Likes** – Use `localStorage` or a backend to make the "liked" status persist across browser sessions.
* ⭐ **Dedicated Favorites Page** – Add a new filter category or a separate page to view all liked courses.
* 🔍 **Search Functionality** – Implement a search bar to find courses by title or keyword.
* ♿ **Accessibility Enhancements** – Further improve ARIA attributes and keyboard navigation.
* 🪝 **Custom Hooks** – Refactor the API fetching logic into a custom hook (e.g., `useFetchCourses`) for cleaner code in `App.js`.

---

## 🤝 Contribution Guidelines

Contributions are always welcome! 🎉 If you have suggestions for improvements, please feel free to **open an issue** or **submit a pull request**.

Steps to contribute:

1. **Fork the Project**
2. **Create your Feature Branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**

   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request** 🚀

---

## 👨‍💻 Author

**Mohit Anand**

* 🌐 GitHub: [MohitAnand29](https://github.com/MohitAnand29)
* 💼 LinkedIn: [Mohit Anand](https://www.linkedin.com/in/mohit-anand-981a55259/)

---

