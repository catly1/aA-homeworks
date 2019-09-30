const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const expressGraphQL = require('express-graphql');

const User = require("./models/user");
const Post = require("./models/Post")
const schema = require("./schema/schema");

const app = express();
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.use(bodyParser.json());

app.listen(5000, () => console.log('Server is running on port 5000'));