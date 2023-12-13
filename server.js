import { ApolloServer, gql } from "apollo-server";
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGql.js";
import mongoose from "mongoose";
import { JWT_SECRET, MONGO_URI } from "./config.js";
import jwt from "jsonwebtoken";

mongoose.connect(MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting to MongoDB", err);
});

// import models
import "./models/Quotes.js";
import "./models/User.js";
import resolvers from "./resolvers.js";

// This is middleware to check if the user is logged in or not already.
const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { userId } = jwt.verify(authorization, JWT_SECRET);
    return { userId: userId }; // This will return the user id.
  }
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: context,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
