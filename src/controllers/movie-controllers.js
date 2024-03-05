const { MovieService } = require("../services/index");

const movieService = new MovieService();

const get = async (req, res) => {
    try {
        const response = await movieService.get(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully fetched the movie",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch the movie",
            success: false,
            err: error
        });
    }
}

const create = async (req, res) => {
    try {
        const response = await movieService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the movie",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
        return res.status(201).json({
            data: response,
            message: "Successfully deleted the movie",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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
        console.log(error);
        return res.status(500).json({
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
    destroy
};