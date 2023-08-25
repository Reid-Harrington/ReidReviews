import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import logo from '../img/Logo.png'

import "../home.scss"
const home = () => {
  const [posts, setPosts] = useState([])

  const [response, setResponse] = useState(Boolean)

  const cat = useLocation().search;

  useEffect(()=>{
    const maxPosts = 3;
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
  }, [])
  
  
  const getText = (html) =>
  {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }




  return (
      <div className='home'>
        <h1>Welcome to Reid Reviews (ver 1.5.4)</h1>
        <h2>Here to answer everyone's question: "...But what did {<i>Reid</i>} think?"</h2>
        <h3>Check out the 'About' page for more details. All reviews will contain spoilers</h3>
        <div className='content-wrapper'>
          <div className='image-section'>
            <img className='image' src={logo} alt='Image' />
          </div>
        </div>
        <h1>Check out some reviews</h1>
        <p>check out more on the 'review' page</p>
        {response === false ? (
  <b style={{ fontSize: "30px" }}>Awaiting response from api. Please allow a moment...</b>
) : null}
        <div className="posts">
        <div className="grid">
        {posts.slice(0, 3).map(post=>(
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
    );
  
}

export default home