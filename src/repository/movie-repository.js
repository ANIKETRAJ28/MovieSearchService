const { Movie } = require("../models/index");
const CrudRepository = require("./crud-repository");

class MovieRepository extends CrudRepository {
    constructor() {
        super(Movie);
    }
}

module.exports = MovieRepository;