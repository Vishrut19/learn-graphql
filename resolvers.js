import { quotes, users } from "./fakedb.js";
import { randomBytes } from "crypto";

const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes,
    user: (_, { id }) => users.find((user) => user.id === id),
    iquote: (_, { by }) => quotes.filter((quote) => quote.by === by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by === ur.id),
  },
  Mutation: {
    signupUserDummy: (_, { userNew }) => {
      const id = randomBytes(5).toString("hex"); // generate 10 digit random id
      users.push({
        id: id,
        ...userNew,
      });
      return users.find((user) => user.id === id); //This will return id that we created.
    },
  },
};

export default resolvers;
