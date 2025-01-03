import styled from "styled-components";

export const MainWrapper=styled.div`
    background-color: rgb(255, 245, 238);
    padding-top: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;  
`

export const DestinationInformation=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content:space-around;
   
    .box{
        background-color: rgb(226, 223, 210);
        margin: 1rem;
        width: 20%;
        padding: 1rem;
        border-radius: 10px;
    }
    @media screen and (max-width:1000px){
        .box{
            
            width: 40%;
        }
    }
    @media screen and (max-width:700px)
    {
        display: block;
        
    .box{
        
        margin: auto;
        margin-bottom: 1rem;
        width: auto;
        padding: 1rem;
    }
    }
`