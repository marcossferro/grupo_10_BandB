module.exports= function(sequelize, dataTypes){
    let alias = "TipoUsuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
        },
        type: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        tableName: "tipo_usuario",
        timestamps: false,
        underscored: true,
        paranoid: true
    }
    
    const TipoUsuario = sequelize.define(alias, cols, config);

    TipoUsuario.associate = function(models){
        TipoUsuario.belongsTo(models.Usuario, {
            foreingKey: "tipo_usuario"
        })
    }

    return TipoUsuario

}