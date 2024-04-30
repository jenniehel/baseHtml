import React from 'react'
import styled from 'styled-components'
import Input from '../Input/Input';
const Container=styled.div` 
margin-top:10px; 
width:100%;
`
const SidebarTitle = styled.h2`
font-size:25px;
font-weight:normal;
margin-bottom:5px;
`;
const Sidebar = styled.div` 
border-top:1px solid grey;
border-bottom:1px solid grey;
width:100%; 
height:100%;
border-right:2px soild #e214212;
display:flex;
flex-direction:column; 
`
 
const Category = ({handleChange}) => {
   
    return (
        <Container style={{width: "inherit"}}>
            <SidebarTitle>分類</SidebarTitle> 
            <Sidebar>
                <label className="sidebar-label-container">
                    <Input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>全部
                </label>
                <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="運動鞋"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="flats"
                    title="平跟鞋"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="sandals"
                    title="涼鞋"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="高跟鞋"
                    name="test"
                />
            </Sidebar>
        </Container>
    )
}

export default Category
