module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'xxxx', // mudar quando subir pro git: xxxx - mudar também no arquivo database.js
    database: 'bdd-trabalho',
    define: {
        timestamps: false,
        underscored: true
    }
}