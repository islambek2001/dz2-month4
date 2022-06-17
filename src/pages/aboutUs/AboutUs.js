import React from "react";


function AboutUs({text, product}){
    return(
        <div>
            <h1>AboutUs - {text}</h1>
            <p>{product.text}</p>
            <p>{product.product}</p>


        </div>
    )
}

export default AboutUs;