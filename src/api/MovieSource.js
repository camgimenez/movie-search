//http://www.omdbapi.com/?i=tt3896198&apikey=5d76f80
 import axios from 'axios';

 export default axios.create({
     baseURL: 'http://www.omdbapi.com/'
 })