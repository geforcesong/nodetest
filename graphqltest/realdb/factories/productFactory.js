const BaseFactory = require('./baseFactory');
const Product = require('../models/product');

class ProductFactory extends BaseFactory {
    constructor() {
        super();
    }

    async getProducts() {
        let products = await this.poolClient.query('select * from product;');
        if(products.rows){
            return products.rows.map((p)=>{
                return new Product(p.id, p.name, p.categoryid, p.createddate);
            })
        }
        return null;
    }
}

module.exports = ProductFactory;