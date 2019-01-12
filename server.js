const express = require('express')
const expressGraphQL = require('express-graphql')
const userSchema = require('./schemas/schema')
const server = express()
const port = '4000'

server.use("/graphQL", expressGraphQL({
    graphiql:true,
    schema : userSchema
}))
server.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})