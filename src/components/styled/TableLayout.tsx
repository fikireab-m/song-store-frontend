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
    border-bottom: 1px solid var(--primary-light);
    color:var(--primary-light);
    font-size:1rem;
    font-weight: 800;
    @media only screen and (max-width: 460px) {
    & {
        font-size:0.75rem;
    }
  }}

  tr:nth-child(even) {
    background-color: #7360df24;
  }
`;