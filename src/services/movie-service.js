const { MovieRepository  } = require("../repository/index");
const CrudService = require("./crud-service");

class MovieService extends CrudService {
    constructor() {
        const movieRepository = new MovieRepository();
        super(movieRepository);
    }
}

module.exports = MovieService;