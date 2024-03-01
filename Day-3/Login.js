import { useState } from "react";

function Login() {

    const [uid, setUid] = useState("");
    const [pwd, setPwd] = useState("");
    const [result, setResult] = useState("");


    function updateUid(event)
    {        
       setUid(event.target.value);
    }

    function updatePwd(event)
    {        
       setPwd(event.target.value);
    }

    function  loginClick()
    {
        if(uid == "rerohit"  && pwd == "ca2500082TS")
        {
            setResult("Welcome to Admin");
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }

    return (
        <>
            <h3>Working with state in React</h3>
            <hr/>

            <fieldset>
                <legend>User Login</legend>
                User Name  :    <input type="text" onChange={updateUid}  />
                <br /><br />

                Password  :    <input type="password" onChange={updatePwd}  />
                <br /><br />

                <input type="button" onClick={loginClick} value="Login" />
               <p>{result}</p>
            </fieldset>
        </>
    );
}

export default Login;