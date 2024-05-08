const express = require("express");
const connectDB = require("./config/dbConfig");
// const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const port = process.env.PORT;

const app = express();
connectDB();

// Add middleware for display passing data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Call to the routes
app.use("/api/data", require("./routes/dataRoutes"));
app.use("/api/travelPlans", require("./routes/travelPlansRoutes"));

app.use("/api/locationCodinates", require("./routes/locationCodinatesRoutes"));

app.use("/api/locations", require("./routes/LocationsRoutes"));

app.use("/api/budget", require("./routes/budgetCalRoutes"));

app.listen(port, () => console.log(`Server started on ${port}`));

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       // Find user by email and password
//       const user = await User.findOne({ email, password });
//       if (user) {
//         res.status(200).json({ message: 'Login successful', user });
//       } else {
//         res.status(401).json({ message: 'Invalid email or password' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
