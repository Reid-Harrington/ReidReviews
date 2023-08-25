import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios'


const Profile = () => {

    const {currentUser, setCurrentUser} = useContext(AuthContext)
    //console.log(currentUser.img)
    const [userLink, setUserLink] = useState("")
    var empty = false
    const handleChange = e =>
    {
        setUserLink(e.target.value)
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        if(userLink != null)
        {
            try {
                await axios.post(
                    `https://red-relieved-slug.cyclic.cloud/api/users/pfp`,
                    {
                        uimg: userLink,
                        id: currentUser.id
                    },
                    { withCredentials: true }
                )
                const updatedUser = { ...currentUser, img: userLink };
                localStorage.setItem('user', JSON.stringify(updatedUser));
            } catch (err) {
                console.log(err);
            }
        }

    }
   return (
    <div className="file">
        <h1>Current User : {currentUser.username}</h1>
        {currentUser? null : null}
        <label className="file" htmlFor="file" >Input Image Link for Profile pic</label>
        <input type="text" id='text' name='' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Profile