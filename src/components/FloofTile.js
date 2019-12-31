import React from "react";

const FloofTile = props => {
  let details = "";
  if (props.floof.breed) {
    details = props.floof.breed;
  } else {
    details = props.floof.personality;
  }

  let className = "tile"

  if (props.selectedStatus) {
    className += " bestest"
  }

  return (
    <div className={className} onClick={props.setFavoriteFloofIdClosure}>
      <h3>
        {props.floof.name} ({props.floof.human})
      </h3>
      <p>
        <i> {details} </i>
      </p>
      <img src={props.floof.image} />
    </div>
  );
};

export default FloofTile;
