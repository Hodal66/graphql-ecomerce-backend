const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { products, categories } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Category,
    Product,
    Query,
  },
});
server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
