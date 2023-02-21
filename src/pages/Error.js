import { Link } from "react-router-dom"

export default function Error() {
	return (
		<div>
			<h2>
				Page Not Found <br /> Code error <b>404</b>
			</h2>
			<Link to="/" className="btn purple lighten-2">
				Go to HomePage
			</Link>
		</div>
	)
}
