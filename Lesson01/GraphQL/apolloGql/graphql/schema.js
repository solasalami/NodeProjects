const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    AddNumbers(dataInput : userInput): Int
  }

  type Mutation {
    
    createRecord(recordInput : userData): Person
  }

  input userData {
    _id:String!
    name: String!
    email: String!
    password: String
    status: String!

  }

  type Person {
    _id: String!
    name: String!
    email: String!
    password: String
    status: String!
  } 

  input userInput {
      a : Int!
      b : Int!
  }


`);

module.exports = schema;