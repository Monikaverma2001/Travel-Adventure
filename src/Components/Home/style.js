import styled from "styled-components";

export const MainWrapper=styled.div`
   
    font-size: 1.3rem;
    background-color: #191C27;
    border-bottom-left-radius: 50% 10%;
    border-bottom-right-radius: 50% 10%;  
    
`

export const ImageWrapper=styled.img`
    display: block;
    border-radius: 10% 10%;
  
    width: 50%;
    padding: 3rem;
    @media screen and (max-width:700px) {
      width: 100%;
      padding: 0.4rem;
    }
`