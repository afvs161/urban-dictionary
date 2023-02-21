import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Search from "./components/Search"
import SideBar from "./components/SideBar"
import WordList from "./components/WordList"
import Error from "./pages/Error"
import Word from "./pages/Word"

export default function App() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [shuffle, setShuffle] = useState(true)

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "09e595406bmshc31c8fa424ae61bp13992ajsn14ccd98a2bdf",
			"X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
		},
	}

	function randomWord() {
		const words = [
			"yo",
			"dude",
			"what's up",
			"yeah",
			"yas",
			"probably",
			"hey",
			"crowd",
			"human",
			"creature",
			"earthling",
		]
		return words[Math.floor(Math.random() * words.length)]
	}

	useEffect(() => {
		setLoading(true)
		fetch(
			`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${randomWord()}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				setData(response.list)
				setLoading(false)
			})
			.catch((err) => console.error(err))
	}, [shuffle])

	function search(e) {
		setLoading(true)
		fetch(
			`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${e}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				setData(response.list)
				setLoading(false)
			})
			.catch((err) => console.error(err))
	}

	function makeShuffle() {
		setShuffle(!shuffle)
	}

	return (
		<BrowserRouter>
			<div className="dictionary purple darken-4">
				<Header />
				<div className="container row">
					<Search searc={search} makeShuffle={makeShuffle} />

					<div
						className="col m8"
						style={{ fontWeight: "700", fontStyle: "italic" }}
					>
						<Routes>
							<Route
								path="/"
								element={<WordList loading={loading} words={data} />}
							/>
							<Route path="/word/:id" element={<Word />} />

							<Route path="*" element={<Error />} />
						</Routes>
					</div>

					<SideBar />
				</div>
			</div>
		</BrowserRouter>
	)
}
