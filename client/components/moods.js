import React from 'react'
import {Link} from 'react-router-dom'

const Moods = () => (
  <div id="moods-container">
    <h1>it's up to you where you go from here...</h1>
    <div>
      <Link to="/urbein2unproductiv">
        <img
          id="moodOptions"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsclYaOoF4ixKUNjjy5N6r_vA9SlRUODwWYns8cHm8ekdTIICc"
        />
      </Link>
      <Link to="/urboredbutsame">
        <img
          id="moodOptions"
          src="https://static01.nyt.com/images/2019/02/03/opinion/sunday/03paul/03paul-articleLarge.jpg?quality=75"
        />
      </Link>
    </div>
  </div>
)

export default Moods
