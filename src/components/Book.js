import PropTypes from 'prop-types';

function Book({ }) {
  const {
    id, title, author, category,
  } = book;
  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {title}
      </td>
      <td>
        {author}
      </td>
      <td>
        {category}
      </td>
    </tr>
  );
}

export default Book;