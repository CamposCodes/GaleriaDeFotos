import styled from "styled-components";

export const Container = styled.div`
    width: 8rem;
    min-height: 10rem;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 30rem;
    left: .5rem;
    margin: 1rem 1rem 1rem 0;
    
    .tag{
        font-size: 12px;
    }

    p{
        margin: 10px 0;
        font-size: 20px;
    }
    
    div{
        display: flex;  
        justify-content: space-between;
        
        p,a{
            margin-right: .5rem;
            color: #fff;
            transition: .5s;
        }
        a:hover{
            color: var(--color3-2-1);
            cursor: pointer;
        }
    }
`;