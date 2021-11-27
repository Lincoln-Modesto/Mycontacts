import styled, { css } from 'styled-components'

export const Input = styled.input`
    width: 100%;
    border: 2px solid #fff;
    background-color: #fff;
    border-radius: 4px;
    height: 52px;
    outline: none;
    box-shadow: drop-shadow 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 16px;
    font-size: 16px;
    transition: 0.2s ease-in;
    appearance: none;

    &:focus{
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
    }

    ${({ theme, error}) => error && css`
        color: ${theme.colors.danger.main};
        border-color: ${theme.colors.danger.main} !important;
    `}

`