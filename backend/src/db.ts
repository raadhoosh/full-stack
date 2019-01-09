import { Prisma } from "prisma-binding";
// console.log("process.env.PRISMA_ENDPOINT",process.env.PRISMA_ENDPOINT)
const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: "https://us1.prisma.sh/sajad-mohammadi-nejad-b00947/hello-world/dev",
    // secret: process.env.PRISMA_SECRET,
    debug: false,
})


export default db;
