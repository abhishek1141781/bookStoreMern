import BookSingleCard from './BookSingleCard';
import PropTypes from 'prop-types';

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the structure of each book object
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishYear: PropTypes.number.isRequired,
      // Add other properties as needed
    })
  ).isRequired,
};


export default BooksCard;
