const BaseFactory = require('./baseFactory');
const Category = require('../models/category');

class CategoryFactory extends BaseFactory {
    constructor() {
        super();
    }

    async getCategories() {
        let categories = await this.poolClient.query('select * from category;');
        if(categories.rows){
            return categories.rows.map((c)=>{
                return new Category(c.id, c.name, c.createddate)
            })
        }
        return null;
    }
}

module.exports = CategoryFactory;