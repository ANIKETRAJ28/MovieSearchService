const { MovieService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const movieService = new MovieService();

const getAll = async (req, res) => {
    try {
        const response = await movieService.getAll(req.body);
        return res.status(StatusCodes.OK).json({
            data: response,
            message: "Successfully fetched movies",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            message: "Failed to fetch movies",
            success: false,
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await movieService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            message: "Successfully fetched the movie",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            message: "Failed to fetch the movie",
            success: false,
            err: error
        });
    }
}

const create = async (req, res) => {
    try {
        const reqBody = {
            name: req.body.name,
            duration: req.body.duration,
            price: req.body.price,
            ratings: req.body.ratings
        }
        const response = await movieService.create(reqBody);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            message: "Successfully created the movie",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            message: "Failed to created the movie",
            success: false,
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await movieService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            message: "Successfully deleted the movie",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            message: "Failed to delete the movie",
            success: false,
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await movieService.update(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully updated the movie",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            message: "Failed to update the movie",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
    update,
    get,
    destroy,
    getAll
};