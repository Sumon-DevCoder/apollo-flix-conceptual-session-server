"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
// persar
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// application route
// route 
app.get("/", (req, res) => {
    res.send("apollo is running...");
});
// global error handler
// route not found
