module.exports= function(sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL(10,2).UNSIGNED,
            allowNull: false
        },
        detalle: {
            type: dataTypes.STRING(500),
            allowNull: false
        }
    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    
    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Producto, {
            as: "categoria",
            foreingKey: "categoria_id"
        })

        Producto.belongsToMany(models.Producto, {
            as: "usuarios",
            through: "producto_usuario",
            foreingKey: "producto_id",
            otherKey: "usuario_id",
            timestamps: false
        })
    }

    return Producto

}