
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
display:flex;


`
const Image = styled.img`
width:100%;
height:100%;
flex-wrap:wrap;
object-fit:cover;
${mobile ({height:"30vh", width:'100%', flexWrap:'wrap'})};
`

const Info = styled.div`
position:absolute;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height:100%;
${mobile({ fontSize:'12px', justifyContent:'space-around'})}

`
const Title = styled.h1`
color:white;
margin-bottom:15px;

`

const Button = styled.button`
border:none;
padding:10px;
background-color:white;
font-weight:600;
cursor:pointer;

`

const CategoryItem = ({category}) => {
  return (
     
    <Container>
   
        <Image src={category.img}/>
        <Info>
            
            <Title>{category.title}</Title>
            <Button>Shop Now</Button>
            </Info>
    </Container>
  )
}

export default CategoryItem