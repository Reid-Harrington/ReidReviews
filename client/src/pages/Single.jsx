import React, { useContext, useEffect, useState } from 'react'
import Edit from "../img/edit.png" 
import Delete from "../img/delete.png" 
import { Link, useLocation, useNavigate } from 'react-router-dom'
import moment from "moment";
import { AuthContext } from '../context/authContext';
import axios from 'axios';

import "../single.scss"

const Single = () => {
  
  const [post, setPost] = useState([])

  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2]
  const {currentUser} = useContext(AuthContext)


  useEffect(()=>{
    const fetchData = async () =>
    {
      try
      {
        const res = await axios.get(`https://red-relieved-slug.cyclic.cloud/api/posts/${postId}`)
        setPost(res.data)
      } catch(err)
      {
        console.log(err)
      }
    }
    fetchData();
  }, [postId])  


  const handleDelete  = async () =>
  {
    try
    {
      await axios.delete(`https://red-relieved-slug.cyclic.cloud/api/posts/${postId}` , { withCredentials: true })
      navigate("/")
    } catch(err)
    {
      console.log(err)
    }
  }
  const getText = (html) =>
  {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
<div className='single'>
  <div className="content">
    <div className="image-container">
      <img src={`${post.img}`} alt={""} />
      <div className="txtContent">
        <h1>{post.title}</h1>
        <p className='caption'>{getText(post.caption)}</p>
        <div className='content'>
        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      </div>
    </div>
    <div className="user">
      {post?.userImg && <img src={post.userImg} alt="" />}
      <div className="info">
        <span>{post.username}</span>
        <p>Posted {moment(post.date).fromNow()}</p>
      </div>
      {currentUser && currentUser.username === post.username && (
        <div className="edit">
          <Link to={`/write?edit=2`} state={post}>
            <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" onClick={handleDelete} />
        </div>
      )}
    </div>
  </div>
</div>
  )
}

export default Single
//<p>{getText(post.desc)}</p>
//          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
