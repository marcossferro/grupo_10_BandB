module.exports= function(sequelize, dataTypes){
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
        },
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        contraseña: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        tipo_usuario: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    
    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.Usuario, {
            as: "usuario",
            foreingKey: "tipo_usuario"
        })
        Usuario.belongsToMany(models.Usuario, {
            as: "productos",
            through: "producto_usuario",
            foreingKey: "usuario_id",
            otherKey: "producto_id",
            timestamps: false
        })
    }

    return Usuario

}