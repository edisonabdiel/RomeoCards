export { default as Navbar } from './Navbar';
export { default as SearchBar } from './SearchBar';
export { default as UserCard } from './userCard/UserCard';

// afunction that returns a random bumber between 0 and 30
export const getRandomNumber = (num) => Math.floor(Math.random() * 30);

console.log(getRandomNumber);