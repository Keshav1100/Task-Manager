# Task Manager Application

This Task Manager application is a simple, responsive tool built with React and JavaScript. It allows users to manage their tasks with basic and advanced features, including task input, deletion, search, priority setting, sorting, and more.

## Application Functionality

### Basic Features

1. **Task Input**: Users can add new tasks with a title and priority level.
2. **Task Deletion**: Users can delete tasks from the list.
3. **Task Persistence**: Tasks are saved to local storage, ensuring they persist even after refreshing the page.

### Stretch Goals

1. **Task Search**: Users can search for tasks by title.
2. **Task Completion**: Mark tasks as completed to keep track of finished items.
3. **Priority Setting**: Assign a priority (Low, Medium, High) to each task.
4. **Task Sorting**: Sort tasks by date created, priority, or completion status.
5. **UI Animation**: Smooth animations for task addition, deletion, and completion for a better user experience.

### About Me Section

A separate "About Me" section provides details about the developer along with a link to the open-source GitHub repository.

## Setup and Launch Process

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Keshav1100/task-manager.git
   cd task-manager
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Install dependencies**:
   ```bash
   npm run dev
   ```

## Assumptions Made

- **Task Persistence**: Local storage is used to persist tasks. If this were a production application, a database solution would be preferred for persistence across devices.
- **Priority Levels**: Tasks have three priority levels (Low, Medium, High) which are hardcoded in a dropdown for simplicity.
- **Task Sorting**: Sorting is implemented based on priority, completion, and date created, assuming these are the primary fields users would find useful.

## Screenshots

Below are some screenshots of the Task Manager application:

### Home Page

![Home Page](./screenshots/home-page.png)

### About Me Page

![About Me Page](./screenshots/about-page.png)
