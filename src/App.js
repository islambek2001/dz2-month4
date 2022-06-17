import './App.css';
import React from "react";
import AboutUs from "./pages/aboutUs/AboutUs";


function App (){


    return(
        <div>
            <AboutUs text="i am text" product={{text: 'text', product: 'product'}}/>

        </div>
    );
}



export default App;