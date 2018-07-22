const Koa = require('koa')
const {
    ApolloServer, gql
} = require('apollo-server-koa')
const {
    readFileSync
} = require('fs')

const schema = require('./schema')
console.log(schema)
// return
const typeDefs = schema
i = 0
const resolvers = {
    Query: {
        hello: () => 'Hello World!',
        comment: () => ({ id: 1 })
    }
}

const server = new ApolloServer({ typeDefs, resolvers})

const app = new Koa()

server.applyMiddleware({ app })

app.listen({
    port: 4000
}, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
