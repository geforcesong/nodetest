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

    async addProduct(name, categoryId){
        const date = new Date();
        let product = await this.poolClient.query(`INSERT INTO product("name", categoryid, createddate) VALUES('${name}', ${categoryId}, '${date.toISOString()}') RETURNING id;`);
        const id = product.rows[0].id;
        return new Product(id, name, categoryId, date);
    }
}

module.exports = ProductFactory;