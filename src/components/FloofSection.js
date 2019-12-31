import React, { useState } from "react";
import FloofTile from "./FloofTile";

const FloofSection = props => {
  const [favoriteFloofId, setFavoriteFloofId] = useState(null)

  let floofs = props.floofs.map(floof => {

    const setFavoriteFloofIdClosure = () => {
      event.preventDefault()
      if (floof.id === favoriteFloofId) {
        setFavoriteFloofId(null)
      } else {
        setFavoriteFloofId(floof.id)
      }
    }

    let selectedStatus = false
    if (floof.id === favoriteFloofId) {
      selectedStatus = true
    }

    return(
      <FloofTile
        key={floof.id}
        floof={floof}
        selectedStatus={selectedStatus}
        setFavoriteFloofIdClosure={setFavoriteFloofIdClosure}
      />
    )
  });

  return (
    <div className="container">
      <h2>{`${props.floofType}Floofs`} </h2>
      {floofs}
    </div>
  );
};

export default FloofSection;
