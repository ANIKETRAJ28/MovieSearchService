const { TheaterRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class TheaterService extends CrudService {
    constructor() {
        const theaterRepository = new TheaterRepository();
        super(theaterRepository);
    }
}

module.exports = TheaterService;