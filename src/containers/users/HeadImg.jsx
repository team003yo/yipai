import { React, useState, useEffect } from "react";
import BuyBotton from "./BuyBotton";
import {
    BuyerSettings,
    MyOrder,
    PurchaseHistory,
    FavoriteArtist,
    FavoriteArts,
} from "./userOnclick";
import Art from "./Art";
import ArtList from "./ArtList";
import ArtistPage from "./ArtistPage";
import ArtistImg from "./image/ArtistImg.png";
import pesnalImg from "./image/pesnalImg.png";
import artsImg from "./image/artsImg.png";
import axios from "axios";
import buyerImg from "./image/buyHead.png";

function HeadImg(user) {
    let [UserData, setUserData] = useState({}); //記錄數值
    let [UserOldDatas, setUserOldDatas] = useState({}); //原本的數據
    let [UserOrders, setUserOrders] = useState([]); //記錄使用者訂單
    let [UserImg, setUserImg] = useState([]); //記錄舊圖網址

    // 只執行一次
    useEffect(() => {
        async function getMember2() {
            let response2 = await axios.get(
                `http://localhost:3001/api/members/userData`,
                {
                    withCredentials: true,
                }
            );
            setUserData(response2.data[0].users_id);
            console.log(response2.data[0]);
            setUserOldDatas(response2.data[0]);
            setUserImg(response2.data[0].user_imageHead); //抓到圖片網址
            let responseOrder = await axios.get(
                `http://localhost:3001/api/members/orders`,
                {
                    withCredentials: true,
                }
            );
            setUserOrders(responseOrder.data);
            console.log(responseOrder.data)
        }
        getMember2();
    }, []);
    //  記錄輸入的數值
    const [UserInputData, setUserInputData] = useState({
        username: "",
        account: "",
        email: "",
        imageHead: "",
        phone: "",
    });

    // 每次輸入後更新
    const handleChange = (event) => {
        setUserInputData({
            ...UserInputData,
            [event.target.name]: event.target.value,
        });
    };
    // 選擇的檔案
    const [selectedFile, setSelectedFile] = useState(null);
    // 是否有檔案被挑選
    const [isFilePicked, setIsFilePicked] = useState(false);
    // 預覽圖片
    const [preview, setPreview] = useState("");
    // server上的圖片網址
    const [imgServerUrl, setImgServerUrl] = useState("");

    // 當選擇檔案更動時建立預覽圖
    useEffect(() => {
        if (!selectedFile) {
            setPreview("");
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        console.log(objectUrl);
        setPreview(objectUrl);

        // 當元件unmounted時清除記憶體
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const changeHandler = (e) => {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            setIsFilePicked(true);
            setSelectedFile(file);
            setImgServerUrl("");
        } else {
            setIsFilePicked(false);
            setSelectedFile(null);
            setImgServerUrl("");
        }
    };
    // 送出輸入資料
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(
                `http://localhost:3001/api/members/userData`,
                {
                    withCredentials: true,
                },
                {
                    username: UserInputData.username,
                    account: UserInputData.account,
                    email: UserInputData.email,
                    phone: UserInputData.phone,
                    // imageHead: imgServerUrl,
                    usersId: UserData,
                }
            )
            .then((response) => {
                console.log(response);
                alert("更改成功");
              })
              .catch((error) => {
                console.error(error);
                alert("更改失敗");
              });
              
    };
    const handleSubmission = () => {
        const formData = new FormData();

        // 對照server上的檔案名稱 req.files.avatar
        formData.append("avatar", selectedFile);
        fetch(
            "http://localhost:3001/upload-avatar",
            {
                method: "POST",
                body: selectedFile.name,
                credentials: 'include'
            }
        )
            .then((response) => {
                response.json();
                console.log(selectedFile.name);
            })
            .then((result) => {
                console.log("Success:", result);
                setImgServerUrl("/uploads" + result.data.name);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    // 每次輸入後更新
    useEffect(() => {
        console.log(UserInputData);
    }, [UserInputData]);

    return (
        <div className='_buyLogin_flex'>
            <div className='_buyLogin_RWDflexcol _buyLogin_rwd_flex'>
                <div className='_buyLogin_flex-re' style={{ marginTop: "1em" }}>
                    <img
                        src={UserImg} //
                        alt='buyHead'
                        className='_buyLogin_headImg'
                    />
                    <label className='_buyLogin_headIcon'>
                        {/* 增加檔案 */}
                        <div>
                            <input
                                type='file'
                                id='imageHead'
                                name='imageHead'
                                style={{ display: "none" }}
                                // value={imgServerUrl}
                                onChange={changeHandler}
                            ></input>
                        </div>
                    </label>
                    <button onClick={handleSubmission}>送出</button>
                </div>
                <h3>
                    您好
                    <span>{UserOldDatas.users_name}</span>
                    <span>你現在是</span>
                    <span>藝拍小夥伴啦</span>
                </h3>
            </div>
            <div className=' _buyLogin_rwd_flexbtn'>
                {/* 按鈕列 */}
                <BuyBotton
                    text='帳戶設定'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_SettingIcon'
                    onClick={BuyerSettings}
                />
                <BuyBotton
                    text='購買記錄'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_historyIcon'
                    onClick={PurchaseHistory}
                />
                <BuyBotton
                    text='我的訂單'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_orderIcon'
                    onClick={MyOrder}
                />
                <BuyBotton
                    text='我喜愛的藝術家'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_loveartistIcon'
                    onClick={FavoriteArtist}
                />
                <BuyBotton
                    text='我喜愛的藝術品'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_loveartIcon'
                    onClick={FavoriteArts}
                />
            </div>
            <div id='BuyerSettings' style={{ display: "none" }}>
                <div className='_buyLogin_flex_content_sa '>
                    <div className='_buyLogin_mx2'>
                        <div className='_buyLogin_Titlebox _buyLogin_flex'>
                            <div
                                className='_buyLogin_h4'
                                style={{ marginLeft: "0" }}
                            >
                                帳戶設定
                            </div>
                        </div>
                        {/* 左邊表單 */}
                        <div
                            className='_buyLogin_Contentbox _buyLogin_flex'
                            style={{
                                alignItems: "unset",
                                justifyContent: "space-between",
                            }}
                        >
                            <form
                                method='post'
                                name='leftForm'
                                onSubmit={handleSubmit}
                            >
                                <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                    <label className='_buyLogin_h4'>
                                        用戶姓名：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='text'
                                        name='username'
                                        placeholder={UserOldDatas.users_name}
                                        value={UserInputData.username}
                                        onChange={handleChange}
                                        required
                                    ></input>
                                </div>
                                <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                    <label className='_buyLogin_h4'>
                                        帳號：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='text'
                                        name='account'
                                        placeholder={UserOldDatas.users_account}
                                        value={UserInputData.account}
                                        onChange={handleChange}
                                        required
                                    ></input>
                                </div>
                                <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                    <label className='_buyLogin_h4'>
                                        Email：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='email'
                                        name='email'
                                        value={UserInputData.email}
                                        onChange={handleChange}
                                        required
                                    ></input>
                                </div>
                                <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                    <label className='_buyLogin_h4'>
                                        Tel：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='tel'
                                        name='phone'
                                        value={UserInputData.phone}
                                        onChange={handleChange}
                                        required
                                    ></input>
                                </div>

                                <div className=' _buyLogin_p2 _buyLogin_flex_end'>
                                    <button
                                        className='_buyLogin_ChangeControlBtn'
                                        onClick={handleSubmit}
                                    >
                                        更改
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* 右邊表單 */}
                    <div className='_buyLogin_mx2'>
                        <div className='_buyLogin_Titlebox _buyLogin_flex'>
                            <div
                                className='_buyLogin_h4'
                                style={{ marginLeft: "0" }}
                            >
                                地址設定
                            </div>
                        </div>
                        <div className='_buyLogin_Contentbox'>
                            {/* 右邊表單 */}
                            <form method='post'>
                                <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                    <label className='_buyLogin_h4'>
                                        城市：
                                    </label>
                                    <select className='_buyLogin_SettingInput'>
                                        <option disabled>請選擇城市</option>
                                        <option>桃園市</option>
                                        <option>新北市</option>
                                        <option>台北市</option>
                                        <option>基隆市</option>
                                        <option>宜蘭縣</option>
                                        <option>花蓮縣</option>
                                        <option>台東縣</option>
                                        <option>屏東縣</option>
                                        <option>高雄市</option>
                                        <option>台南市</option>
                                        <option>嘉義縣</option>
                                        <option>嘉義市</option>
                                        <option>雲林縣</option>
                                        <option>南投縣</option>
                                        <option>彰化縣</option>
                                        <option>台中市</option>
                                        <option>苗栗縣</option>
                                        <option>新竹縣</option>
                                        <option>新竹市</option>
                                        <option>澎湖縣</option>
                                        <option>金門縣</option>
                                        <option>連江縣</option>
                                    </select>
                                </div>
                                <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                    <label className='_buyLogin_h4'>
                                        鄉鎮市區：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='text'
                                        name='township'
                                    ></input>
                                </div>
                                <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                    <label className='_buyLogin_h4'>
                                        鄰里：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='text'
                                        name='adjacent'
                                    ></input>
                                </div>
                                <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                    <label className='_buyLogin_h4'>
                                        道路或街名：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='text'
                                        name='rode'
                                    ></input>
                                </div>

                                <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                    <label className='_buyLogin_h4'>
                                        郵遞區號：
                                    </label>
                                    <input
                                        className='_buyLogin_SettingInput'
                                        type='number'
                                        name='postalCode'
                                    ></input>
                                </div>
                                <div
                                    className='_buyLogin_flex _buyLogin_p1 _buyLogin_flex_end'
                                    style={{ alignItems: "flex-end" }}
                                >
                                    <button className='_buyLogin_ChangeControlBtn'>
                                        更改
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id='PurchaseHistory' style={{ display: "none" }}>
                <div style={{ overflowX: "auto" }}>
                    <table className='_buyLogin_table'>
                        <thead className='_buyLogin_tline'>
                            <tr className='_buyLogin_td'>
                                <th>訂單編號</th>
                                <th>金額</th>
                                <th>訂購時間</th>
                                <th>訂購品項</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <div key={UserOrders.order_id}>{UserOrders.order_id}</div> */}
                            {UserOrders.map((User_Order) => (
                                <tr
                                    key={User_Order.order_id}
                                    className='_buyLogin_tr _buyLogin_tline'
                                    style={{ borderColor: "#CAB296" }}
                                >
                                    <td>{User_Order.order_date}</td>
                                    <td>12,800</td>
                                    <td>2022/11/02</td>
                                    <td>1</td>
                                    <td>
                                        <button className='_buyLogin_tableBtn'>
                                            詳細資訊
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id='MyOrder' style={{ display: "none" }}>
                <div style={{ overflowX: "auto" }}>
                    <table className='_buyLogin_table'>
                        <thead className='_buyLogin_tline'>
                            <tr className='_buyLogin_td'>
                                <th className='_buyLogin_RWDinvisible'>
                                    訂單編號
                                </th>
                                <th>出貨狀態</th>
                                <th>金額</th>
                                <th>訂購時間</th>
                                <th className='_buyLogin_RWDinvisible'>
                                    訂購品項
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className='_buyLogin_tr _buyLogin_tline'
                                style={{ borderColor: "#CAB296" }}
                            >
                                <td className='_buyLogin_RWDinvisible'>
                                    1002939311112
                                </td>
                                <td>未出貨</td>
                                <td>109,800</td>
                                <td>2022/11/02</td>
                                <td className='_buyLogin_RWDinvisible'>3</td>
                                <td>
                                    <button className='_buyLogin_tableBtn'>
                                        詳細資訊
                                    </button>
                                </td>
                            </tr>
                            <tr
                                className='_buyLogin_tr _buyLogin_tline'
                                style={{ borderColor: "#CAB296" }}
                            >
                                <td className='_buyLogin_RWDinvisible'>
                                    100293931223
                                </td>
                                <td>未出貨</td>
                                <td>10,800</td>
                                <td>2022/12/02</td>
                                <td className='_buyLogin_RWDinvisible'>2</td>
                                <td>
                                    <button className='_buyLogin_tableBtn'>
                                        詳細資訊
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='_buyLogin_RWDnone'>
                    <h4 className='_buyLogin_textCenter'>你可能還會喜歡</h4>
                    <div className='_buyLogin_flex_artsRow'>
                        <ArtList
                            btnClass='_buyLogin_RWDinvisible'
                            artsImg={artsImg}
                            artNameClass='_buyLogin_artName_min'
                            artname='海報，放輕鬆'
                            artSizeClass='_buyLogin_artSize_min'
                            artsize='50X40'
                            artPriceClass='_buyLogin_artPrice_min'
                            artprice='20,000'
                        />
                        <ArtList
                            btnClass='_buyLogin_RWDinvisible'
                            artsImg={artsImg}
                            artNameClass='_buyLogin_artName_min'
                            artname='海報，放輕鬆'
                            artSizeClass='_buyLogin_artSize_min'
                            artsize='50X40'
                            artPriceClass='_buyLogin_artPrice_min'
                            artprice='20,000'
                        />
                        {/* 只塞得下兩個 */}
                    </div>
                </div>
            </div>
            <div id='FavoriteArtist' style={{ display: "none" }}>
                <BuyBotton
                    className='_buyLogin_NewBtn'
                    text='由新至舊'
                    // onClick=''
                />
                {/* 橫的 */}
                <div className='_buyLogin_flex _buyLogin_h30'>
                    {/* 一個藝術家 */}
                    <div
                        className='_buyLogin_flex _buyLogin_card'
                        style={{ flexDirection: "row", position: "relative" }}
                    >
                        <ArtistPage
                            pesnalImg={pesnalImg}
                            artistImg={ArtistImg}
                            artisrName='yannick aaron'
                        />

                        {/* 作品 */}
                        <div
                            className='_buyLogin_RWDinvisible _buyLogin_RWDflexInvisible'
                            style={{ flexDirection: "row", zIndex: 2 }}
                        >
                            <Art
                                img={artsImg}
                                artName='作品名稱可能會很長blablabla'
                                artistName='作者名字也可能會長長長長長長長長'
                                artPrice='$1000000k'
                            />
                            {/* 下一個藝術品 */}
                            <Art
                                img={artsImg}
                                artName='作品名稱可能會很長blablabla'
                                artistName='作者名字也可能會長長長長長長長長'
                                artPrice='$1000000k'
                            />
                        </div>
                    </div>

                    {/* 一個藝術家 */}
                    <div
                        className='_buyLogin_flex _buyLogin_card'
                        style={{ flexDirection: "row", position: "relative" }}
                    >
                        <ArtistPage
                            pesnalImg={pesnalImg}
                            artistImg={ArtistImg}
                            artisrName='yannick aaron'
                        />

                        {/* 作品 */}
                        <div
                            className='_buyLogin_RWDinvisible _buyLogin_RWDflexInvisible'
                            style={{ flexDirection: "row", zIndex: 2 }}
                        >
                            <Art
                                img={artsImg}
                                artName='作品名稱可能會很長blablabla'
                                artistName='作者名字也可能會長長長長長長長長'
                                artPrice='$1000000k'
                            />
                            {/* 下一個藝術品 */}
                            <Art
                                img={artsImg}
                                artName='作品名稱可能會很長blablabla'
                                artistName='作者名字也可能會長長長長長長長長'
                                artPrice='$1000000k'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id='FavoriteArts' style={{ display: "none" }}>
                <div>
                    <BuyBotton
                        className='_buyLogin_NewBtn'
                        text='由新至舊'
                        // onClick=''
                    />
                    {/* 直的排列作品列 */}
                    <div
                        className='_buyLogin_flex_art'
                        style={{
                            marginTop: "1em",
                            alignItems: "stretch",
                        }}
                    >
                        {/* 橫排的單個作品 */}
                        <ArtList
                            btnClass='_buyLogin_deleteBtn'
                            artsImg={artsImg}
                            artNameClass='_buyLogin_artName'
                            artname='海報，放輕鬆'
                            artSizeClass='_buyLogin_artSize'
                            artsize='50X40'
                            artPriceClass='_buyLogin_artPrice'
                            artprice='20,000'
                        />
                        {/* 下一個作品 */}
                        <ArtList
                            btnClass='_buyLogin_deleteBtn'
                            artsImg={artsImg}
                            artNameClass='_buyLogin_artName'
                            artname='海報，放輕鬆'
                            artSizeClass='_buyLogin_artSize'
                            artsize='50X40'
                            artPriceClass='_buyLogin_artPrice'
                            artprice='20,000'
                        />
                        {/* 下一個作品 */}
                        <ArtList
                            btnClass='_buyLogin_deleteBtn'
                            artsImg={artsImg}
                            artNameClass='_buyLogin_artName'
                            artname='海報，放輕鬆'
                            artSizeClass='_buyLogin_artSize'
                            artsize='50X40'
                            artPriceClass='_buyLogin_artPrice'
                            artprice='20,000'
                        />
                    </div>
                </div>
            </div>
            <div className='userBtns'></div>
        </div>
    );
}

export { HeadImg };
