// import React from 'react'

function Movie(props) {
  console.log(props)
    return (
    <div className="movie">
        <h2>{JSON.stringify(props.extra)}</h2>
        <h2>{props.data.title}</h2>
        <img
            src={props.data.poster}
            alt="movie poster"
        />
        <p>
            {props.data.summary}
        </p>
    </div>
  )
}

export default Movie