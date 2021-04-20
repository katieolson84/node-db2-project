exports.seed = function (knex) {
    return knex('cars').truncate()
    .then(function () {
        return knex('cars').insert([
            { vin: '1111111111111112', make: 'Nissan', model: 'Pathfinder', mileage: 20, title: "clean", transmission: "automatic"},
        ]);
    });
};
