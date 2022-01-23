function skils(users) {
  let userSkils = '';

  for (user of users) {
    userSkils += `O ${user.name} possui as habilidades: ${user.skils.join(
      ", "
    )} <br />`;
  }

  return userSkils;
}

const users = [
  {
    name: "Diego",
    skils: ["Javascript", "ReactJS", "Redux"],
  },
  {
    name: "Gabriel",
    skils: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

const result = skils(users);
console.log(result);
document.getElementById('result').innerHTML = `${result}`;