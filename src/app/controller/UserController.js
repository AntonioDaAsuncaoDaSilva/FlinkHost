
import UserRepository from '../repositorie/UserRepository.js'
class UserController {

    async index(req, res) {
        const row = await UserRepository.findAll()
        res.json(row)
    }


    async show(req, res) {
        const id = req.params.id
        const row = await UserRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const dados = req.body
         const row = await UserRepository.create(dados)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const dados = req.body
        const row = await UserRepository.update(dados, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await UserRepository.delete(id)
       res.json(row)
    }

}
 export default new UserController() 