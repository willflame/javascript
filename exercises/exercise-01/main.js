function info(address) {
  const { street, number, city, district, state } = address;
  return `O usuário mora em ${city}/${state} no bairro ${district}, na rua "${street}" com nº ${number}`;
}

const address = {
  street: "Rua dos pinheiros",
  number: 1293,
  district: "Centro",
  city: "São Paulo",
  state: "SP",
};

document.getElementById('address').innerHTML = info(address);
console.log(info(address));
