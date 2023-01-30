// 使用者授權驗證模組
const authRouter = require('./routers/authRouter')

const express = require("express");
const app = express();

require("dotenv").config();
const pool = require('../utils/db');
// 如果要讓 express 認得 json 資料
// request Content-Type: application/json
// 需要加上這個中間件
app.use(express.json());

// 連線網址 http://localhost:3001
// 允許跨源存取,預設是全部開放,也可以做部分限制，參考 npm cors 的文件
const cors = require('cors');
app.use(
  cors({
    // 為了讓 browser 在 CORS 的情況下還是幫我們送 cookie
    // 必須把 credentails 設定成 true
    // 但是，當你把 credentials 設定成 true，就一定要設定 origin (來源)
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const path = require('path');
app.use(
  expressSession({
    // 告訴 express-session session 要存哪裡
    store: new FileStore({
      path: path.join(__dirname, '..', 'sessions'),
    }),
    secret: process.env.SESSION_SECRET,
    // true: 即使 session 沒有改變也重新儲存一次
    // 取決於你用的 storage 是有時效性的，可能需要不停地刷新這個時效
    resave: false,
    // true: 還沒有正式初始化的 session 也真的存起來
    saveUninitialized: false,
  })
);

// middleware => pipeline pattern

// 設定 express 處理靜態檔案
// -> express 內建 -> 不需要安裝任何東西
// 處理使用者註冊時上傳的圖片網址
app.use('/public', express.static('./public'));
//
app.get("/", (req, res, next) => {
    console.log("這裡是首頁!", req.mfee31, req.dt);
    res.send("Hello Express 9");
});
app.use('/api/auth', authRouter);


// app.get("/user", (req, res, next) => {
//     console.log("這裡是使用者頁面", req.dt);
//     res.send("會員您好");
// });
app.get("/", (req, res, next) => {
    console.log("這裡是首頁 2", req.mfee31, req.dt);
    res.send("Hello Express 9");
});

app.get("/product", async (req, res, next) => {
    console.log("這裡是 /product");
    let [data] = await pool.query("SELECT * FROM product");
    res.json(data);
});

app.get("/product/:productId", async (req, res, next) => {
    console.log("/product/:productId => ", req.params.productId);
    let [data] = await pool.query("SELECT * FROM product WHERE id=? ", [
        req.params.productId,
    ]);
    res.json(data);
});

app.get("/users", async (req, res, next) => {
    console.log("這裡是 /users");
    let [data] = await pool.query("SELECT * FROM users");
    res.json(data);
});

// 會員部分

app.get("/users/:usersId", async (req, res, next) => {
    console.log("/users/:usersId => ", req.params.usersId);
    let [data] = await pool.query("SELECT * FROM users WHERE users_id=? ", [
        req.params.usersId,
    ]);
    res.json(data);
});
app.get("/news", async (req, res, next) => {
    console.log("這裡是 /news");
    let [data] = await pool.query("SELECT * FROM news");
    res.json(data);
});

app.get("/news/:newsId", async (req, res, next) => {
    console.log("/news/:newsId => ", req.params.spaceId);
    let [data] = await pool.query("SELECT * FROM news WHERE news_id=? ", [
        req.params.newsId,
    ]);
    res.json(data);
});
app.get("/space", async (req, res, next) => {
    console.log("這裡是 /space");
    let [data] = await pool.query("SELECT * FROM space");
    res.json(data);
});

app.get("/space/:spaceId", async (req, res, next) => {
    console.log("/space/:spaceId => ", req.params.spaceId);
    let [data] = await pool.query("SELECT * FROM space WHERE space_id=? ", [
        req.params.spaceId,
    ]);
    res.json(data);
});

app.listen(3001, () => {
    console.log("Server running at port 3001");
});
// app.use((req, res, next) => {
//     console.log("出現404！");
//     res.status(404).send("錯誤代號404，請輸入正確的網址");
//     const cors = require("cors");
//     app.use(cors());
// });
