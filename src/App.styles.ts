import styled from "styled-components";

export const Container = styled.div`
    background: var(--color1-2);
    color: #fff;
    min-height: 100vh;
`;
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;
export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;
export const ScreenWarning = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .emoji img{
        width: 6rem;
        height: 6rem;
        margin-bottom: 20px;
    }
    .emoji p{
        margin-top: -20px;
        font-style: italic;
        color: #6a94fb;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background: var(--color4-5);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;

    input[type=submit]{
        background: var(--color5-4);
        border: 1px solid var(--color5-4);
        color: #fff;
        padding: 6px 16px;
        font-size: 15px;
        border-radius: 1rem;
        margin: 0 20px;
        cursor: pointer;
        transition: .3s;
        
        &:hover{
            background: var(--color3-2-1);
        }
    }
    
    input[type="file"] {
        display: none;
    }
    label {
        background: var(--color5-4);
        border: 1px solid var(--color5-4);
        color: #fff;
        padding: 6px 16px;
        font-size: 15px;
        border-radius: 1rem;
        margin: 0 20px;
        cursor: crosshair;
        transition: .3s;

        &:hover{
            background: var(--color3-2-1);
        }
    }

    p{
        margin-left: 30rem;
        background: var(--color5-4);
        color: #fff;
        border-radius: 1rem;
        padding: 6px 16px;
        display: inline-block;
    }

`;