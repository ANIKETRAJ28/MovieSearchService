const { TheaterRepository } = require("../repository/index");
const { CrudService } = require("./crud-service");

class TheaterService extends CrudService {
    constructor() {
        this.theaterRepository = new TheaterRepository();
        super(this.theaterRepository);
    }
}

module.exports = TheaterService;