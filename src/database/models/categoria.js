module.exports= function(sequelize, dataTypes){
    let alias = "Categoria";

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
        tableName: "categories",
        timestamps: false,
        underscored: true,
        paranoid: true
    }
    
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Producto, {
            foreignKey: 'categoriaId',
            constraints: false
          })
    }

    return Categoria

}