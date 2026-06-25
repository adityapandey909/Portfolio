/** @format */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(
	cors({
		origin: ["http://localhost:5173", "https://YOUR-NETLIFY-SITE.netlify.app"],
	}),
);
app.use(express.json());

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "Portfolio API is running 🚀",
	});
});

app.post("/api/contact", async (req, res) => {
	try {
		const { name, email, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				message: "All fields are required.",
			});
		}

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			replyTo: email,
			subject: `Portfolio Contact - ${name}`,
			html: `
                <h2>New Portfolio Contact</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `,
		});

		res.json({
			success: true,
			message: "Message sent successfully!",
		});
	} catch (error) {
		console.error(error);

		res.status(500).json({
			success: false,
			message: "Failed to send message.",
		});
	}
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
