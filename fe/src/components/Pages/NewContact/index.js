
import ContactHeader from "../../ContactHeader"
import { ContactForm } from "../../ContactForm"

export default function NewContact() {
    return (

        <>
            <ContactHeader
                title='Novo contato'
            />

            <ContactForm
                buttonLabel="Salvar alterações"
            />
        </>


    )
}