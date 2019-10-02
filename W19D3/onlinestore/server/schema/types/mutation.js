require("../../models/index")
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID, GraphQlString } = graphql;
const mongoose = require("mongoose");
const CategoryType = require('./category_type')
const Category = mongoose.model("categories")

const ProductType = require('./product_type')
const Product = mongoose.model("products")
const UserType = require('./user_type')
const AuthService = require("../../services/auth")

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        newCategory: {
            type: CategoryType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, {name}){
                return new Category({name}).save();
            }
        },
        deleteCategory: {
            type: CategoryType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, { _id } ){
                return Category.remove({ _id: _id });
            }
        },
        newProduct:{
            type: ProductType,
            args: {
                user: { type: GraphQLID },
                category: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                weight:  { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parentValue, { user, category, name, description, weight }) {

                return new Product({ user, category, name, description, weight }).save().then(product =>
                    Category.findById(category).then( category => {
                        category.products.push(product)
                        return category.save().then(category => product)
                    })
                );
            }
        },
        deleteProduct:{
            type: ProductType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parentValue, { _id }) {
                return Product.remove({ _id: _id });
            }
        },
        updateProductCategory:{
            type: ProductType,
            args: {
                productId: { type: GraphQLID},
                categoryId: { type: GraphQLID}
            },
            resolve(parentValue, {productId, categoryId}){
                return Product.updateProductCategory(productId, categoryId)
            }
        },
        register: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.register(args);
            }
        },
        logout: {
            type: UserType,
            args: {
              // all we need to log the user our is an id
              _id: { type: GraphQLID }
            },
            resolve(_, args) {
              return AuthService.logout(args);
            }
          },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.login(args);
            }
        },
        verifyUser: {
            type: UserType,
            args: {
                token: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.verifyUser(args);
            }
        }
    }

});

module.exports = mutation;