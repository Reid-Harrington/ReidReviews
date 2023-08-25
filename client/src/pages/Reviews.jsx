import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

import "../reviews.scss"



const Reviews = () => {
  const [posts, setPosts] = useState([])
  
  const [response, setResponse] = useState(Boolean)

  const cat = useLocation().search;
  const navigate  = useNavigate()
  useEffect(()=>{
    const fetchData = async () =>
    {
      try
      {
        const res = await axios.get(`https://red-relieved-slug.cyclic.cloud/api/posts${cat}`)
        setPosts(res.data)
        setResponse(true)
      } catch(err)
      {
        setResponse(false)
        console.log(err)
      }
    }
    fetchData();
  }, [cat])
  


  const getText = (html) =>
  {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }




  return (
    
    <div className='Reviews'>    
      <div className="titlewrap">
        <h1>Reviews</h1>
        <p>Sort by: </p>
        <button onClick={() => navigate("/Reviews/?cat=VideoGames")}>Video Games</button>
        <button onClick={() => navigate("/Reviews/?cat=Movies")}>Movies</button>
        <button onClick={() => navigate("/Reviews/?cat=Tv")}>Tv shows</button>
        <button onClick={() => navigate("/Reviews/?cat=Comics")}>Comics</button>
      
      </div>
      <div className="loading">
      {response === false ? (
  <b style={{ fontSize: "30px" }}>Awaiting response from api. Please allow a moment...</b>
) : null}

      </div>
      <div className="posts">
        <div className="grid">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
             <img src={`${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>

        ))}
        </div>
      </div>
    </div>
    
  )
}

export default Reviews


/*/ CODE FOR CATEGORIES
<Link className='link' to="/?cat=Movies">
            <h6>Movies</h6>
          </Link>
          <Link className='link' to="/?cat=TV">
            <h6>TV Shows</h6>
          </Link>
          <Link className='link' to="/?cat=VideoGames">
            <h6>Video Games</h6>
          </Link>
          <Link className='link' to="/?cat=Comics">
            <h6>Comics</h6>
          </Link>


          /*/