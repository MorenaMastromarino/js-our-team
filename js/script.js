const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  } 
 
];

const teamContainer = document.querySelector('.team-container');


createContent();

//funzione che mi stampa il contenuto in html
function createContent (){

  teamContainer.innerHTML = '';

  for (let member of team){  
    // creazione team-card, card-image, card-text
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
   
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
  
    const cardText = document.createElement('div');
    cardText.className = 'card-text';
  
    //aggiungo contenuto a card-image e card-text  
    const memberName = member.name;
    const memberRole = member.role;
    const memberPhoto = member.photo;
  
    cardImage.innerHTML = 
    `
      <img src="img/${memberPhoto}" alt="${memberName}"/>
    `;
  
    cardText.innerHTML = 
    `
      <h3>${memberName}</h3>
      <p>${memberRole}</p>
    `;
     
    //append
    teamCard.append(cardImage, cardText);
    teamContainer.append(teamCard);
  
  };

}


const addMemberButton = document.getElementById('addMemberButton');

// click su Add
addMemberButton.addEventListener('click', function(){
  const InputName = document.getElementById('name').value; 
  const InputRole = document.getElementById('role').value;
  const InputImage = document.getElementById('image').value;

  const newMember = {
    name: InputName,
    role: InputRole,
    photo: InputImage 
  }
  console.log(newMember);

  team.push(newMember);
  console.log(team);

  createContent();

});

