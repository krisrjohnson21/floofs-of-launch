import React from 'react'

const DogTile = props => {
  let shameStatus;
  let { dogData } = props

  if (props.dogData.human === "Nick") {
    shameStatus =
    <div className="shame">
      <i className="fa fa-bell"></i>
      <p>SHAAAAAME!!!</p>
    </div>
  }

  return(
    <div className="tile">
      <h4>Name: {dogData.name}</h4>
      <p>Breed: {dogData.breed}</p>
      <p>Human: {dogData.human}</p>
      {shameStatus}
      <img src={dogData.image} />
    </div>
  )
}

export default DogTile
