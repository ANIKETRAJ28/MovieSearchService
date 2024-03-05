const { Language } = require("../models/index");
const CrudRepository = require("./crud-repository");

class LanguageRepository extends CrudRepository {
    constructor() {
        super(Language);
    }
}

module.exports = LanguageRepository;