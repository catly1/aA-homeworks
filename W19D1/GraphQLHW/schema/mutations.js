const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require("mongoose");
const UserType = require("./user_type");
const PostType = require("./post_type");

const Post = mongoose.model("post")
const User = mongoose.model("user");

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        newUser: {
            // creating a User type
            type: UserType,
            args: {
                // since we need these arguments to make a new user we'll make them GraphQLNonNull
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, { name, email, password }) {
                return new User({ name, email, password }).save();
            }
        },
        newPost: {
            // creating a User type
            type: PostType,
            args: {
                // since we need these arguments to make a new user we'll make them GraphQLNonNull
                title: { type: new GraphQLNonNull(GraphQLString) },
                body: { type: new GraphQLNonNull(GraphQLString) },
                author: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parentValue, { title, body, author }) {
                return new Post({ title, body, author }).save();
            }
        },

    }
});

module.exports = mutation;