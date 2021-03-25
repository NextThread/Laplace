import express from "express";
const router = express.Router();

import User from "../models/User.js";
import Room from "../models/Room.js";

import userRouter from "./api/user.js";
import roomRouter from "./api/room.js";
import codeRouter from "./api/code.js";
import fileRouter from "./api/file.js";

/*
import vpnRouter from "./api/vpn.js";

router.use("/vpn", vpnRouter);

*/

router.use("/user", userRouter);
router.use("/room", roomRouter);
router.use("/code", codeRouter);
router.use("/file", fileRouter);

router.get("/info", async (req, res) => {
	let users = await User.find({});
	let rooms = await Room.find({});

	res.json({
		"success": true,
		"response": {
			"users": users.length,
			"rooms": rooms.length
		}
	});
});

router.get("/version", async (req, res) => {
	res.json({
		"success": true,
		"version": 1.0
	});
});

export default router;