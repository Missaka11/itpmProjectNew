const asyncHandlerSync = require("express-async-handler");
const User = require("../model/User");

// app.post("/api/data/register", 
const registerUser = asyncHandlerSync(async (req, res) => {
    const { firstName, lastName, address, email, mobile, password } = req.body;
  
    try {
      // Check if the user already exists based on email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User already exists with this email" });
      }
  
      // Create a new user
      const newUser = new User({
        firstName,
        lastName,
        address,
        email,
        mobile,
        password,
      });
  
      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  });


module.exports = {
    registerUser
};
