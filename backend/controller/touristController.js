const asyncHandlerSync = require("express-async-handler");
const Tourist = require("../model/Tourist");

const registerTourist = asyncHandlerSync(async (req, res) => {
    const { firstName, lastName, address, email, mobile, password } = req.body;

    try{

        const existingTourist = await Tourist.findOne({email});
        if(existingTourist){
            return res
            .status(400)
            .json({ message: "Tourist already exists with this email please check your email" });
        }

        const newTourist = new Tourist({
            firstName,
            lastName,
            address,
            email,
            mobile,
            password
        });

        await newTourist.save();
        res.status(201).json({ message: "Tourist registered successfully" });
        

    }catch (error){
        console.error("Error:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = {
    registerTourist
};