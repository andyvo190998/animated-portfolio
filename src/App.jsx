import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Navbar, Tech, Works, Hero, StarsCanvas } from "./components";
import Education from "./components/Education";

const App = () => {
	console.log("App component rendered");
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Education />
				<Works />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
