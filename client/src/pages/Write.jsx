import React, {useState} from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

import "../write.scss"


const Write = () => {

  const state = useLocation().state
  const [title, setTitle] = useState(state?.title || '');
  const [desc, setDesc] = useState(state?.desc ||'');
  const [content, setContent] = useState(state?.content || '');
  const [caption, setCaption] = useState(state?.caption || '');

  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat ||'');

  const navigate = useNavigate();
  const upload = async () => {
    try {
      const res = await axios.post("https://red-relieved-slug.cyclic.cloud/api/upload", file,  { withCredentials: true });
      return res.data
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      state
        ? await axios.put(
          `https://red-relieved-slug.cyclic.cloud/api/posts/${state.id}`,
          {
            title,
            desc: desc,
            content: content,
            cat,
            img: file,
            caption:caption
          },
          { withCredentials: true }
        ): await axios.post(`https://red-relieved-slug.cyclic.cloud/api/posts/`, {
            title,
            desc: desc,
            content: content,
            cat,
            img: file,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            caption:caption
          },
          { withCredentials: true }
          );
        navigate("/")
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <input type="text" value={desc} placeholder='Description' onChange={e=>setDesc(e.target.value)}/>
        <input type="text" defaultValue={caption} placeholder='ex:"Reviewed on: console x" ' onChange={e=>setCaption(e.target.value)}/>

        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={content} onChange={setContent} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <b className="file" htmlFor="file" >Upload Image (paste link to image) :</b>
          <input style={{width:"200px"}} type="text" value={file} id='file' name='' onChange={e=>setFile(e.target.value)} placeholder='img link'/>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" checked = {cat === "Movies"} name='cat' value="Movies" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="Movies">Movies</label>
          </div>
          <div className="cat">
          <input type="radio" checked = {cat === "Tv"} name='cat' value="Tv" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="Tv">Tv Shows</label>
          </div>
          <div className="cat">
          <input type="radio" checked = {cat === "VideoGames"} name='cat' value="VideoGames" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="VideoGames">Video Games</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' checked = {cat === "Comics"} value="Comics" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="Comics">Comics</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write