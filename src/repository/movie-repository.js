const { Movie } = require("../models/index");

class MovieRepository {
    
    async get(id) {
        try {
            const response = await Movie.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await Movie.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            await Movie.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await Movie.findByPk(id);
            response.price = data.price;
            await response.save();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }     
}

module.exports = MovieRepository;