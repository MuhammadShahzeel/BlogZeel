import UserModel from "../models/user.model.js";


export const signupUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
     const user = await UserModel.signup(username,email, password);
        res.status(201).json(user);
     

    
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
    

}