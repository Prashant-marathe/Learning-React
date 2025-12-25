import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank">
            <div className="overflow-hidden h-40 w-44 rounded-2xl">
              <img
                src={props.elem.download_url}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h2 className="font-medium text-gray-400 text-lg">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card