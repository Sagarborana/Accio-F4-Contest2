// import { useState,useEffect} from 'react';
// import './App.css';
// import PostComponent from './PostComponent';
// import SearchComponent from './SearchComponent';


// function App() {

  
//   const [page,setPage] = useState(1);

//   const fetchPosts = async () =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
//     const data = await res.json();
//     setPosts(data);
//     // console.log(data)
    
//   }
//   const [posts, setPosts] = useState([]);
  
//   useEffect(fetchPosts(),[])
//   return (
//     <>
//     <SearchComponent/>
//     {posts.length > 0 ? posts.map(post => <PostComponent id={post.id} />) : <h1>Data is Loading...</h1>}
//     </>
//   )
// }

// export default App;

import React from 'react'
import './App.css';
import FetchFromAPI from "./FetchFromAPI";

const App = () => {
  return (
    <div className='App'>
    
      <FetchFromAPI/>
    </div>
  )
}

export default App
