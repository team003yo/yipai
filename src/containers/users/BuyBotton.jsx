import React from "react";
function BuyBotton(params) {
    return (
        <div>
            <button className='_buyLogin_buyerControlBtn' onClick={params.onClick}>
                <img src={params.src} alt={params.alt}></img>
                {params.text}
            </button>
        </div>
    );
}
export default BuyBotton;
