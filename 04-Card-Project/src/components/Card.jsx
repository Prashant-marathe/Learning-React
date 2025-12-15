import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = () => {
  return (
    <div className="card">
        <div className="top">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?20171005153412" alt="" />
          <button>Save <Bookmark size={10} /> </button>
        </div>

        <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Graphic Design</h2>
            <div className="center-bottom">
              <h4>Part-Time</h4>
              <h4>Flexible Schedule</h4>
            </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$150-220k</h3>
            <h5>Kochi, India</h5>
          </div>

          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card