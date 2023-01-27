import React from "react";
function Art(params) {
    return (
        <div
            className='_buyLogin_flex'
            style={{
                marginRight: "2em",
                alignItems: "flex-start",
                width: "14em",
            }}
        >
            <img src={params.img} alt='作品圖' />
            <h5 style={{ marginTop: "0.5em", fontSize: "20.21px" }}>
                {params.artName}
            </h5>
            <p style={{ fontSize: "13.47px", color: "#CAB296" }}>
                {params.artistName}
            </p>
            <h5 style={{ fontSize: "24.7px" }}>{params.artPrice}</h5>
        </div>
    );
}
export default Art;
