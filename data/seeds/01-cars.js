exports.seed = function (knex) {
    return knex('cars').truncate()
    .then(function () {
        return knex('cars').insert([
            { vin: '12ABC12345678', make: 'Nissan', model: 'Pathfinder', mileage: 20, title: "clean", transmission: "automatic"}
        ]);
    });
};
