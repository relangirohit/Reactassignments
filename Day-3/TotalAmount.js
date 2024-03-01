import { useState } from "react";

function Login() {

    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [result, setResult] = useState("");


    function updatePname(event)
    {        
       setPname(event.target.value);
    }

    // function updatePrice(event)
    // {        
    //    setPrice(event.target.value);
    // }

    function updateQuantity(event)
    {        
       setQuantity(event.target.value);
    }

    function  CalculateTotal()
    {
        
            let n = price*quantity;
            setResult("Total Amount : "+n)
    }

    return (
        <>
            <h3>Working with state in React</h3>
            <hr/>

            <fieldset>
                Product Name  :    <input type="text" onChange={updatePname}  />
                <br /><br />

                {/* Without Using External Method.... */}
                Unit Price  :    <input type="text" onChange={(event) => setPrice(event.target.value)}  />
                <br /><br />

                Quantity  :    <input type="text" onChange={updateQuantity}  />
                <br /><br />

                <input type="button" onClick={CalculateTotal} value="Get Total" />

               <p>{result}</p>
            </fieldset>
        </>
    );
}

export default Login;