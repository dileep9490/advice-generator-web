import patternsvg from "./images/pattern-divider-desktop.svg";
import dicesvg from "./images/icon-dice.svg";
import {useState,useEffect} from "react";

function App() {
	const url = "https://api.adviceslip.com/advice"

	const [advice, setAdvice] = useState("Click the button for some advice")
	const [id, setId] = useState("")
	const [error, setError] = useState(null)
	const [isLoading, setIsloading] = useState(null)

	useEffect(()=>{
		console.log("Rendered")
	},[advice,isLoading,error,id])

	const handelonClick = async () => {
		try {
			const response = await fetch(url)

			if (!response.ok) {
				throw new Error("Something went wrong")
			}

			const req = await response.json()
			console.log(req)

			setIsloading(false)
			setAdvice(req.slip.advice)
			setId(`Advice #${req.slip.id}`)
		} catch (error) {
			setError(error.message)
			setIsloading(false)
		}
	}

	if(error){
setAdvice(error)
	}
	if(isLoading){
		setAdvice("is Loading...")
	}

	return (
		<>
			<div className="bg-dark-blue flex flex-col h-screen justify-center items-center">
				<div className="bg-dark-grayish-blue w-1/3 h-[18rem] flex flex-col text-center items-center  rounded-[25px]">
					<p className="text-neon-green font-manrope mt-[30px] mb-[20px]">
						{id}
					</p>
					<p className="text-light-cyan font-manrope text-[26px] px-[1rem] mb-[30px]  text-center">
						{advice}
					</p>
					<img src={patternsvg} alt="divider" className="" />
				</div>
				<div
					className="bg-neon-green absolute top-[30rem] rounded-full h-12 w-12 flex flex-col items-center justify-center  shadow-neon-green"
					onClick={handelonClick}
				>
					<img src={dicesvg} alt="" className="" />
				</div>
			</div>
		</>
	);
}

export default App;
