import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;
`;