import styled from "styled-components";
const Button=styled.button`
border:1px solid grey;
margin:5px;
padding:5px;
background:transparent;
font-size:26px;
`
const Button2 = ({ onClickHandler, value, title }) => {

    return (
      <Button onClick={onClickHandler} value={value} className="btns">
        {title}
      </Button>
    );
  };
  
  export default Button2;