const CategoryFactory = require('./graphqltest/realdb/factories/categoryFactory');
const ProductFactory = require('./graphqltest/realdb/factories/productFactory');

let cf  = new CategoryFactory();
let pf  = new ProductFactory();
(async _=>{
    let k = await cf.getCategories();
    console.log(k);
    let ps = await pf.getProducts();
    console.log(ps);
})();