class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async getAll(filter) {
        try {
            const response = await this.repository.getAll(filter);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async create(data) {
        try {
            const response = this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Somethong went wrong in Service layer");
            throw error
        }
    }
}

module.exports = CrudService;