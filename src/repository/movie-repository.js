const { Movie, Theater, Language } = require("../models/index");
const CrudRepository = require("./crud-repository");

class MovieRepository extends CrudRepository {
    constructor() {
        super(Movie);
    }
    async get(id) {
        try {
            const response = await Movie.findOne({
                where: {id},
                include: [
                    {
                        model: Theater,
                        as: "theater"
                    },
                    {
                        model: Language,
                        as: "language"
                    }
                ]
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = MovieRepository;