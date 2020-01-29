module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name : {
            type : DataTypes.STRING(20),//VARCHAR는 STRING으로
            allowNull : false,//allowNull은 NOT NULL과 동일
            unique : true,
        },
        age : {
            type : DataTypes.INTEGER.UNSIGNED,//INT는 INTEGER로, INTEGER.UNSIGNED는 UNSIGNED 옵션이 적용된 INT를 의미
            allowNull : true,
        },
        married : {
            type : DataTypes.BOOLEAN,//TINYINT는 BOOLEAN으로
            allowNull : false,
        },
        comment : {
            type : DataTypes.TEXT,
            allowNull : true,
        },
        created_at : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue : DataTypes.NOW,//기본 값 설정
        },
    }, {
        timestamps : false,
    });
};