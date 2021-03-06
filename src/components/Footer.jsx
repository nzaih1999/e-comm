import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile} from '../responsive'
import { useTranslation } from 'react-i18next'


const Container = styled.div`
display:flex;
background-color:lightblue;
color:rgba(0,0,0,0.7);
${mobile ({flexDirection:"column"})};


`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
margin:20px 0px;
`

const SocialMedia = styled.div`
display:flex;

`

const SocialIcon = styled.div`
width:50px;
height:50px;
border-radius:50%;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
cursor:pointer;

`

const Center = styled.div`
flex:1;
padding:20px;
${mobile ({display:"none"})};

`
const Title = styled.h3`
margin-bottom:20px;
`

const List = styled.ul`
margin-0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`

const ListItem = styled.li`
width:50%;
cursor:pointer;
font-weight:500;
margin-bottom:10px;


&:hover{
    font-weight:bold;
    text-decoration:underline rgba(0,0,0,0.5);
`


const Right = styled.div`
flex:1;
padding:20px;

`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`



const Footer = () => {
    const {t} = useTranslation(["common"])
  return (
    <Container>
        <Left>
       <Logo>KarT</Logo>
       <Description>
        {t("info")}
       </Description>
         <SocialMedia>
         <SocialIcon color="385999">
             <Facebook />
         </SocialIcon>
         <SocialIcon color='E4405F'>
             <Instagram />
         </SocialIcon>
         <SocialIcon color='55ACEE'>
             <Twitter />
         </SocialIcon>
        </SocialMedia>
        </Left>

        <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>About Us</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>Privacy</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem>Sell</ListItem>
            <ListItem>Orders</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Payments</ListItem>

        </List>
        </Center>
        <Right>
        <Title>{t("contactus")}</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>
            237 Main Street, Thika Kenya
        </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>
            +254712345678
        </ContactItem>
        <ContactItem ><Mail style={{marginRight:"10px"}}/>
            info@kart.io
        </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer