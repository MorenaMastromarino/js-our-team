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

console.log('team array', team);



for (let member of team){
  console.log('---------------');
  console.log('member', member);
  for(let key in member){
    console.log('member property', key);
    console.log('member property value', member[key]);

  }
}
