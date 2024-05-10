const dogs = [
    { id: 1, name: 'Boots', color: 'brindle', lovesTreats: true },
    { id: 2, name: 'Peanut', color: 'black/white/tan', lovesTreats: true },
    { id: 3, name: 'Buster', color: 'brindle', lovesTreats: true },
    { id: 4, name: 'Abbie', color: 'black/white', lovesTreats: true },
  ];
module.exports = {
    getAll: function () {
        return dogs;
    },
    getOne: function (id) {
        return dogs.find((dog) => dog.id === parseInt(id));
    },
};