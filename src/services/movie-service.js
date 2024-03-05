const { MovieRepository  }= require("../repository/index");

class MovieService {
    constructor() {
        this.movieRepository = new MovieRepository();
    }

    async create(data) {
        try {
            const response = await this.movieRepository.create(data);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }

    async get(id) {
        try {
            const response = await this.movieRepository.get(id);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }

    async update(id, data) {
        try {
            const response = await this.movieRepository.update(id, data);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }

    async destroy(id) {
        try {
            const response = await this.movieRepository.destroy(id);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }
}

module.exports = MovieService;