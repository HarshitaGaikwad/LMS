import axios from "axios";
// for the sign up button
const handleRegister = async (e,name, email, password, confirmPassword, setName, setEmail, setPassword, setConfirmPassword) => {
    e.preventDefault();
  
  try{
       // basic validation
  if (password !== confirmPassword ) {
    alert("Passwords do not match ");
    return;
    }
    else if ( !name.trim() || !email.trim() || !password.trim() )
    {
        alert("Please fill all the details ");
        return;
    }
    else if(!confirmPassword.trim()) 
    {
        alert("Please fill the confirm password field  ");
        return;
    }
      // send data to backend
      const response = await axios.post('http://localhost:8001/register', {name ,email,password});
      console.log(JSON.stringify(response.data));
      alert("Data saved successfully");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
  }
  catch(error)
  {
    console.error('There was a problem with your axios operation:', error.message);
    alert(`Error: ${error.message}`);
  }
  
}
export { handleRegister };
