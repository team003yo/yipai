// 安裝expressSession套件 https://www.npmjs.com/package/express-session
const expressSession = require("express-session");
// 安裝session-file-store套件 https://www.npmjs.com/package/session-file-store
const FileStore = require("session-file-store")(expressSession);
const path = require("path");
const { checkLogin } = require("./middlewares/authMiddleware");

const express = require("express");
const app = express();

require("dotenv").config();
const pool = require("./utils/db");

// 連線網址 http://localhost:3001
// 允許跨源存取,預設是全部開放,也可以做部分限制，參考 npm cors 的文件
const cors = require("cors");
app.use(
    cors({
        // 必須把 credentails 設定成 true，一定要設定 origin (來源)
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);
// 如果要讓 express 認得 json 資料,需要加上這個中間件
app.use(express.json());

app.use(
    expressSession({
        // 告訴 express-session session 要存sessions資料夾
        store: new FileStore({
            path: path.join(__dirname, "..", "sessions"),
        }),
        secret: process.env.SESSION_SECRET,
        // true: 即使 session 沒有改變也重新儲存一次
        resave: false,
        // true: 還沒有正式初始化的 session 也真的存起來
        saveUninitialized: false,
    })
);

// middleware => pipeline pattern

// 處理使用者註冊時上傳的圖片網址
// app.use('/public', express.static('./public'));

// 首頁
app.get("/", async (req, res, next) => {
    console.log("這裡是藝拍首頁,顯示首頁資料");
    let [data] = await pool.query(
        "SELECT * FROM product JOIN users ON product.id = users.users_id ORDER BY RAND() LIMIT 1"
    );
    res.json(data);
});
// 購物車
app.get("/cart", async (req, res, next) => {
    console.log("這裡是 /cart");
    let [data] = await pool.query(
        "SELECT * FROM product JOIN user_order ON product.id = user_order.product_id ORDER BY RAND() LIMIT 1"
    );
    res.json(data);
});
// 商品頁
app.get("/product", async (req, res, next) => {
    console.log("這裡是 /product");
    let [data] = await pool.query("SELECT * FROM product");
    res.json(data);
});
// 商品頁細節
app.get("/product/:productId", async (req, res, next) => {
    console.log("/product/:productId => ", req.params.productId);
    let [data] = await pool.query("SELECT * FROM product WHERE id=? ", [
        req.params.productId,
    ]);
    res.json(data);
});
// 所有使用者資料
app.get("/users", async (req, res, next) => {
    console.log("這裡是 /users");
    let [data] = await pool.query("SELECT * FROM users");
    res.json(data);
});
//
app.get("/news/:newsId", async (req, res, next) => {
    console.log("/news/:newsId => ", req.params.newsId);
    let [data] = await pool.query("SELECT * FROM news WHERE news_id=? ", [
        req.params.newsId,
    ]);
    res.json(data);
});
// 會員部分路由
app.get("/api", checkLogin, async (req, res, next) => {
    // if(req.session.member){
    console.log(req.session.member);
    let [data] = await pool.query("SELECT * FROM news WHERE users_id=? ", [
        req.session.member.id,
    ]);
    res.json(data);
});
// 授權路由
const authRouter = require("./routers/authRouter");
app.use("/api/auth", authRouter);

// 會員登入路由
const memberRouter = require("./routers/memberRouter");
app.use("/api/members", memberRouter);

// 會員資料檢視
app.get("/users/:usersId", async (req, res, next) => {
    console.log("/users/:usersId => ", req.params.usersId);
    let [data] = await pool.query("SELECT * FROM users WHERE users_id=? ", [
        req.params.usersId,
    ]);
    res.json(data);
});
// 更改會員資料
app.put("/users/:usersId", async (req, res, next) => {
    console.log("/users/:usersId TO upload ", req.params.usersId);
    let [data] = await pool.query(
        `UPDATE users SET users_name = ? , users_account = ? , users_email = ? ,users_phone = ? WHERE users_id = ?`,
        [
            req.body.username,
            req.body.account,
            req.body.email,
            req.body.phone,
            req.body.usersId,
        ]
    );
    console.log(req.body);
    res.json(data);
});

// 展覽消息
app.get("/news", async (req, res, next) => {
    console.log("這裡是 /news");
    let [data] = await pool.query("SELECT * FROM news");
    res.json(data);
});
app.get("/news/:newsId", async (req, res, next) => {
    console.log("/news/:newsId => ", req.params.newsId);
    let [data] = await pool.query("SELECT * FROM news WHERE news_id=? ", [
        req.params.newsId,
    ]);
    res.json(data);
});
// 空間
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
// 藝術家頁面
app.get("/artist", async (req, res, next) => {
    console.log("這裡是 /artist");
    let [data] = await pool.query(
        "SELECT * FROM users WHERE users_valid_role=1"
    );
    res.json(data);
});
app.get("/artist/:artistId", async (req, res, next) => {
    console.log("/artist/:artistId => ", req.params.artistId);
    let [data] = await pool.query(
        "SELECT * FROM users WHERE users_valid_role=1 AND users_id=? ",
        [req.params.artistId]
    );
    res.json(data);
});

app.use((req, res, next) => {
    console.log("出現404！");
    res.status(404).send("錯誤代號404，請輸入正確的網址");
    const cors = require("cors");
    app.use(cors());
});

app.listen(3001, () => {
    console.log("Server running at port 3001");
});
