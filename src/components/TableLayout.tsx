import styled from "@emotion/styled";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  th,
  td {
    padding: 1rem;
    text-align: left;
  }

  th {
    border-bottom: 1px solid #7360dfb9;
    color:#7360df;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;