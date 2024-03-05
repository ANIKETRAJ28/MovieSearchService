const { LanguageRepository } = require("../repository/index");
const { CrudService } = require("./crud-service");

class LanguageService extends CrudService {
    constructor() {
        this.languageRepository = new LanguageRepository();
        super(this.languageRepository);
    }
}

module.exports = LanguageService;