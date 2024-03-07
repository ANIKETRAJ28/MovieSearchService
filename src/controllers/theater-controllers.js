const { TheaterService } = require("../services/index");

const theaterService = new TheaterService();

const getAll = async (req, res) => {
    try {
        const response = await theaterService.getAll(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully fetched theaters",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch theaters",
            success: false,
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await theaterService.get(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully fetched the theater",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch the theater",
            success: false,
            err: error
        });
    }
}

const create = async (req, res) => {
    try {
        const response = await theaterService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the theater",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to created the theater",
            success: false,
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await theaterService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully deleted the theater",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to delete the theater",
            success: false,
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await theaterService.update(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully updated the theater",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to update the theater",
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