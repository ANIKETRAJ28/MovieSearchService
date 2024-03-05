class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            await this.model.destroy({
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
            const response = await this.model.findByPk(id);
            response.price = data.price;
            await response.save();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = CrudRepository;