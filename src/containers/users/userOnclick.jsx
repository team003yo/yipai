import { React, useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import axios from "axios";
// import { useParams } from "react-router-dom";
import ArtistPage from "./ArtistPage";
import Art from "./Art";
import ArtList from "./ArtList";
import BuyBotton from "./BuyBotton";

import ArtistImg from "./image/ArtistImg.png";
import pesnalImg from "./image/pesnalImg.png";
import artsImg from "./image/artsImg.png";

// 帳號設定選項
function BuyerSettings() {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='block';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='none';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='none';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='none';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='none';
}

// 購買記錄選項
function PurchaseHistory(params) {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='none';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='block';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='none';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='none';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='none';
}

// 我的訂單選項
function MyOrder(params) {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='none';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='none';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='block';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='none';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='none';
}

// 我喜愛的藝術家
function FavoriteArtist(params) {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='none';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='none';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='none';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='block';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='none';
}

// 我喜愛的藝術品
function FavoriteArts(params) {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='none';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='none';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='none';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='none';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='block';
}

export {
    BuyerSettings,
    MyOrder,
    PurchaseHistory,
    FavoriteArtist,
    FavoriteArts,
};
