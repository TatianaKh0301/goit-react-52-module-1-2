import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 16px;
`;

export const Button = styled.button`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    min-width: 120px;
    padding: 8px 16px;
    border: 1px solid ${(p) => 'black'};
    border-radius: 4px;
    text-transform: capitalize;
    font: inherit;
    cursor: pointer;
    background-color: ${(p) => {
        return p.selected ? 'orange' : 'white';
    }};
    color: ${(p) => 'black'};
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
        border-color 250ms ease-in-out;
    :hover {
        border-color: ${(p) => 'orange'};
    }
`;