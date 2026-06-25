/** @format */

import { motion } from "framer-motion";
import { useState } from "react";
import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		try {
			const response = await fetch("http://localhost:8000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (data.success) {
				alert("Message sent successfully!");

				setFormData({
					name: "",
					email: "",
					message: "",
				});
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.error(error);
			alert("Something went wrong.");
		} finally {
			setLoading(false);
		}
	};
	return (
		<section id="contact" className="mx-auto max-w-7xl px-8 py-32">
			<div className="mb-20 text-center">
				<h2 className="text-5xl font-bold">Get In Touch</h2>

				<p className="mt-4 text-gray-400">
					Let's build something amazing together.
				</p>
			</div>

			<div className="grid gap-12 lg:grid-cols-2">
				{/* Left */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="space-y-6"
				>
					<a
						href="mailto:adityapandeycontact@gmail.com"
						className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10"
					>
						<FaEnvelope className="text-xl text-blue-400 transition-transform duration-300 group-hover:scale-125" />
						<span>adityapandeycontact@gmail.com</span>
					</a>

					<a
						href="https://linkedin.com/in/adityapandeycontact"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10"
					>
						<FaLinkedin className="text-xl text-blue-500 transition-transform duration-300 group-hover:scale-125" />
						<span>linkedin.com/in/adityapandeycontact</span>
					</a>

					<a
						href="https://github.com/adityapandey909"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10"
					>
						<FaGithub className="text-xl transition-transform duration-300 group-hover:scale-125" />
						<span>github.com/adityapandey909</span>
					</a>
					<div className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10">
						<FaMapMarkerAlt className="text-xl text-red-400 transition-transform duration-300 group-hover:scale-125" />
						<span>Raipur, India</span>
					</div>
				</motion.div>

				{/* Right */}
				<motion.form
					onSubmit={handleSubmit}
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
				>
					<h3 className="text-2xl font-bold">Send me a message</h3>

					<p className="mb-6 text-gray-400">
						I'll get back to you as soon as possible.
					</p>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your Name"
						required
						className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
					/>

					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your Email"
						required
						className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
					/>

					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						rows={5}
						placeholder="Your Message"
						required
						className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
					/>
					<button
						type="submit"
						disabled={loading}
						className="w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{loading ? "Sending..." : "Send Message"}
					</button>
				</motion.form>
			</div>
		</section>
	);
}

export default Contact;
