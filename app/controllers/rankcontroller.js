import Rank from '../models/rank.js'

const RankController = {
    async index(req, res) {
        try {
            await RankController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const ranks = await Rank.findAll({
            attributes: ['id', 'name']
        })
        res.status(200)
        res.json({
            success: true,
            data: ranks
        })
    },
    async show(req, res) {
        try {
            await RankController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const rank = await Rank.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: rank
        })
    },
    async create(req, res) {
        try {
            await RankController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const rank = await Rank.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: rank
        })
    },
    async update(req, res) {
        try {
            await RankController.tryUpdate(req, res)
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
        const recordNumber = await Rank.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const rank = await Rank.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: rank
        })
    },
    async destroy(req, res) {
        try {
            await RankController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        const rank = await Rank.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: rank
        })
    }
}

export default RankController