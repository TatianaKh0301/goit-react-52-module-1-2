import { Component } from "react";
import { Container } from "./PaymentWidget.styled";
import { PaymentMethods } from "components/PaymentMethods";
import { paymentMethods } from "constans";



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
                {selectedMethod === paymentMethods.visa && <div>Visa Form</div>}
                {selectedMethod === paymentMethods.mastercard && <div>Mastercard Form</div>}
                {selectedMethod === paymentMethods.applepay && <div>Applepay Form</div>}
            </Container>
        );
    }
}
