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

    async deleteProduct(id){
        let product = await this.poolClient.query(`DELETE FROM PRODUCT WHERE id=${id} RETURNING id;`);
        return id;
    }

    async updateProduct(newProduct){
        const query= `UPDATE PRODUCT SET categoryid=${newProduct.categoryId}, "name"='${newProduct.name}' where id=${newProduct.id} RETURNING id, createddate;`
        const ret = await this.poolClient.query(query);
        const row = ret.rows[0];
        return new Product(row.id, newProduct.name, newProduct.categoryId, row.createddate);
    }
}

module.exports = ProductFactory;