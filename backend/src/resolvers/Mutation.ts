const Mutation = {
    createDraft(parent, args, context, info) {
        return context.db.mutation.createPost(
            {
                data: {
                    title: args.title,
                    author: {
                        connect: { id: args.userId }
                    }
                }
            },
            info
        )
    },
    publish(parent, args, context, info) {
        return context.db.mutation.updatePost(
            {
                data: {
                    where: { id: args.postId },
                    data: { published: true },
                }
            },
            info
        )
    },
    createUser(parent, args, context, info) {

        return context.db.mutation.createUser(
            { data: { name: args.name } },
            info)
    }
}
export default Mutation;