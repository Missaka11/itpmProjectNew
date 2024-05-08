const asyncHandlerSync = require("express-async-handler");
const User = require("../model/User");
const Tourist = require("../model/Tourist");


const loginUser = asyncHandlerSync(async (req, res) => {
        const { email, password } = req.body;
        try {
            // Find user by email and password
            const user = await User.findOne({ email, password });
            // if (user) {
            //     res.status(200).json({ message: 'Login successful', user });
            // } else {
            //     res.status(401).json({ message: 'Invalid email or password' });
            // }
            if (user) {
                // If user exists, check the status
                if (user.status === 1) {
                    res.status(200).json({ message: 'Login successful - User', user });
                } else {
                    res.status(200).json({ message: 'Login successful - Tourist', user });
                }
            } else {
                const tourist = await Tourist.findOne({ email, password });
                if (tourist) {
                    res.status(200).json({ message: 'Login successful - Tourist', tourist });
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
//     const { email, password } = req.body;
//     try {
//         // Check if the user exists in the User collection
//         const user = await User.findOne({ email, password });
//         if (user) {
//             // If user exists, check the status
//             if (user.status === 1) {
//                 // If user status is 1, navigate to the user home page
//                 res.status(200).json({ message: 'Login successful - User', user });
//             } else {
//                 // If user status is not 1, navigate to the tourist home page
//                 res.status(200).json({ message: 'Login successful - Tourist', user });
//             }
//         } else {
//             // If user does not exist in the User collection, check the Tourist collection
//             const tourist = await Tourist.findOne({ email, password });
//             if (tourist) {
//                 // If tourist exists, navigate to the tourist home page
//                 res.status(200).json({ message: 'Login successful - Tourist', tourist });
//             } else {
//                 // If neither user nor tourist exists, return error
//                 res.status(401).json({ message: 'Invalid email or password' });
//             }
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = {
//     loginUser
// };


