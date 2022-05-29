import styles from "styled-components";

export const Button = styles.button`
    background-color: blue;
    border: 1px solid darkblue;
    border-radius: 4px;
    color: white;
    padding: 10px 10px;
    &:hover {
        background-color: darkblue;
    } 
    font-weight: bold;
    font-size: 1em;
    transition: background-color;
    &:disabled {
        background-color: lightgray;
        border: 1px solid lightgray;
    }
`;

export const Label = styles.label`
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Input = styles.input`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    &:focus {
        outline: none;
    }
`;

export const Group = styles.div`
`
