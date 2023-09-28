

import React from 'react'
import PropTypes from 'prop-types'


export default function NewsItem(props) {
  
let {title,description,image,url,author,publish}=props
  return (
    <div>
    <div className="card bg-dark text-light" style={{border:"2px solid white"}}  >
          <img src={image} className="card-img-top" alt="..."  />
          <div className="card-body"   >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}.....</p>
            <p className="card-text  "><small className="text-light">By {author} on {publish}</small></p>
            <a
              href={url}
              className="btn btn-danger"
            >
              Read More
            </a>
          </div>
        </div>
    </div>

/*rgb(49 52 52)
rgb(15 26 26)
#1e2126
*/
  )
}
