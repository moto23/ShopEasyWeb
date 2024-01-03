import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckFast} from '@fortawesome/free-solid-svg-icons';

import { DataContext } from '../../context/DataProvider';
// import { LoginContext } from '../../context/ContextProvider';
import {Box,Button,Typography,styled} from '@mui/material';
import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';


const Wrapper =styled(Box)`
      display:flex;
      margin: 0 3% 0 auto;
      & > button, & > p, & >div{
        margin-right:30px;
        font-size:15px;
        align-items:center;
      }
`

const Container = styled(Box)`
      display:flex;
`

const LoginButton = styled(Button)`
      color:black;
      background:;
      text-transform:none;
      padding: 5px 40px;
      border-radius:2px;
      box-shadow:none;
      font-weight:600;
      height:32px;
`

const CustomButtons=()=>{
    const [open,setOpen] = useState(false);
    // const { account, setAccount } = useContext(LoginContext);
    const {account,setAccount} = useContext(DataContext);
    const openDialog = () =>{
        setOpen(true);
    }

    return(
        <Wrapper>
            {
         account ? <Profile account={account} setAccount={setAccount}/>:        
        <LoginButton variant="contained" onClick={() => openDialog()}>Hello!Login</LoginButton>
}
        <Typography style={{marginTop:5,width:140}}>
            Sell & Earn
        </Typography >
        <Typography style={{marginTop:5}}>More</Typography>
        <Container>
        <FontAwesomeIcon icon={faTruckFast}/>Cart
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;