const graphQL = require("graphql")
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphQL

const users = [
    { id : '1', firstName : 'jeff', age : '54'},
    { id : '2', firstName : 'alain', age : '28'},
    { id : '3', firstName : 'pierre', age : '34'},
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id : { type : GraphQLString },
        firstName : { type : GraphQLString},
        age : { type : GraphQLInt }
    }
})

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        user : {
            type : UserType,
            args : {id : {type : GraphQLString}},
            resolve(parentValue, args) {
                _.find(users, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : RootQuery
})