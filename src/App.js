import patternsvg from "./images/pattern-divider-desktop.svg";
import mobilepatternsvg from "./images/pattern-divider-mobile.svg";

import dicesvg from "./images/icon-dice.svg";
import { useState } from "react";

function App() {
	const url = "https://api.adviceslip.com/advice";

	const [advice, setAdvice] = useState("Click the button for some advice");
	const [id, setId] = useState("");
	const [error, setError] = useState(null);
	const [isLoading, setIsloading] = useState(null);

	const handelonClick = async () => {
		setIsloading(true);
		setId("...");
		setError(null);
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}
			const req = await response.json();
			setAdvice(req.slip.advice);
			setId(`Advice #${req.slip.id}`);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsloading(false);
		}
	};

	let content = advice;

	if (error) {
		content = `${error}`;
	}
	if (!error) {
		content = `${advice}`;
	}
	if (isLoading) {
		content = `Loading...`;
	}

	return (
		<>
			<div className="bg-dark-blue flex flex-col h-screen justify-center items-center">
				<div className="bg-dark-grayish-blue md:w-1/3 md:h-[18rem] w-[20rem] flex flex-col text-center items-center  rounded-[25px] h-[24rem]">
					<p className="text-neon-green font-manrope mt-[30px] mb-[30px]">
						{id}
					</p>
					<p className="text-light-cyan font-manrope text-[26px] md:px-[2rem] md:h-[6rem] h-[10rem] md:mb-[40px] flex items-center  text-center">
						{content}
					</p>
					<img srcSet={`${mobilepatternsvg} 768w,${patternsvg}`} src={patternsvg} alt="divider"/>
				</div>
				<div
					className="bg-neon-green absolute md:top-[27.8rem] top-[30.5rem] rounded-full h-12 w-12 flex flex-col items-center justify-center hover:shadow-neon-green hover:drop-shadow-circle"
					onClick={handelonClick}
				>
					<img src={dicesvg} alt="" className="" />
				</div>
			</div>
		</>
	);
}

export default App;
