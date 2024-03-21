module.exports = function (user) {
    return {
        id: user.id,
        login: user.login,
        firstName: user.firstName,
        lastName: user.lastName,
        registedAt: user.createdAt,
        roleId: user.role,
    };
};
