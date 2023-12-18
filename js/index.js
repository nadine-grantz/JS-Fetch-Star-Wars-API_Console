console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people");
  console.log(response);
  const data = await response.json();
  console.log("data:", data);

  //Alle Namen vom Object ausgeben
  const characterNames = data.results.map(
    (characterName) => characterName.name
  );
  console.log("Character Names:", characterNames);

  //Augenfaarbe von R2D2 finden
  const R2D2 = data.results.find(
    (character /*parameter kann frei gewählt werden*/) =>
      character.name /*hier steht die Bedingung*/ === "R2-D2"
  );
  console.log(R2D2.eye_color);
}

fetchData();
