const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    hello: [String!]!
    products: [Product!]!
    product(id: String!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: String!
    price: String!
    onSale: Boolean!
    image: String!
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;
