console.log("Successfull");

const teamScheda = document.querySelector(".container");
console.log(teamScheda)
const team = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor" ,
      foto: "angela-caroll-chief-editor.jpg" 
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto:"walter-gordon-office-manager.jpg" 
    },
    {
     nome: "Angela Lopez", 
     ruolo: "Social Media Manager",
     foto: "angela-lopez-social-media-manager.jpg" 
    },
    {
      nome: "Scott Estrada",
     ruolo: "Developer",
      foto: "scott-estrada-developer.jpg" 
    },
    {
      nome: "Barbara Ramos",
     ruolo: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg" 
    }
];

//console.log(team);

for (const key in team) {
    console.log(`${key} con valore: `, team[key]);
}


createCards(team, teamScheda);

/****************FUNCTION************************************* */

function createCards(team, teamScheda) {
    teamScheda.innerHTML = '';

    for (let i = 0; i < team.length; i++) {
        const card = team[i];
        console.log(card);

        teamScheda.innerHTML += 
        `<div class = "cardTeam">
            <div class="cardImage">
                <img src ="./img/${card.foto}">
            </div>
        <div class="cardText">
            <h3>${card.nome}</h3>
        <div>
            <p>${card.ruolo}</p>
        </div>
        </div>
    </div>`

     }
    }
