// import React, { useState } from 'react';

// const Navbar = ({ data }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');

//   return (
//     <div className="navbar">
//       <select
//         value={selectedCategory}
//         onChange={(e) => {
//           setSelectedCategory(e.target.value);
//           setSelectedSubcategory(''); // Reset subcategory when a new category is selected
//         }}
//       >
//         <option value="">Select a Category</option>
//         {data.map((item, index) => (
//           <option key={index} value={item.category}>
//             {item.category}
//           </option>
//         ))}
//       </select>

//       {selectedCategory && (
//         <select
//           value={selectedSubcategory}
//           onChange={(e) => setSelectedSubcategory(e.target.value)}
//         >
//           <option value="">Select a Subcategory</option>
//           {data
//             .find((item) => item.category === selectedCategory)
//             .subcategories.map((subcategory, index) => (
//               <option key={index} value={subcategory}>
//                 {subcategory}
//               </option>
//             ))}
//         </select>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React from 'react'
import {Box,Typography,styled} from '@mui/material';
import {navData} from '../../constants/data';

const Component = styled(Box)`
     display:flex;
     margin: 40px 0px 0 0px;
     justify-content: space-between;
     background-color:#36454F;
     color:#fff;
`

const Container=styled(Box)`
      padding: 3px 41px;
      text-align:center;
      
`

const Text=styled(Typography)`
      font-size: 14px;
      font-weight: 500;
      font-family:inherit;
`



const Navbar=() =>{
  return (
    <Component>
     {
        navData.map(data =>(
            <Container>
                
                <img src ={data.url} alt="nav" style={{width:43}}/>
                <Text>{data.text}</Text>
            </Container>

        ))
     }
    </Component>
  )
}

export default Navbar;
