module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        UserName: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        Password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        roleId: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        FirstName: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        LastName: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: true,
            unique: true
        },
        CreatedAt: { 
            type: DataTypes.BIGINT, 
            allowNull: true 
        },
        CreatedBy: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },{
        timestamps:false
    });
    return User;
};