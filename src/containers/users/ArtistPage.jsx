import React from "react";
import "./login/buyLogin.css";

function ArtistPage(params) {
    return (
        <div
            className='_buyLogin_flex '
            style={{position: "relative" }}
        >
            <div className='_buyLogin_imgBox _buyLogin_artistPage'>
                <img
                src={params.pesnalImg}
                alt='藝術家頁面圖'
            />
            </div>

            
            <div className='_buyLogin_flex_row'>
                <img
                    src={params.artistImg}
                    alt='藝術家頭貼'
                    className='_buyLogin_artistHead'
                />
                {/* 直的 */}
                <div
                    className='_buyLogin_flex _buyLogin_artostText'>
                    {/* 藝術家 */}
                    <h5 className='_buyLogin_artistName'>
                        {params.artisrName}
                    </h5>
                    <button
                        className='_buyLogin_tableBtn'
                        style={{ fontSize: "18px" }}
                    >
                        取消關注
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ArtistPage;
