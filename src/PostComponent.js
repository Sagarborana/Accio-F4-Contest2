import React, { useState } from "react";

const PostComponent = ({ e }) => {
  
  const [like, setLike] = useState(0);

  // console.log("key is",e.id)
  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <>
      <div style={{marginBottom:"20px"}} className="card border-secondary text-secondary bg-transparent mt-5 mb-10" key={e.id}>
        <img src={`https://picsum.photos/200?random=${e.id}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            User ID: <span>{e.id}</span>
          </h5>
          <p className="card-text">Title : {e.title}</p>
          <p className="card-text">Likes : {like}</p>
        </div>
        <div className="card-footer bg-transparent">
          <div className="d-grid gap-2">
            <button style={{cursor:"pointer", backgroundColor:"dodgerblue",color:"white", padding:"10px 15px", fontSize:"1rem", borderRadius:"10px"}} onClick={handleLike} className="btn btn-outline-secondary rounded-pill" type="button">
              Like Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComponent;
