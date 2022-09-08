import React, { useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({p}) {

  const[clicked, setClicked] = useState(false)

  function handleCardClick(event) {
    console.log(clicked)
    setClicked(!clicked)
    // console.log(event)
  }

  return (
    <Card>
      <div onClick={handleCardClick}>
        <div className="image">
          <img src={clicked ? p.sprites.back : p.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{p.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {p.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
