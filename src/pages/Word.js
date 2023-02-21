import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Loader from "../components/Loader"

export default function Word() {
	const { id } = useParams()
	const goBack = useNavigate()
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "09e595406bmshc31c8fa424ae61bp13992ajsn14ccd98a2bdf",
			"X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
		},
	}

	useEffect(() => {
		setLoading(true)
		fetch(
			`https://mashape-community-urban-dictionary.p.rapidapi.com/define?defid=${id}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				setData(response.list[0])
				setLoading(false)
			})
			.catch((err) => console.error(err))
	}, [])

	function getDate(x) {
		function getMonth(y) {
			switch (y) {
				case "01":
					return "January"
					break
				case "02":
					return "February"
					break
				case "03":
					return "March"
					break
				case "04":
					return "April"
					break
				case "05":
					return "May"
					break
				case "06":
					return "June"
					break
				case "07":
					return "July"
					break
				case "08":
					return "August"
					break
				case "09":
					return "September"
					break
				case "10":
					return "October" + y
					break
				case "11":
					return "November"
					break
				case "12":
					return "December"
					break
				default:
					return "Month"
					break
			}
		}
		return `${getMonth(x.slice(5, 7))} ${x.slice(8, 10)}, ${x.slice(0, 4)}`
	}

	return (
		<div>
			<div
				className="card purple darken-2"
				style={{ padding: "0px 15px 10px" }}
			>
				{loading ? (
					<Loader />
				) : data ? (
					<>
						<h3 style={{textTransform: "uppercase"}}>{data.word}</h3>

						<p style={{ fontSize: "1.3rem" }}>{data.definition}</p>

						<p style={{ fontSize: "1.2rem" }}>{data.example}</p>

						<span>
							<h6>
								by <Link to={`/author/${data.author}`}>{data.author}</Link>{" "}
								{getDate(data.written_on)}
							</h6>
						</span>

						<a href={data.permalink} target="_blank">View in original source</a>
					</>
				) : (
					<h2>Word not found</h2>
				)}
			</div>
			<button className="btn purple lighten-2" onClick={() => goBack(-1)}>
				Go Back
			</button>
		</div>
	)
}
