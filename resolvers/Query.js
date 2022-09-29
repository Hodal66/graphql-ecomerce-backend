const { products, categories } = require("../db");

exports.Query = {
  hello: (parent, args, context) => {
    return ["hello", "world"];
  },
  products: (parent, args, context) => products,
  product: (parent, args, context) => {
    const { id } = args;
    return products.find((product) => product.id === id);
  },
  categories: (parent, agrs, contex) => categories,
  category: (parent, agrs, contex) => {
    const { id } = agrs;
    return categories.find((category) => category.id === id);
  },
};
