import styled, { css } from 'styled-components'

export const Button = styled.button`
    padding: 0 16px;
    color: #fff;
    background: ${({ theme }) => theme.colors.primary.main};
    box-shadow: drop-shadow 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    transition: background 0.2s ease-in;

    &:hover{
        background: ${({ theme }) => theme.colors.primary.light};
    }

    &:active{
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    &[disabled]{
        background: #ccc;
        cursor: default;
    }

    ${({ theme, danger }) => danger && css`
        background: ${theme.colors.danger.main};

        &:hover{
        background: ${theme.colors.danger.light};

        }

        &:active{
        background: ${theme.colors.danger.dark};

        }

    `}
`