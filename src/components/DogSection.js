import React from 'react';

import DogTile from './DogTile';

const DogSection = props => {

  const dogBoxes = props.dogsInfo.map((dogObject) => {
    return(
      <DogTile
        key={dogObject.id}
        dogData={dogObject}
      />
    )
  })

  return(
    <div className="container">
      <h2>Dog Section</h2>
      {dogBoxes}
    </div>
  )
}

export default DogSection
