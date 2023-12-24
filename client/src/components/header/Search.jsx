
import {InputBase,Box,styled} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const SearchContainer=styled(Box)`
    background: white;
    width:38%;
    border-radius:2px;
    margin-left: 90px;
    display: flex; 
`
const InputSearchBase = styled(InputBase)`
     padding-left:20px;
     width:100%;
     font-size:unset;
`

const SearchIconWrapper=styled(Box)`
      color:black;
      padding :5px;
`


const Search=() =>{
    return(
    <SearchContainer>
        <InputSearchBase placeholder='Search for products,brands...' />
        <SearchIconWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconWrapper>
    </SearchContainer>
    
    )
}

export default Search;