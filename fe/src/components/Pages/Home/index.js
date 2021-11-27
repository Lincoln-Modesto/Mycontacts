import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Header, ListHeader, Card, InputSearchContainer } from './styles'

import arrow from '../../../assets/images/icons/arrow.svg'
import trash from '../../../assets/images/icons/trash.svg'
import edit from '../../../assets/images/icons/edit.svg'

import Loader from '../../Loader'
import ContactService from '../../../services/ContactService'

export default function Home() {

    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const filteredContacts = useMemo(() => (
        contacts.filter((contacts) => (
            contacts.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    ), [contacts, searchTerm])

    useEffect(() => {
        async function loadContacts() {
            try {
                setIsLoading(true)

                const contactsList = await ContactService.listContacts(orderBy)

                setContacts(contactsList);

            } catch (error) {
                console.log('error', error);
            } finally {
                setIsLoading(false)
            }
        }
    loadContacts();
}, [orderBy]);

function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
}

function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
}

return (
    <Container>

        <Loader isLoading={isLoading} />

        <InputSearchContainer>
            <input
                value={searchTerm}
                type="text"
                placeholder="Pesquisar contato"
                onChange={handleSearchTerm}
            />
        </InputSearchContainer>

        <Header>
            <strong>{filteredContacts.length === 1 ? filteredContacts.length + ' contato' : filteredContacts.length + ' contatos'}</strong>
            <Link to="/new">Novo contato</Link>
        </Header>

        {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
                <button type='button' onClick={handleToggleOrderBy}>
                    <span>Nome</span>
                    <img src={arrow} alt='Arrow' />
                </button>
            </ListHeader>
        )}

        {filteredContacts.map((contact) => (
            <Card key={contact.id}>
                <div className='info'>
                    <div className='contact-name'>
                        <strong>{contact.name}</strong>
                        {contact.category_id && <small>{contact.category_id}</small>}
                    </div>
                    <span>{contact.email}</span>
                    <span>{contact.phone}</span>
                </div>
                <div className='actions'>
                    <Link to={`/edit/${contact.id}`}>
                        <img src={edit} alt='edit' />
                    </Link>
                    <button type="button">
                        <img src={trash} alt='trash' />
                    </button>
                </div>
            </Card>
        ))}


    </Container>
)
}
