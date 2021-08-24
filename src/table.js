export const generateRandomNumber = (range = 10000) => Math.floor(Math.random() * range);

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const filterBooksByCategory = (books, param) => (
  books.filter(({ category }) => category === param)
);

export const defaultBooks = [
  {
    id: generateRandomNumber(),
    title: 'A GAME OF THRONES',
    author: 'George R. R. Martin',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    id: generateRandomNumber(),
    title: 'BORN A CRIME',
    author: 'Trevor Noah',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    id: generateRandomNumber(),
    title: 'AN ARMY AT DAWN',
    author: 'Rick Atkinson',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    id: generateRandomNumber(),
    title: 'THE HUNTING OF HILL HOUSE',
    author: 'Shirley Jackson',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    id: generateRandomNumber(),
    title: 'THE SNOWY DATE',
    author: 'Ezra Jack',
    category: categories[generateRandomNumber(categories.length)],
  },
];
