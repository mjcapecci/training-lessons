const getCharacters = async () => {
  const characters = document.querySelector('.characters');

  const data = await (
    await fetch('https://swapi.dev/api/people?page=3')
  ).json();
  data.results.forEach((result) => {
    console.log(result);
    const newCharacter = document.createElement('p');
    const attributeList = document.createElement('ul');

    const heightBullet = document.createElement('li');
    heightBullet.innerText = 'Height: ' + result.height;

    attributeList.appendChild(heightBullet);

    newCharacter.innerText = result.name;
    newCharacter.appendChild(attributeList);
    characters.appendChild(newCharacter);
  });
};

getCharacters();
