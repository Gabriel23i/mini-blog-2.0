import styled from 'styled-components';

export const Container = styled.div `
    margin-bottom: 4em;

    img {
        position: relative;
        z-index: -1;
        width: 600px;
        max-width: 600px;
        height: 400px;
        max-height: 400px;
    };

    h5 {
        color: #1c1c1c;
        margin: 0.2em 0 0.4rem 0;
        text-decoration:none;
    };

    h5:hover {
        color: rgb(80, 79, 79);
    };

    & .createdBy {
        font-style: italic;
        color: 	#808080;
        font-size: .8em;
        margin-bottom: 1em;
    };

`;

export const Skin = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 600px;
    max-height: 400px;
    
    p {
        visibility: hidden;
        position: absolute;
        color: #fff;
    };
    
    :hover p{
        visibility: visible;
    };
    
    :hover {
        background-image: linear-gradient(to bottom,rgba(0,0,0,.5) ,#423f3f5d);
    };
`;

export const Tags = styled.div `
    margin-bottom: 1.2em;
    display: flex;

    p {
        margin-right: .5em;
    };
`;
