import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState(" ")
  const [frontImageUrl, setFrontImageUrl] = useState(" ")
  const [backImageUrl, setBackImageUrl] = useState(" ")

  function handleSubmit(e) {
    e.preventDefault()
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontImageUrl,
        back: backImageUrl
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
    .then(r => r.json())
    .then(data => onAddPokemon(data))
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e) => setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" value={name} />
          <Form.Input onChange={(e) => setHp(e.target.value)} fluid label="hp" placeholder="hp" name="hp" value={hp} />
          <Form.Input
            onChange={(e) => setFrontImageUrl(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImageUrl}
          />
          <Form.Input
            onChange={(e) => setBackImageUrl(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImageUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
