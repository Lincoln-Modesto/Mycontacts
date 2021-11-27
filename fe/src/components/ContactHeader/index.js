import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

import { Container } from './styles'

import arrow from '../../assets/images/icons/arrow.svg'

export default function ContactHeader({ title }){
    return(
        <Container>
            <Link to='/'>
                <img src={arrow} alt="back"/>
                <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    )
}

ContactHeader.propTypes = {
    title: PropTypes.string.isRequired
}