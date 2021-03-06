
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Banner from '../components/Banner';
import { desktop, mobile } from '../responsive'
import { useMediaQuery } from '@material-ui/core';
import CategoryGrid from '../components/CategoryGrid'
import Products from './Products';
import styled from 'styled-components';
import OfficialStores from './OfficialStores';
import Headings from './Headings';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
max-height:370px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:lightblue;






`




export default function CustomizedInputBase() {
  const { t } = useTranslation(["Home"]);
  return (
<Container>

<Paper style={{marginBottom:'5px',border:"1px solid lightblue", marginTop:'3px', padding:"4px"}}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',justifyContent:'center', width: '90%', maxWidth: '500px', margin: '0 auto', maxHeight: '100px' }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1  }}
        placeholder={t("searchProduct")}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </Paper>
    
    
    <OfficialStores/>
    
    <CategoryGrid/>
    </Container>
    
  );
}
