function experience(yearsOfStudy) {
    if (yearsOfStudy >= 0 && yearsOfStudy < 1) {
        return "Iniciante";
    } else if (yearsOfStudy >= 1 && yearsOfStudy < 3) {
        return "Intermediário";
    } else if (yearsOfStudy >= 3 && yearsOfStudy <= 6) {
        return "Avançado";
    } else if (yearsOfStudy >= 7) {
        return "Jedi Master";
    } else {
        return "Iniciante";
    }
}

const result = experience(7);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

console.log(result);
document.getElementById('result').innerHTML = result;