import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const PaymentForm = ({
  checkoutToken,
  nextStep,
  prevStep,
  shippingData,
  handleCaptureCheckout,
  timeout,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const {
        firstName,
        lastName,
        address1,
        email,
        city,
        zip,
        shippingCountry,
        shippingSubdivision,
        shippingOption,
      } = shippingData;
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstName, lastName, email },
        shipping: {
          name: 'International',
          street: address1,
          town_city: city,
          country_state: shippingSubdivision,
          postal_zip_code: zip,
          country: shippingCountry,
        },
        fullFillment: { shipping_method: shippingOption },
        payment: { gateway: 'stripe', stripe: { payment_method_id: paymentMethod.id } },
      };

      handleCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      nextStep();
    }
  };
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={prevStep}>
                  Back
                </Button>
                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
