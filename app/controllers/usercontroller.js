import User from '../models/user.js'

const UserController = {
    async index(req, res) {
        try {
            await UserController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const users = await User.findAll()
        res.status(200)
        res.json({
            success: true,
            data: users
        })
    },
    async show(req, res) {
        try {
            await UserController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const user = await User.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: user
        })
    },
    async create(req, res) {
        try {
            await UserController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const user = await User.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: user
        })
    },
    async update(req, res) {
        try {
            await UserController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await User.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const user = await User.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: user
        })
    },
    async destroy(req, res) {
        try {
            await UserController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        const user = await User.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: user
        })
    }
}

export default UserController