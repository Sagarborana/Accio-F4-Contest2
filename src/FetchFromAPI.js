import React, { useState, useEffect } from "react";
import PostComponent from "./PostComponent";
import './App.css'
// import { uuid } from 'uuidv4';
// import { v4 as uuidv4 } from 'uuid';

const FetchFromAPI = () => {
  
  const [user, setUser] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
      setUser(await response.json());
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handlePage = () => {
    setPage(page + 1);
    console.log(setPage);
  };

  const filteredData = user.filter((data) => {
    return data.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <div className="text-center">
          <div className='search-group'>
        <input type="text" id="a" placeholder="Search here" value={searchText} onChange={handleSearch}></input>
        <button>Search</button>
    </div>
        </div>

        <div>
          {filteredData.map((data) => {
            return <PostComponent e={data} key={data.id} />;
          })}
        </div>
        <div className="text-center">
        <button onClick={handlePage} style={{cursor:"pointer", backgroundColor:"green",color:"white", padding:"10px 15px", fontSize:"1rem", borderRadius:"10px"}} className="btn btn-light rounded-pill" >
          Load More....
        </button>
      </div>
      </div>

      
    </>
  );
};

export default FetchFromAPI;
