import React from 'react'

import {AppBar,Toolbar,styled,Box} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom';
const StyledHeader = styled(AppBar)`
    background: black;
    height: 55px;
    
`
const Component = styled(Link)`
  margin-left: ; 
  text-decoration: none;
  color: #FFFFFF;
`;

const CustomButtonWrapper = styled(Box)`
      margin-left: 5%
      
`

const Header= () => {
  return (
    <StyledHeader>
        <Toolbar style={{minHeight: 55}}>
        <Component to='/'>
        <FontAwesomeIcon icon={faCartShopping} />ShopEasy

        </Component>
        <Search/>

        <CustomButtonWrapper>
        <CustomButtons/>
        </CustomButtonWrapper>

        </Toolbar>
    </StyledHeader>
  )
}
export default Header;
