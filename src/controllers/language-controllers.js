const { LanguageService } = require("../services/index");

const languageService = new LanguageService();

const get = async (req, res) => {
    try {
        const response = await languageService.get(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully fetched the language",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch the language",
            success: false,
            err: error
        });
    }
}

const create = async (req, res) => {
    try {
        const response = await languageService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the language",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to created the language",
            success: false,
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await languageService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully deleted the language",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to delete the language",
            success: false,
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await languageService.update(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully updated the language",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to update the language",
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