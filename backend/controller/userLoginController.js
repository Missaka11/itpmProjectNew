const jwt = require('jsonwebtoken');
const asyncHandlerSync = require("express-async-handler");
const User = require("../model/User");
const Tourist = require("../model/Tourist");

const loginUser = asyncHandlerSync(async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email and password
        const user = await User.findOne({ email, password });
        if (user) {
            // check the status
            if (user.status === 1) {
                const token = jwt.sign({ id: user._id, userType: 'user' }, 'your_secret_key');
                res.status(200).json({ message: 'Login successful - User', token });
            } else {
                res.status(200).json({ message: 'Login successful - Tourist', token });
            }
        } else {
            const tourist = await Tourist.findOne({ email, password });
            if (tourist) {
                const token = jwt.sign({ id: tourist._id, userType: 'tourist' }, 'your_secret_key');
                res.status(200).json({ message: 'Login successful - Tourist', token });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = {
    loginUser
};



// const asyncHandlerSync = require("express-async-handler");
// const User = require("../model/User");
// const Tourist = require("../model/Tourist");


// const loginUser = asyncHandlerSync(async (req, res) => {
//         const { email, password } = req.body;
//         try {
//             // Find user by email and password
//             const user = await User.findOne({ email, password });
//             if (user) {
//                 // If user exists, check the status
//                 if (user.status === 1) {
//                     res.status(200).json({ message: 'Login successful - User', user });
//                 } else {
//                     res.status(200).json({ message: 'Login successful - Tourist', user });
//                 }
//             } else {
//                 const tourist = await Tourist.findOne({ email, password });
//                 if (tourist) {
//                     res.status(200).json({ message: 'Login successful - Tourist', tourist });
//                 } else {
//                     res.status(401).json({ message: 'Invalid email or password' });
//                 }
//             }

//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Server error' });
//         }
//     });

// module.exports = {
//     loginUser
// };




