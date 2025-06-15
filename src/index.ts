import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 8080;
app.get("/uptime", (req, res) => {
    const uptime = process.uptime();
    res.json({
        uptime: uptime,
        message: "Server is running",
        timestamp: new Date().toISOString(),
    });
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    }
);