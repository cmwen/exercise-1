import styles from "styled-components";

export const PageWrapper = styles.div`
 padding: 40px;
 display: flex;
 flex-direction: column;
 gap: 10px;
 `;

export const ActionBar = styles.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #eee;
    border-bottom: 2px solid #333;
    flex-wrap: wrap;
`;
