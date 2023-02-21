import { useState } from "react"

export default function Search({ searc, makeShuffle }) {
	const [search, setSearch] = useState("")

	function changeSearch(e) {
		setSearch(e.target.value)
	}

	function sendSearch(e) {
		e.preventDefault()
		searc(search)
		console.log(search)
	}

	return (
		<form
			onSubmit={sendSearch}
			className="input-field col s12 card  purple darken-2 dSearch"
			style={{ padding: "0px 5px" }}
		>
			<i className="material-icons prefix">search</i>
			<input
				type="text"
				className="validate"
				placeholder="Search"
				onChange={changeSearch}
				value={search}
			/>
			<i
				onClick={makeShuffle}
				className="material-icons prefix"
				style={{ position: "absolute", right: "0", cursor: "pointer" }}
			>
				shuffle
			</i>
		</form>
	)
}
