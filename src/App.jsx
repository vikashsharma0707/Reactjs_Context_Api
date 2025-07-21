import { useContext } from "react";

import AuthProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


const App=()=>{

  
    return(
        <>
       <AuthProvider>
<Navbar/>
<Home/>
       </AuthProvider>
        </>
        
    )
}

export default App;