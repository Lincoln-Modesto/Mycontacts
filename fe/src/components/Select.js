import styled from 'styled-components'

export const Select = styled.select`
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

`