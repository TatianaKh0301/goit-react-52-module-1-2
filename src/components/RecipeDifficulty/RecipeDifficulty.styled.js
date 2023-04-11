import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 16px;
`;

export const Title = styled.h3`
    margin-bottom: 8px;
`;

export const BadgeList = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Badge = styled.span`
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;

    background-color: ${(props) => {
        return props.active ? 'pink' : 'white';
    }};
`;