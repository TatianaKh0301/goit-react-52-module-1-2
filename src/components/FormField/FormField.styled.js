import { Field as FormikField, ErrorMessage as ErrorMessageFormik} from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Field = styled(FormikField)`
    padding: 8px;
    font: inherit;
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
    color: red;
`;