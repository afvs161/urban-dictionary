export default function SideBar() {
	return (
		<div
			className="col m4 card purple darken-2 dSidebar"
			style={{ padding: "0px 5px 10px" }}
		>
			<h4 className="uLogo">Urban Dictionary is written by you</h4>

			<a
				href="#"
				style={{ margin: "5px 15px" }}
				className="btn purple lighten-2"
			>
				twitter
			</a>
			<a
				href="#"
				style={{ margin: "5px 15px" }}
				className="btn purple lighten-2"
			>
				facebook
			</a>
			<a
				href="#"
				style={{ margin: "5px 15px" }}
				className="btn purple lighten-2"
			>
				help
			</a>
			<a
				href="#"
				style={{ margin: "5px 15px" }}
				className="btn purple lighten-2"
			>
				subscribe
			</a>

			<p style={{ textAlign: "center" }}>
				© 1999-{new Date().getFullYear()} Urban Dictionary ® ads help privacy
				terms of service dmca accessibility statement report a bug information
				collection notice data subject access request
			</p>
		</div>
	)
}
