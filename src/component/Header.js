import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/Help';

function Header() {
    return (
        <Container>
          <Main>
            <AccessTimeIcon />
            <SearchContainer>
                <Search>
                    <input type = "text" placeholder = "Search..." />
                </Search>

            </SearchContainer>
            <HelpOutlineIcon />
          </Main>   
          <UserContainer>
            <Name>
                Rohan Bhandari
            </Name>
            <UserImage>
                <img src="https://i.imgur/com/6VBx3io.png" />
            </UserImage>
          </UserContainer>  
        </Container> 
    )
}

export default Header

const Container = styled.div`
background: #350d36;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
`
const Main = styled.div`
display: flex;
`

const SearchContainer = styled.div`
min-width : 400px;

`

const Search = styled.div`
width: 100%;

`

const UserContainer =styled.div`
display : flex;
align-items: center;
`

const UserImage = styled.div``
const Name = styled.div``