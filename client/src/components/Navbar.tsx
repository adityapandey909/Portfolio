/** @format */

import { Moon, Sun } from "lucide-react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const navLinks = [
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Experience", href: "#experience" },
	{ name: "Contact", href: "#contact" },
];

type NavbarProps = {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("about");

	// Active section detection
	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-30% 0px -60% 0px",
				threshold: 0,
			},
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	// Close mobile menu on resize
	useEffect(() => {
		const closeMenu = () => setIsOpen(false);
		window.addEventListener("resize", closeMenu);
		return () => window.removeEventListener("resize", closeMenu);
	}, []);

	return (
		<header
			className="
				fixed
				top-0
				z-50
				w-full
				border-b
				border-zinc-200/80
				dark:border-white/10
				bg-white/80
				dark:bg-black/40
				backdrop-blur-xl
				transition-colors
				duration-300"
		>
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
				{/* Logo */}
				<a
					href="#top"
					className="cursor-pointer text-2xl font-bold text-zinc-900 dark:text-white transition-all duration-300 hover:text-blue-500"
				>
					Aditya
				</a>

				{/* Links */}
				<ul className="hidden items-center gap-8 text-sm font-medium md:flex">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className={`relative transition-colors duration-300 ${
									activeSection === link.href.slice(1)
										? "text-blue-500"
										: "text-zinc-800 dark:text-white hover:text-blue-500"
								}`}
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-3">
					{/* Theme Toggle */}
					<button
						onClick={() => setDarkMode(!darkMode)}
						className="rounded-full p-2 transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-white/10 :rotate-12"
						aria-label="Toggle theme"
					>
						{darkMode ? <Sun size={18} /> : <Moon size={18} />}
					</button>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
						aria-label={isOpen ? "Close menu" : "Open menu"}
					>
						{isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
					</button>
				</div>
			</nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25 }}
						className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
					>
						<div className="flex flex-col px-6 py-4">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className={`py-3 transition-colors ${
										activeSection === link.href.slice(1)
											? "text-blue-500"
											: "hover:text-blue-500"
									}`}
								>
									{link.name}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

export default Navbar;
