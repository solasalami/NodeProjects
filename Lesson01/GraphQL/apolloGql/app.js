var express = require('express');
var graphqlHTTP = require('express-graphql');
const BuildSchema = require('./graphql/schema');
const RootResolver = require('./graphql/resolvers');

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: BuildSchema,
    rootValue: RootResolver,
    graphiql: true,
}));
app.listen(7070, () => console.log('Now browse to http://localhost:7070/graphql'));