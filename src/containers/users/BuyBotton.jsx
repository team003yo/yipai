import React from "react";
function BuyBotton(params) {
    return (
        <div style={params.btnStyle}>
            <button className={params.className}  onClick={params.onClick}>
                <img className={params.ImgClassName} src={params.src} alt={params.alt}></img>
                {params.text}
            </button>
        </div>
    );
}
export default BuyBotton;
