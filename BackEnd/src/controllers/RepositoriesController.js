import Repository from '../models/Repository';
import User from '../models/User';

class RepositoriesController{
    async index(req, res) {
        try{
            const { user_id, } = req.params;
            const { q } = req.query;

            const user = await User.findById(user_id);

            if(!user) {
                return res.status(404).json();
            }

            //search
            let query = {};

            if (q) {
                query = { url: { $regex: q }}
            }

            const repositories = await Repository.find({
                userId: user_id,
                ...query
            });

            return res.json(repositories);
        } catch(e) {
            console.error(e)
            return res.status(500).json({ error: "Internal server error"})
        }
    }

    //method post
    async create(req, res) {
        try {
            const { user_id } = req.params;
            const { name, url } = req.body;

            const user = await User.findById(user_id);
            //user exist?
            if(!user) {
                return res.status(404).json();
            }

            const repository = await Repository.findOne({
                userId: user_id,
                url
            })
            //repository exist?
            if(repository) {
                return res
                    .status(422)
                    .json({ message: `Repository ${name} already exists` });
            };

            const newRepository = await Repository.create({
                name,
                url,
                userId: user_id
            });

            return res.status(201).json(newRepository)
        } catch (e) {
            console.error(e)
            return res.status(500).json({ error: "Internal server error"})
        }
    }

    async delete(req, res) {
        try {
            const { user_id, id } = req.params;

            const user = await User.findById(user_id);
            //user exist?
            if(!user) {
                return res.status(404).json();
            }

            const repository = await Repository.findOne({
                userId: user_id,
                id,
            })
            //repository exist?
            if(!repository) {
                return res
                    .status(404)
                    .json({ message: `Repository doesn't exist` });
            } 
            
            await repository.deleteOne();
            return res.status(200).json({ message: `Repository  deleted` });
        } catch (e) {
            console.error(e)
            return res.status(500).json({ error: "Internal server error"})
        }
    }
}


export default new RepositoriesController();