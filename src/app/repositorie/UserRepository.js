import  {consulta} from '../database/conexao.js'

class UserRepository {

    create(dados) {

        const sql = 'INSERT INTO user SET ?;'
        return consulta(sql,dados,"Erro ao processar a página")
       
        
    }

    findAll() {
        const sql = 'SELECT * FROM user;'
        return consulta(sql,"Erro ao processar a página")


    }

    findById(id) {
        const sql = 'SELECT * FROM user WHERE id=?;'
        return consulta(sql,id,"Erro ao processar a página")


    }
    update(dados, id) {
        const sql = 'UPDATE user SET ? WHERE id=?;'
        return consulta(sql,[dados,id],"Erro ao actualizar")


    }
    delete(id) {
        const sql='DELETE  FROM user WHERE id=?;'
        return consulta(sql,id,"Erro ao eliminar um usuário")

        
     }
}

export default new UserRepository()