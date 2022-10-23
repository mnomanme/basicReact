import Book from './Book';
import { data } from './books';
import './Book.css';

function App() {
	return (
		<section className="booklist">
			{data.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
}

export default App;
