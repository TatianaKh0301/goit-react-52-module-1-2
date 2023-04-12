import { Component } from "react";
import { Container } from "./PaymentWidget.styled";
import { PaymentMethods } from "components/PaymentMethods";
import { paymentMethods } from "constans";
import { VisaPaymentForm } from "components/VisaPaymentForm";
import { MasterCardPaymentForm} from "components/MasterCardPaymentForm";



export class PaymentWidget extends Component {
    state = {
        selectedMethod: null,
    };

    selectPaymentMethod = (method) => {
         this.setState({
            selectedMethod: method,            
        })       
    };

    render() {  
        const { selectedMethod } = this.state;

        return(
            <Container>
                <PaymentMethods 
                    selected={selectedMethod} 
                    onSelect={this.selectPaymentMethod}
                />
                {selectedMethod === paymentMethods.visa && <VisaPaymentForm/>}
                {selectedMethod === paymentMethods.mastercard && <MasterCardPaymentForm />}
                {selectedMethod === paymentMethods.applepay && <div>Applepay Form</div>}
            </Container>
        );
    }
}
