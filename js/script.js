console.log("JSOK");

const listElements = document.getElementById("list");

const members = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    picture: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg",
  },
];

// for (let member of members) {
//   for (let key in member) {
//     console.log(`${key}:${member[key]}`);
//   }
// }

let listMembers = "";

for (let member of members) {
  listMembers += `
<div class="col">
    <div class="member mb-3">
      <img src="img/${member.picture}" alt="${member.name}">
      <div class="member-info">
          <p class="name">${member.name}</p>
          <p class="role">${member.role}</p>
      </div>
    </div>
</div>
`;
}

listElements.innerHTML = listMembers;
