# Shipping Box

A simple React application for managing shipping boxes. Users can add shipping boxes with details such as receiver name, weight, color, and destination, and view a list of all added boxes.

## Features

- Add a shipping box with receiver name, weight, color, and destination.
- Automatically calculates shipping costs based on destination.
- Displays a list of all added boxes.
- Responsive UI with a simple navigation menu.

## Technologies Used

- React.js
- React Router
- CSS for styling

## Folder Structure

```
Box-Management-App/
│-- public/
│-- src/
│   ├── components/
│   │   ├── AddBox.js
│   │   ├── TableView.js
│   │   ├── NavBar.js
│   ├── Atoms/
│   │   ├── Constants.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│-- package.json
│-- README.md
```

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/box-management-app.git
```

### 2. Navigate to the project directory

```sh
cd box-management-app
```

### 3. Install dependencies

```sh
npm install
```

### 4. Start the development server

```sh
npm start
```

This will launch the app at `http://localhost:3000`.

## Usage

1. **Adding a Box:**

   - Navigate to the `Add Box` page.
   - Enter receiver name, weight, select a color, and choose a destination.
   - Click `Save` to add the box.

2. **Viewing the Box List:**
   - Navigate to the `Box List` page to see all added boxes.
   - The table displays receiver name, weight, box color, destination, and shipping cost.

## Constants Management

The app uses a `Constants.js` file to manage hardcoded values. This improves maintainability and readability.
