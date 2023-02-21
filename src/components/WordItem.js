import { Link } from "react-router-dom"

export default function WordItem({
	author,
	definition,
	word,
	defid,
}) {
	function mySlice(a) {
		if (a.length > 50) {
			return `${a.slice(0, 50)}...`
		} else {
			return a
		}
	}

	return (
		<div className="card purple darken-2" style={{ padding: "0px 15px 10px" }}>
			<Link to={`/word/${defid}`} style={{ fontWeight: "600", fontSize: "2.75rem" }}>
				{word}
			</Link>
			<p style={{ fontSize: "1.3rem" }}>{mySlice(definition)}</p>
			<span>Author: {author}</span>
		</div>
	)
}
