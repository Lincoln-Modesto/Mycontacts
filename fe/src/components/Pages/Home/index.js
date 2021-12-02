import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import {
    Container,
    Header,
    ListHeader,
    Card,
    InputSearchContainer,
    ErrorContainer
} from './styles'

import arrow from '../../../assets/images/icons/arrow.svg'
import trash from '../../../assets/images/icons/trash.svg'
import edit from '../../../assets/images/icons/edit.svg'
import sad from '../../../assets/images/sad.svg'

import Loader from '../../Loader'
import ContactService from '../../../services/ContactService'
import { Button } from '../../Button'

export default function Home() {

    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const filteredContacts = useMemo(() => (
        contacts.filter((contacts) => (
            contacts.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    ), [contacts, searchTerm]);

    async function loadContacts() {
        try {
            setIsLoading(true)

            const contactsList = await ContactService.listContacts(orderBy)
            setHasError(false)
            setContacts(contactsList);

        } catch (error) {
            setHasError(true)
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadContacts();
    }, [orderBy]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
    }

    function handleSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    function handleTryAgain() {
        loadContacts();
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

            <Header hasError={hasError}>
                {!hasError && <strong>{filteredContacts.length === 1 ?
                    filteredContacts.length + ' contato' :
                    filteredContacts.length + ' contatos'}</strong>}
                <Link to="/new">Novo contato</Link>
            </Header>

            {
                hasError &&
                <ErrorContainer>
                    <img src={sad} alt="sad" />
                    <div className="datails">
                        <strong>Ocorreu um erro ao obter os seus contatos</strong>
                        <Button
                            type="button"
                            onClick={handleTryAgain}
                        >Tentar novamente</Button>
                    </div>
                </ErrorContainer>
            }

            {
                !hasError && (
                    <>
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
                    </>
                )
            }


        </Container>
    )
}

