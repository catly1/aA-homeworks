const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../../config/keys");
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

const register = async data => {
    try {
        // run it through our validator which returns if the data isValid
        // and if not it returns a nice message for the client side
        const { message, isValid } = validateRegisterInput(data);

        // if the data we received isn't valid through up the error message from validator
        if (!isValid) {
            throw new Error(message);
        }
        // deconstruct our data
        const { name, email, password } = data;

        // we want to wait until our model can tell us whether a user exists with that email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("This user already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User(
            {
                name,
                email,
                password: hashedPassword
            },
            err => {
                if (err) throw err;
            }
        );

        user.save();
        // we'll create a token for the user
        const token = jwt.sign({ id: user._id }, keys.secretOrKey);

        // then return our created token, set loggedIn to be true, null their password, and send the rest of the user
        return { token, loggedIn: true, ...user._doc, password: null };

    } catch (err) {
        throw err;
    }
};

const logout = async data => {
    const { _id } = data;
    return User.findById({_id: _id}).then(
        user => {
            const token = ""
            return { token, loggedIn: false, ...user._doc, password: null}
        }
    )
}

const login = async data => {
    try {
        // use our other validator we wrote to validate this data
        const { message, isValid } = validateLoginInput(data);

        if (!isValid) {
            throw new Error(message);
        }

        const { email, password } = data
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            throw new Error("Invalid Email");
        }

        if (bcrypt.compareSync(password, existingUser.password)){
            const token = jwt.sign({ id: existingUser._id }, keys.secretOrKey);
            return { token, loggedIn: true, ...existingUser._doc, password: null };
        } else {
            throw new Error("Invalid Password")
        }

    } catch (err) {
        throw err;
    }
};

const verifyUser = async data => {
    try {
      // we take in the token from our mutation
      const { token } = data;
      // we decode the token using our secret password to get the
      // user's id
      const decoded = jwt.verify(token, keys.secretOrKey);
      const { id } = decoded;
  
      // then we try to use the User with the id we just decoded
      // making sure we await the response
      const loggedIn = await User.findById(id).then(user => {
        return user ? true : false;
      });
  
      return { loggedIn };
    } catch (err) {
      return { loggedIn: false };
    }
  };

// updateGod: {
//     type: GodType,
//     args: {
//       id: { type: GraphQLID },
//       name: { type: GraphQLString },
//       type: { type: GraphQLString },
//       description: { type: GraphQLString }
//     },
//     resolve(parentValue, { id, name, type, description }) {
//       const updateObj = {};

//       if (id) updateObj.id = id;
//       if (name) updateObj.name = name;
//       if (type) updateObj.type = type;
//       if (description) updateObj.description = description;

//       return God.findOneAndUpdate(
//         { _id: id },
//         { $set: updateObj },
//         { new: true },
//         (err, god) => {
//           return god;
//         }
//       );
//     }
//   },


module.exports = { register, logout, login, verifyUser };