"use strict";
const express = require("express");
const app = express();
app.get("api/ping", (_req, res) => {
    res.send("pong");
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
