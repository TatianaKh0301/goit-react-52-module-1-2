import { Formik } from "formik";
import { FormField } from "components/FormField";
import { Form } from 'components/Form/Form';
import { paymentSchema } from 'validation';

const initialValues = {
    cardHolder: '',
    cardNumber: '',
    cvv:'',
}

export const VisaPaymentForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values);
        setTimeout(() => actions.setSubmitting(false), 2000);
    };

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={paymentSchema}            
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => {
                console.log(isSubmitting);
                return(
                    <Form>
                        <FormField label="Card holder" name="cardHolder" />
                        <FormField label="Card number" name="cardNumber" />
                        <FormField label="CVV" name="cvv" />

                        <button type="submit" disabled={isSubmitting}>                            
                            {isSubmitting ? 'Attempting to pay...' : 'Pay'}                                                   
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
};