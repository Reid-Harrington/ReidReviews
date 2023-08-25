import React from 'react'
const About = () => {

  const headerStyles = 
  {
    marginLeft: '20px',

    color : 'white',
  }
  const txtStyles = 
  {
    width: 'fit-content',
    marginLeft: '50px',
    color : 'white',
    lineHeight: '35px',
  }

  return (
    <div className='stuff'>
      <h1 style={headerStyles}>What is Reid Reviews?</h1>
      <p style={txtStyles}>Reid Reviews is a website I created from scratch where I combine my interests in video essays, programming, and creative writing. Built using React, Node.js, and MySQL, this platform lets me explore my love for video game and movie reviews. Even though I've never attempted this type of creative writing before, I saw it as a great way to learn about MySQL databases while expressing my thoughts about my favorite literature and media. Join me on this journey as I share my reviews and develop new skills along the way.</p>
      <h1 style={headerStyles}>Features : </h1>
      <p style={txtStyles}>On Reid Reviews, you can register an account and log in (all data is encrypted and stored in the MySQL database), share your own reviews (including images, descriptions, captions, and content), set a profile picture, explore a variety of reviews, sort them by categories, and stay tuned for more exciting features in the near future!</p>
    
    </div>
  )
}

export default About