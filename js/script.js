const team =
[
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];
// utilizzo un ciclo for per stampare sulla pagina le card dei membri dello staff.
for (let i = 0; i < team.length; i++) {
  // utilizzando il template literal in combinazione con il ciclo ricreo il layout html
  // e inserisco le informazioni dei vari membri.
  const memberCard =
  `<div class="team-card">
    <div class="card-image">
      <img src="img/${team[i].image}"/>
    </div>
    <div class="card-text">
      <h3>${team[i].name}</h3>
      <p>${team[i].role}</p>
    </div>
  </div>`;
  // seleziono il contenitore dove verranò stampate le card.
  document.querySelector('.team-container').innerHTML += memberCard;
}