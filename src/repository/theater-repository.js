const { Theater } = require("../models/index");
const CrudRepository = require("./crud-repository");

class TheaterRepository extends CrudRepository {
    constructor() {
        super(Theater);
    }
}

module.exports = TheaterRepository;