const Query = {
    publishedPosts(parent, args, context) {
        return context.prisma.posts({ where: { published: true } })
    },
    post(parent, args, context) {
        return context.prisma.post({ id: args.postId })
    },
    postsByUser(parent, args, context) {
        return context.prisma.user({
            id: args.userId
        }).posts()
    }
}
export default Query;