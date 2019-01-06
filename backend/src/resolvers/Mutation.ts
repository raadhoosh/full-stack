const Mutation = {
    createDraft(parent, args, context) {
        return context.prisma.createPost(
            {
                title: args.title,
                author: {
                    connect: { id: args.userId }
                }
            },

        )
    },
    publish(parent, args, context) {
        return context.prisma.updatePost(
            {
                where: { id: args.postId },
                data: { published: true },
            },

        )
    },
    createUser(parent, args, context) {
        
        return context.prisma.createUser(
            { name: args.name },
        )
    }
}
export default Mutation;