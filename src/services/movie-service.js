const { MovieRepository  } = require("../repository/index");
const { CrudService } = require("./crud-service");

class MovieService extends CrudService {
    constructor() {
        this.movieRepository = new MovieRepository();
        super(this.movieRepository);
    }
}

module.exports = MovieService;