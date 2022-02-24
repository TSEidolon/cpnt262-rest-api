
// Random Index function
const randomAPI = (length) => {
  return Math.floor(Math.random() * length );
}

// Document Qeury Selectors
// const monsterName = document.querySelector ('.monsterName');
// const monsterImagesContainer = document.queryCommandValue ('.monsterImagesContainer');
// const monsterDescription = document.querySelector ('.monsterDescription');
// const monsterURL = document.querySelector ('.monsterURL');
const card = document.querySelector ('.card');
const submitBTN = document.querySelector ('.submitBTN')

 // API Async Function
 const BOTWData = async () => {
  try {
    url = 'https://botw-compendium.herokuapp.com/api/v2';
    const response = await fetch (url);
    console.log (url);
      if (!response.ok) {
        throw new Error ("Could not find any monsters in Hyrule" + response.message);
      }
    
    const data = await response.json ();
    console.log (data.data.monsters);

    const monsterData = data.data.monsters[randomAPI(data.data.monsters.length)];
    console.log ('Collecting monster data....');
    console.log (monsterData);


    const output = `
        <h1>${monsterData.name}</h1>
        <img src="${monsterData.image}" alt="Image of ${monsterData.name}">
        <p> ${monsterData.description} </p>
        <p> <a href="https://botw-compendium.herokuapp.com/api/v2/entry/${monsterData.id}" target="_blank">Click for raw data</a> </p>
      `;
    card.innerHTML = output;
    
    
  } catch (err) {
    console.log ("Monster data error. " + err )
  }
  // console.log (BOTWData());
}



// Button Event Handler
submitBTN.addEventListener ('click', BOTWData);