function haveSkill(skills) {
    const itHas = skills.indexOf("Javascript");

    return itHas != -1 ? true : false;
}

const skills = ["Javascript", "ReactJS", "React Native"];

const result = haveSkill(skills);
console.log(result);
document.getElementById('result').innerHTML = result;