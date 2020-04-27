// Export review model
module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {

        blogTitle: {
            type: DataTypes .STRING,
            allowNull: false,
            validate: {
                len: [3, 500]
            }
        },

        reviewText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 500]
            }
        }
    });

    Review.associate = function(models) {
        models.Review.hasMany(models.Comment, { onDelete: 'cascade'});
    };

    Review.associate = function(models) {
        models.Review.belongsTo(models.User);
    }

    return Review;
}