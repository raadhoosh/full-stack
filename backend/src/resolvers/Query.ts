const Query = {
    users(parent, args, context, info) {
        return context.db.query.users({}, info);
    },
    publishedPosts(parent, args, context, info) {
        return context.db.query.posts({ where: { published: true } }, info)
    },
    post(parent, args, context, info) {
        return context.db.query.post({ where: { id: args.postId } }, info)
    },
    postsByUser(parent, args, context, info) {
        return context.db.query.user({
            where: { id: args.userId }
        }, info).posts()
    }
}
export default Query;