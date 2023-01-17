import React from "react";
import "./login/buyLogin.css"

function ArtistPage(params) {
    return(
        <div className='_buyLogin_flex'
        style={{ flexDirection: "row", position: "relative" }}>
            <img
                        src={params.pesnalImg}
                        alt='藝術家頁面圖'
                        style={{ position: "absolute", left: "0", zIndex: 1 }}
                    />
                    <img
                        src={params.artistImg}
                        alt='藝術家頭貼'
                        style={{ zIndex: 2, marginLeft: "3em" }}
                    />
                    {/* 直的 */}
                    <div
                        className='_buyLogin_flex'
                        style={{
                            zIndex: 2,
                            marginRight: "3em",
                            marginLeft: "1em",
                        }}
                    >
                        {/* 藝術家 */}
                        <h5 style={{ fontSize: "30px", fontStyle: "bold" }}>
                            {params.artisrName}
                        </h5>
                        <p style={{ fontSize: "18px" }}>{params.artisrCountry}</p>
                        <button
                            className='_buyLogin_tableBtn'
                            style={{ fontSize: "18px" }}
                        >
                            取消關注
                        </button>
                    </div>
        </div>
    );
}
export default ArtistPage;