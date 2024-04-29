# To-Do App

This is a simple To-Do App built using a MERN stack. As in React for the frontend and Node.js with Express and MongoDB for the backend. It allows users to create, edit, and delete tasks, as well as mark them as done.

- **Deployed Link**: https://to-do-app-frontend-qprr.onrender.com

## Features

- **Google Sign-In**: Users can and must sign in using their Google account for authentication. *Task are loaded based on each unique email*
- **Task Management**: Users can add, edit, delete, and mark tasks as done.
- **Sorting**: Tasks are sorted by date and then alphabetically for better organization.

## Technologies Used

- **Frontend**: React, React Router, axios
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication (Google Sign-In)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sy2982/To-Do-App.git
    ```

2. Install dependencies for both Frontend and Backend:

    ```bash
    # Navigate to Frontend directory
    cd Frontend
    npm install

    # Navigate to Backend directory
    cd Backend
    npm install
    ```

3. Set up Firebase Authentication/ MongoDB/ Origin:

    - Follow the Firebase documentation to set up Google Sign-In authentication for your project.
    - Replace the Firebase configuration in `./Frontend/components/firebaseConfig.js` with your own configuration.
    - Replace MongoDB with your URI configuration in 'Backend/index.js' mongoose.connect("<insert MondoDB URI here>") and replace frontendURL to your deployed FRONTEND URL.
    - Finally, replace the "origin" varible in both `./Frontend/components/Home.jsx` and `./Frontend/components/Create.jsx` to your deployed BACKEND URL.

4. Run the application:

    ```bash
    # Start the frontend server
    cd Frontend
    npm run dev

    # Start the backend server
    cd Backend
    npm start
    ```

5. Access the application in your browser:

   - Open the frontend URL based on your hosting enviroment.
   - Login with a valid gmail.
   - Create and manage your tasks in the to do list.

## License

This project is licensed under the [MIT License](LICENSE).

