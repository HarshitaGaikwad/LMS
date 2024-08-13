import User from '../models/UserSchema.js';

//homepage
const homeController = (req, res) => {
    res.send("At the home page ")
}

//register
const register = async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Debugging statement
        const { name, email, password } = req.body;

        //here

        const newUser = new User(
            {
                name: name,
                email: email,
                password: password
            });

        await newUser.save();
        console.log("New User:", newUser); // debugging statement

        res.json({ message: "The register API works", newUser });
    }
    catch (error) {
        console.log("Failed to register the user" + error);
        res.status(500).json({ message: "Failed to register the user" });
    }

}

// signIn page
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            if (password === user.password) {
                return res.status(200).json({ message: 'Login successful', user });
            } else {
                return res.status(401).json({ message: 'Invalid password' });
            }
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error in /signIn route:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


export { homeController, register ,signIn};