import { quotes, users } from "./fakedb.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

const User = mongoose.model("User");
const Quotes = mongoose.model("Quotes");

const resolvers = {
  Query: {
    users: async () => await User.find(),
    //Here we are expanding the by to get _id as well as firstName of the user who created the quote.
    quotes: async () => await Quotes.find().populate("by", "_id firstName"),
    user: async (_, { _id }) => await User.findOne({ _id: _id }),
    iquote: async (_, { by }) => await Quotes.find({ by: by }),
  },
  User: {
    quotes: async (ur) => await Quotes.find({ by: ur._id }),
  },
  Mutation: {
    // SIGN UP USER
    signupUser: async (_, { userNew }) => {
      //If the user exists already then this will return that "User Already Exists".
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("User Already Exists");
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);

      const newUser = new User({ ...userNew, password: hashedPassword });
      return await newUser.save(); //This will save and return the new user.
    },

    // SIGN IN USER
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email });

      // This will check if the user exists or not
      if (!user) {
        throw new Error("User Not Found");
      }
      const doMatch = await bcrypt.compare(userSignin.password, user.password);

      // This will check if the signin user password is same as previously created user password.
      // If not throw Invalid Password  error
      if (!doMatch) {
        throw new Error("Invalid Email or Password");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token: token };
    },

    // Create Quote
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) throw new Error("You must be logged in"); // This will check if the user is logged in or not.
      const newQuote = new Quotes({
        name: name,
        by: userId,
      });
      await newQuote.save();
      return `Quote saved successfully`;
    },

    // Delete Quote
    deleteQuote: async (_, { quoteId }, { userId }) => {
      if (!userId) throw new Error("You must be logged in");
      const result = await Quotes.findOneAndDelete({ _id: quoteId });
      if (!result) {
        throw new Error("Quote not found or already deleted.");
      }
      return "Quote deleted successfully.";
    },
  },
};

export default resolvers;
