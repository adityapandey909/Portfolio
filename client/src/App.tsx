/** @format */

import GitHub from "./sections/GitHubSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState } from "react";

function App() {
	const [darkMode, setDarkMode] = useState(() => {
		return localStorage.getItem("theme") !== "light";
	});

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<LoadingScreen isLoading={isLoading} />
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<GitHub />
			<Experience />
			<Contact />
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
