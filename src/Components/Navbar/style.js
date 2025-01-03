import styled from 'styled-components'

export const ParentWrapper=styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    margin:auto;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    z-index: 1;
`
export const NavbarWrapper=styled.div`
    padding: 0.1;
    padding-left: 2rem;
    padding-right: 2rem;
    display:flex;
    justify-content:space-between;
    align-items: center;
    cursor: pointer;
    
    @media screen and (max-width:700px)
    {
        display: none;
    }
   

    
`
export const Collapse=styled.div`

    @media screen and (min-width:700px)
    {
        display: none;
    }
`
    /* display: none; */