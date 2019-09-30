const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;


const UserType = new GraphQLObjectType({
    // capitalize!
    name: "UserType",
    // fields refers to everything this Type will be able to return to you. Which means all of the
    // data associated with this type in the database. For our User that is id, email, name, and posts.
    fields: () => ({
        id: { type: GraphQLID }, // Mongoose automatically generates an ID field for our models
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        post: {
            type: new GraphQLList(require("./post_type")),
            resolve(parentValue) {
                return (
                    User.findById(parentValue.id)
                        // populate is a mongoose method
                        .populate("posts")
                        .then(user => user.posts)
                );
            }
        }
    })
});

module.exports = UserType;