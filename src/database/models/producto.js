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
    
    const Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.belongsTo(models.Categoria,{
            foreignKey: 'categoriaId',
            constraints: false,
            as: 'categoria'
        })
        Producto.belongsToMany(models.Usuario, {
            as: 'carrito',
            through: 'producto_usuario',
            foreingKey: 'producto_id',
            otherKey: 'usuario_id',
            timestamps: true
        })
    }

    return Producto

}