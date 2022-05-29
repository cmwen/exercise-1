import styles from "styled-components";

export const Table = styles.table`
    border: 2px solid black;
    width: 100%;
`;

export const TableRow = styles.tr`
    &:nth-child(even) {background: lightblue}
    &:nth-child(odd) {background: #FFF}
`;

export const TableHeader = styles.th`
    text-align: left;
    padding: 10px;
    background-color: #eee;
    color: #111;
    font-weight: bold;
`;

export const TableCell = styles.td`
    text-align: left;
    padding: 10px;
`;
