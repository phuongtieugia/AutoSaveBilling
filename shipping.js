app/design/frontend/Theme/theme_name/Magento_Checkout/web/js/view/shipping.js

setShippingInformation: function () {

            if (this.validateShippingInformation()) {
            //custom code
                console.log('setShippingInformation');
                console.log(addressList());
                for (var i = addressList().length; i--;) {
                    if(addressList()[i].isDefaultBilling()){
                        defaultaddress = addressList()[i];
                        console.log(defaultaddress.getKey());
                        checkoutData.setSelectedBillingAddress(defaultaddress.getKey());
                    }
                }
                //end custom code
                quote.billingAddress(null);
                checkoutDataResolver.resolveBillingAddress();
                setShippingInformationAction().done(
                    function () {
                        stepNavigator.next();
                    }
                );
            }
        },
