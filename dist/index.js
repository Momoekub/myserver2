"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const path = require("path");
const app = Express();
const mongoUri = "mongodb+srv://momoe:1234@test.9fdeebo.mongodb.net/?retryWrites=true&w=majority&appName=test  ";
mongoose_1.default.connect(mongoUri)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Error connecting to MongoDB", err);
});
app.use(Express.json());
app.use((0, cors_1.default)());
app.use(Express.static(path.join(__dirname, 'public')));
const port = 3000;
app.use("/api", UserRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
