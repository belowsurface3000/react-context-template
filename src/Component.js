import { useContext } from "react";
import { exampleContext } from "./App.js";

function Component() {

    const { data, setData } = useContext(exampleContext);
    
    return <div>  
        <p>The variable "data" currently holds this:</p> 
        <h1>{data}</h1>
        <button onClick={() => setData("Hi from Component.js!")}>Change it</button>
        <p>Refresh this page to do it again!</p>
    </div>;
}

export default Component;
