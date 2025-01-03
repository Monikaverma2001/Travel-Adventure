import styled from "styled-components";

export const FormWrapper = styled.div`
    color:black;
    
    background-size: cover;
    background-repeat: no-repeat;

`
export const FormDiv = styled.div`
   
    margin:auto;
    text-align: center;
    font-size: 1.45rem;
 
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
    }
    select{
        margin: 1rem;
        padding: 1rem;
        border-radius: 10%;
    }
    @media screen and (max-width:700px){
        padding: 0;
        margin: auto;
        font-size: 1rem;
    }
`
export const ResultWrapper = styled.div`
    margin-top:1rem;
    font-family: arial, sans-serif;
  width: 100%;
  text-align: center;
table{
   
    margin: auto;
    width: 70%;
}
td, th {

  text-align: left;
  padding: 8px;
}

tr:nth-child(even) { 
  background-color: rgb(237, 234, 222);
  
}

tr:hover{
        filter: brightness(150%);
    }

@media screen and (max-width:700px)

    {
        padding: 0;
        table{
            font-size: 1rem;
    margin: auto;
    padding: 1px;
}
    }
`