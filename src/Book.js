const Book = ({ img, title, author }) => {
	const handleClick = (e) => {
		console.log(e);
		console.log(e.target);
		alert('Hello World!');
	};

	const complexExample = (author) => {
		console.log(author);
	};

	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt="images" />
			<h2 onClick={() => console.log(title)}>{title}</h2>
			<h5>{author}</h5>
			<button type="button" onClick={handleClick}>
				Reference Example
			</button>
			<button type="button" onClick={() => complexExample(author)}>
				More Complex Example
			</button>
		</article>
	);
};

export default Book;
