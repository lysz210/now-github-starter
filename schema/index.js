const glob = require('glob')
const {
    readFileSync
} = require('fs')
const {
    ApolloServer, gql
} = require('apollo-server-koa')
module.exports = glob.sync("**/*.graphql")
    .map(file => gql(readFileSync(file).toString()))