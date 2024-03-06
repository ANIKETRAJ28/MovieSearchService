const { LanguageRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class LanguageService extends CrudService {
    constructor() {
        const languageRepository = new LanguageRepository();
        super(languageRepository);
    }
}

module.exports = LanguageService;