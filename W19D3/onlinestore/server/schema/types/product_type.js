const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const Category = mongoose.model("categories")

const ProductType = new GraphQLObjectType({
    name: "ProductType",
    // remember we wrap the fields in a thunk to avoid circular dependency issues
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        category: {
            type: require("./category_type"),
            resolve(parentValue){
                return Category.findById(parentValue.category)
                .then(category => category)
                .catch(err => null)
            }
        },
        description: { type: GraphQLString},
        weight: { type: GraphQLInt }

    })
});

module.exports = ProductType;