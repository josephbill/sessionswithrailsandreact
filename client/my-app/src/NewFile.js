import { useEffect,useState } from "react";
import { Link,useNavigate } from 'react-router-dom';

function NewFile() {


    useEffect(() => {
 
        const checkLoginStatus = async () => {
            try {
              const response = await fetch('http://localhost:3001/users', {
                method: 'GET',
                credentials: 'include',
              });
              const data = await response.json();
            console.log(data)
            } catch (error) {
              console.log('API error:', error);
            }
          };
          checkLoginStatus();

    }, [])

    const navigate = useNavigate(); // Get navigate function from react-router-dom

   //include sessions template to destroy them.
    return(
        <div>
           <h1>Here</h1>
           <h1 onClick={() => {
            fetch("http://localhost:3001/logout",{
                method: 'POST',
                credentials: 'include',
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                navigate('/login'); // Navigate to /newfile with user data as a prop

            })
           }}>Logout</h1>
        </div>
    )

}

export default NewFile;