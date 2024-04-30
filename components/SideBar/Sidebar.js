import React from 'react'
import styled from 'styled-components'

import Category1 from '@/components/Category/Category01'
import Category2 from '@/components/Category/Category02'
import Category3 from '@/components/Category/Category03'
const LContainer = styled.div` 
 width:30%;
font-size:20px;
line-height:1.3;
position: relative;
`
const Fixed = styled.div`
padding:1rem;
width: inherit;
position:fixed;  
height:100%;
display:flex;
overflow-y:auto; 
left:0;
`;
const Content = styled.div`
width:100%;
 `
const Sidebar = ({handleChange }) => {
    return (
        <>
        <LContainer>
            <Fixed>
                <Content>
                    <Category1  handleChange={handleChange}></Category1>
                    <Category2  handleChange={handleChange}></Category2>
                    <Category3  handleChange={handleChange}></Category3>
                </Content>
            </Fixed> 
        </LContainer>
        </>
    )
}

export default Sidebar
