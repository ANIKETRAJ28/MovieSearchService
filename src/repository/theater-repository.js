const { Op } = require("sequelize");
const { Theater, Movie } = require("../models/index");
const CrudRepository = require("./crud-repository");

class TheaterRepository extends CrudRepository {
    constructor() {
        super(Theater);
    }

    async get(id) {
        try {
            const response = await Theater.findOne({
                where: {id},
                include: [
                    {
                        model: Movie,
                        as: "movie"
                    }
                ]
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getAll(filter) {
        try {
            console.log(filter);
            if(filter.name) {
                var response = Theater.findAll({
                    where: {
                        name: {[Op.like]: `${filter.name}%`}
                    }
                })
            } else {
                var response = super.getAll();
            }
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = TheaterRepository;