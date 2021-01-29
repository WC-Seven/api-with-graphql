module.exports = {
    User:{
        async tasks (user, _, { dataSources }) {
            return await dataSources.tasksRegisterService.getTasks(user.id);
        }
    },
    Query: {
         async user(_, { login }, { dataSources }) {
            const userFound =  await dataSources.userRegisterService.getUserByLogin(login);

            if(userFound) return userFound;
            const { login: gitLogin, avatar_url } = await dataSources.gitHubService.getUser(login);

            return await dataSources.userRegisterService.addUser({
                login: gitLogin,
                avatar_url
            });
        },
    },
}