const ContactRepository = require('../repositories/ContactRepository')

class ContactController{

    async index(request, response){
        //Listar todos os registros
        const { orderBy } = request.query
        const contacts = await ContactRepository.findAll(orderBy);

        response.json(contacts)
    }

    async show(request, response){
        //Obter um único registro
        const { id } = request.params

        const contact = await ContactRepository.findByID(id)

        if(!contact){
            //Not found
            return response.status(404).json({error: 'user not found'})
        }

        response.json(contact)
    }

    async store(request, response){
        //Criar um novo registro
        const {name, phone, email, category_id} = request.body;

        if(!name){
            return response.status(400).json({error: 'name is required'})
        }

        const contactExists = await ContactRepository.findByEmail(email);

        if(contactExists){
            return response.status(400).json({error: 'this email is already in use'})
        }

        const contact = await ContactRepository.create(
            {name, phone, email, category_id}
        )

        response.json(contact)
    }

    async update(request, response){
        //Atualizar um registro
        const { id } = request.params;
        const {name, phone, email, category_id} = request.body;

        const contactExists = await ContactRepository.findByID(id);
        if(!contactExists){
            //Not found
            return response.status(404).json({error: 'user not found'});
        };

        
        if(!name){
            return response.status(400).json({error: 'name is required'});
        };

        const contactByEmail = await ContactRepository.findByEmail(email);
        if(contactByEmail && contactByEmail.id !== id){
            return response.status(400).json({error: 'this email is already in use'});
        };

        const contact = await ContactRepository.update(id,
            {
            name, phone, email, category_id
            }
        );

        response.json(contact)
    }

    async delete(request, response){
        //Deletar um registro
        const { id } = request.params

        await ContactRepository.delete(id)

        //204: No content
        response.sendStatus(204)
    }
}

module.exports = new ContactController()