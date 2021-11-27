const categoryRepository = require('../repositories/CategoryRepository')

class categoryController{

   async index(request, response){
        const categories = await categoryRepository.findAll();
        response.json(categories)
    };

    async store(request, response){
        const { name } = request.body;

        if(!name){
            return response.status(400).json({error: 'name is required'})
        }

        const category =  await categoryRepository.create(name)

        response.status(201).json(category)
    }
}

module.exports = new categoryController()