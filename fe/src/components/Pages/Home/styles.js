import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 24px;
`

export const InputSearchContainer = styled.div`
    width: 100%;

    input{
        width: 100%;
        border-radius: 25px;
        background-color: #fff;
        border: none;
        height: 50px;
        box-shadow: drop-shadow 0px 4px 10px rgba(0, 0, 0, 0.04);
        padding: 0 24px;
        outline: 0;

        &::placeholder{
            color: ${({ theme }) => theme.colors.gray[200]};
        }
    }

`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;

strong{
    font-size: 24px;
}

a{
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover{
        background: ${({ theme }) => theme.colors.primary.main};
        color: #fff;
    }
}
`
export const ListHeader = styled.header`

    margin-top: 24px;
    margin-bottom: 8px;

        button{
            background: transparent;
            border: none;
            display: flex;
            align-items: center;

            span{
            margin-right: 8px;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primary.main};
            }

            img{
                transform: ${({ orderBy }) => orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
                transition: transform 0.2s ease-in;
            }

        }

      
`

export const Card = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 16px;
    display: flex;
    justify-content: space-between;

    .info{
        .contact-name{
            display: flex;
            align-items: center;

            small{
                background: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span{
                display: block;
                color: ${({ theme }) => theme.colors.gray[200]};
            }
    }

    .actions{

        display: flex;
        align-items: center;

        button{
            background: transparent;
            border: none;
            margin-left: 8px;
        }
    }

    & + &{
        margin-top: 16px;
    }

`
