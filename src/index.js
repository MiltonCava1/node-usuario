import app from './app.js'; //Importamos app
import sequelize from './database/database.js';
async function main(){
    try{
        await sequelize.sync({force: false});
        console.log('iniciando servidor....en done')
        app.listen(3000);
        console.log('servidor inicianddo en el puerto', 3000)
    }catch(error){
       console.error(error);
    }
}
main();