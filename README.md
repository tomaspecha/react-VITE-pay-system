# react-toll

## ReactPaySystem

ReactPaySystem is a modern toll payment application built using **React**, **TypeScript**, and **Vite**. This system is designed to provide a simple and efficient user experience for managing toll payments with a modern and responsive UI.

---

## Features

- **Toll Category Selection**:
  - Users can select from multiple toll categories.
  - Dynamic cost display based on selected category.

- **Payment Form**:
  - A simple form to capture user details and card number.
  - Alerts users upon successful submission.

- **Responsive Design**:
  - Fully responsive layout for desktop and mobile devices.

- **Modern Tooling**:
  - Built with Vite for fast development and optimized builds.
  - Written in TypeScript for type safety and maintainability.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 16.x or later recommended)
- **npm** (or yarn/pnpm, depending on your preference)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-toll.git
   cd react-toll
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Project Structure

```
react-toll/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── assets/
├── index.html
├── package.json
└── vite.config.ts
```

- **`src/`**: Contains all source code files.
- **`public/`**: Static assets used in the project.
- **`index.html`**: Entry HTML file.
- **`vite.config.ts`**: Configuration file for Vite.

---

## Usage

### Selecting a Toll Category
- Use the dropdown menu to select a category.
- The cost is dynamically updated and displayed below the dropdown.

### Submitting Payment
- Fill in the `Name` and `Card Number` fields.
- Click the `Submit Payment` button.
- An alert will confirm submission success.

---

## Development Notes

- **Dynamic Updates**:
  - Leveraging Vite for hot module replacement (HMR).
  - React's state management updates the UI dynamically.

- **Responsive UI**:
  - CSS includes responsive rules for a great user experience on all devices.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with enhancements or bug fixes.

---

## License

This project is licensed under the [MIT License](./LICENSE).
