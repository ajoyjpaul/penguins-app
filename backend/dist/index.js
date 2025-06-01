"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_framework_1 = require("@google-cloud/functions-framework");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/api/health", (req, res) => {
    res.send("GCF backend is healthy!");
});
// Export the app as a Google Cloud Function (temp)
(0, functions_framework_1.http)("penguinsApi", app);
