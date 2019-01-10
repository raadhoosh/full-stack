import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import db from './db';

function createServer() {
    return new GraphQLServer({
        typeDefs: "src/schema.graphql",
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({...req, db })
    });
}

export default createServer;
// import { prisma } from './generated/prisma-client'


// import { GraphQLServer } from 'graphql-yoga'
// import Query from './resolvers/Query';
// import Mutation from './resolvers/Mutation';

// const resolvers = {
//   Query: Query,
//   Mutation: Mutation,
//   User: {
//     posts(parent, args, context) {
//       return context.prisma.user({
//         id: parent.id
//       }).posts()
//     }
//   },
//   Post: {
//     author(parent, args, context) {
//       return context.prisma.post({
//         id: parent.id
//       }).author()
//     }
//   }
// }

// const server = new GraphQLServer({
//   typeDefs: './schema.graphql',
//   resolvers,
//   context: {
//     prisma
//   },
// })
// server.start(() => console.log('Server is running on http://localhost:4000'))