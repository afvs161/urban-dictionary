import Loader from "./Loader";
import WordItem from "./WordItem";

export default function WordList({ words, loading }) {
	return (
		<div>
			{loading ? (
				<Loader />
			) : words.length ? (
				words.map((word) => {
					return <WordItem key={word.defid} {...word} />
				})
			) : (
				<h2>No words found</h2>
			)}
		</div>
	)
}
