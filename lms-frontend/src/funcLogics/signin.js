import axios from "axios";

const handleSignIn = async (e, email, password, setEmail, setPassword) => {
    e.preventDefault();
    try {
        // if (!email.trim() || !password.trim() )
        //     {
        //         alert("Please fill all the details ");
        //         return;
        //     }
        //http://localhost:8001
        // console.log(email);
        const result = await axios.post("http://localhost:8001/signIn", {email, password });
        console.log(JSON.stringify(result.data));

        // setEmail("");
        // setPassword("");
    } catch {
        console.log("error at the hadele signin of myft src folder");
    }
}

export { handleSignIn };
