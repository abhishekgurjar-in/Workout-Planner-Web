

# **Workout Planner**

A comprehensive MERN stack application designed to help users create and manage their workout plans, track exercises, and monitor progress efficiently.

## **Features**

- **User Authentication**: Secure login and signup functionality.
- **Workout Plans**: Create, update, delete, and view workout plans.
- **Exercises**: Add, edit, and remove exercises within workout plans.
- **Progress Tracking**: Monitor workout progress over time.
- **Responsive Design**: Fully responsive UI for all devices.

---

## **Tech Stack**

### **Frontend**
- React.js
- Tailwind CSS (for styling)
- Axios (for API calls)

### **Backend**
- Node.js
- Express.js
- MongoDB (via Mongoose)

### **Other Tools**
- JWT (for authentication)
- Bcrypt (for password hashing)

---

## **Project Structure**

### **Frontend**
```
src/
├── components/
│   ├── AddExercise.js
│   ├── Exercises.js
│   ├── WorkoutPlans.js
│   └── Progress.js
├── services/
│   └── api.js
├── App.js
├── index.js
└── styles.css
```

### **Backend**
```
src/
├── controllers/
│   ├── userController.js
│   ├── workoutPlanController.js
│   ├── exerciseController.js
│   └── progressController.js
├── models/
│   ├── User.js
│   ├── WorkoutPlan.js
│   ├── Exercise.js
│   └── Progress.js
├── routes/
│   ├── userRoutes.js
│   ├── workoutPlanRoutes.js
│   ├── exerciseRoutes.js
│   └── progressRoutes.js
├── middleware/
│   └── authMiddleware.js
├── app.js
└── server.js
```

---

## **Setup and Installation**

### **Backend**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/workout-planner.git
   cd workout-planner/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=<your-mongo-db-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:
   ```bash
   npm start
   ```

### **Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## **API Endpoints**

### **Authentication**
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate and log in a user.

### **Workout Plans**
- `GET /api/workout-plans`: Get all workout plans.
- `POST /api/workout-plans`: Create a new workout plan.
- `PUT /api/workout-plans/:id`: Update a workout plan.
- `DELETE /api/workout-plans/:id`: Delete a workout plan.

### **Exercises**
- `GET /api/exercises/:workoutPlanId`: Get exercises for a specific workout plan.
- `POST /api/exercises`: Add a new exercise to a workout plan.
- `DELETE /api/exercises/:id`: Delete an exercise.

### **Progress**
- `GET /api/progress/:userId`: Get user progress data.
- `POST /api/progress`: Add progress data.

---

## **Usage**

1. **Create an Account**: Sign up or log in to the application.
2. **Create a Workout Plan**: Add a new workout plan.
3. **Add Exercises**: Add specific exercises to your workout plan with sets and reps.
4. **Track Progress**: Monitor your progress over time.

---

## **Contributing**

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a pull request.

---

## **Contact**

For questions or feedback, contact me at:  
**GitHub**: [abhishekgurjar-in](https://github.com/abhishekgurjar-in)  


