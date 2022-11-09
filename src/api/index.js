import axios from 'axios';
const url = 'https://localhost:8080/posts';

export const fetchPosts = () => axios.get(url);
