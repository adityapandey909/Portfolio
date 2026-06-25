/** @format */

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
	return (
		<footer className="border-t border-white/10 py-12">
			<div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-8">
				<h2 className="text-2xl font-bold">Aditya Pandey</h2>

				<p className="text-gray-400">Full Stack Developer</p>

				<div className="flex gap-6 text-2xl">
					<a
						href="https://github.com/adityapandey909"
						target="_blank"
						rel="noreferrer"
						className="transition hover:-translate-y-1 hover:text-white"
					>
						<FaGithub />
					</a>

					<a
						href="https://linkedin.com/in/adityapandeycontact"
						target="_blank"
						rel="noreferrer"
						className="transition hover:-translate-y-1 hover:text-blue-500"
					>
						<FaLinkedin />
					</a>

					<a
						href="mailto:adityapandeycontact@gmail.com"
						className="transition hover:-translate-y-1 hover:text-red-500"
					>
						<FaEnvelope />
					</a>
				</div>

				<p className="text-sm text-gray-500">
					© {new Date().getFullYear()} Aditya Pandey. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
