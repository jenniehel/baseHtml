import React from 'react'
import styled from 'styled-components'
import data from '@/data/data'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
const Container = styled.div`
width:30%;
height:380px;
border:1px solid grey;
padding:15px;
`
const Column = styled.div`
display:flex;
flex-direction:column; 
gap:5px;
`
const Between = styled.div`
display:flex;
justify-content: space-between;
`
const Image = styled.img`
width:100%;
height:200px;
object-fit:contain

`
const Title = styled.div`
margin-top:2rem;
font-size:20px;
font-weight:500;
`
const Icon = styled.div`
font-size:30px;
color:orange;
`
const Card = ({ img, title, star, reviews, prePrice }) => {

    return (
        <Container>
            <Image src={ img} />
            <Column>
                <Title>{ title}</Title>
                <div>
                    <FaStar />
                    <FaStar />
                    <FaStar /><CiStar />
                </div>
                <Between>
                    <div>
                        <del>${ reviews}</del>
                        <span>${ prePrice}</span>
                    </div>
                    <Icon>
                        <IoBag />
                    </Icon>
                </Between>
            </Column>

        </Container>
    )
}

export default Card
