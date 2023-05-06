module.exports = (sequelize, DataTypes) => { 
    const query = sequelize.define("roles", {
        Id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, primaryKey: true, autoIncrement: true },
        Name: { type:DataTypes.STRING(100), allowNull: true },
        CreatedAt: { type: DataTypes.BIGINT, allowNull: true },
        CreatedBy: { type: DataTypes.INTEGER, allowNull: true }
    },{
        timestamps:false
    });
    return query; 
};