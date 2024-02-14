import styled from "@emotion/styled";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  th,
  td {
    padding: 0.5rem;
    text-align: left;
    color:#555;
  }

  th {
    border-bottom: 1px solid #7360dfb9;
    color:#7360dfac;
    font-size:1rem;
    font-weight: 800;
  }

  tr:nth-child(even) {
    background-color: #7360df39;
  }
`;