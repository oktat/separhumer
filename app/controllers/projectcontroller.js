import Project from '../models/project.js'

const ProjectController = {
    async index(req, res) {
        try {
            await ProjectController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const projects = await Project.findAll()
        res.status(200)
        res.json({
            success: true,
            data: projects
        })
    },
    async show(req, res) {
        try {
            await ProjectController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const project = await Project.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: project
        })
    },
    async create(req, res) {
        try {
            await ProjectController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const project = await Project.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: project
        })
    },
    async update(req, res) {
        try {
            await ProjectController.tryUpdate(req, res)
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
        const recordNumber = await Project.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const project = await Project.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: project
        })
    },
    async destroy(req, res) {
        try {
            await ProjectController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        const project = await Project.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: project
        })
    }
}

export default ProjectController