import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import "./payment.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PaymentCheckoutCart from "../../Components/PaymentCheckoutCart/PaymentCheckoutCart";
import { Button, Spinner } from "@material-tailwind/react";

const Payment = () => {
  const fullNameValidationMessage = 'Enter Full Name';
  const addressValidationMessage = 'Enter Address';
  const cityValidationMessage = 'Enter City';

  const Products = useSelector((state: RootState) => state.mtSupplies.products);
  const [debitCard, setDebitCard] = useState({
    cardNumber: '',
    name: '',
    validThru: '',
    cvc: '',
  });

  const [form, setForm] = useState({
    email: '',
    CR: '',
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    Phone: '',
  });

  const [isValidate, setIsValidate] = useState({
    email: false,
    fullName: false,
    address: false,
    city: false,
    phone: false,
  });
  const [countries, setCountries] = useState([{ name: '', code: '' }]);
  const [value, setValue] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [emailValidationMessage, setEmailValidationMessage] = useState('Enter an email');

  useEffect(() => {
    let price = 0;
    const cartItems = Products;
    cartItems.map((item) => {
      price += +item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [Products]);

  useEffect(() => {
    if (totalAmt <= 20) {
      setShippingCharge(2);
    } else if (totalAmt <= 40) {
      setShippingCharge(4);
    } else if (totalAmt > 41) {
      setShippingCharge(8);
    }
  }, [totalAmt]);

  useEffect(() => {
    setLoading(true);
    const fetchCountries = () => {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data => {
          setLoading(false);
          const countryList = data.map(country => ({
            name: country.name.common,
            code: country.cca2,
          }));
          const filteredCountryList = countryList.filter(item => item?.code === 'GB');

          setCountries(countryList);
          setForm((prevState) => ({
            ...prevState,
            CR: filteredCountryList[0].code,
          }))
        }))
        .catch((error) => {
          console.log(error);
        }
        );
    };

    fetchCountries();
  }, []);

  const handleUpdateForm = (field: string, value: string) => {
    const newFormState = { ...form, [field]: value };
    setForm(newFormState);
  };

  const handleBlurForm = (field: string, value: string) => {
    if (field === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailRegex.test(value);
      setIsValidate((prevState) => ({
        ...prevState,
        email: !isValid,
      }));
      if (isValid) {
        setEmailValidationMessage('');
      } else {
        setEmailValidationMessage(!value ? 'Enter an email' : 'Enter a Valid Email');
      }
    }
    else {
      setIsValidate((prevState) => ({
        ...prevState,
        [field]: !value ? true : false,
      }));
      setEmailValidationMessage('');
    }
  };

  const handleInputChange = (field: string, e: any) => {
    let formattedValue = '';
    if (field === 'cardNumber') {
      const input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
      const groups = input.match(/.{1,4}/g); // Split into groups of 4 digits
      formattedValue = groups ? groups.join(" ") : input; // Join groups with a space
    }
    else if (field === 'name') {
      const input = e.target.value.replace(/\d/g, "");;
      formattedValue = input;
    }
    else if (field === 'validThru') {
      let input = e.target.value.replace(/\D/g, ""); // Remove non-digits
      // Format as MM/YY
      if (input.length > 2) {
        input = `${input.slice(0, 2)}/${input.slice(2)}`;
      }
      formattedValue = input;
    }
    else if (field === 'cvc') {
      const input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
      formattedValue = input;
    }
    const newFormState = { ...debitCard, [field]: formattedValue };
    setDebitCard(newFormState);
  };

  const phoneInputHandler = (value) => {
    setValue(value);
  };

  const phoneInputBlurHandler = (target) => {
    const blurValue = target.value;
    setValue(blurValue);
    if (value && isValidPhoneNumber(blurValue)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };

  const handleFormValidation = () => {
    let isValid = true;
    let isEmail = false;
    let isFullName = false;
    let isAddress = false;
    let isCity = false;
    let isPhone = false;
    let newValidateForm = { ...isValidate };
    if (emailValidationMessage) {
      setEmailValidationMessage(emailValidationMessage);
      isEmail = true;
      isValid = false;
    }
    if (!form?.fullName) {
      isFullName = true;
      isValid = false;
    }
    if (!form?.address) {
      isAddress = true;
      isValid = false;
    }
    if (!form?.city) {
      isCity = true;
      isValid = false;
    }
    if (value.length === 0 || value.length === 3) {
      isPhone = true;
      isValid = false;
    }
    newValidateForm = { ...isValidate, email: isEmail, fullName: isFullName, address: isAddress, city: isCity, phone: isPhone };
    return { isValid, newValidateForm }
  };

  const beforeCompleteOrder = () => {
    const { isValid, newValidateForm } = handleFormValidation();
    if (isValid) {
      alert('Payment Successfull')
      completeOrder();
    } else {
      setIsValidate(newValidateForm);
      if (newValidateForm.phone) {
        setIsPhoneValid(false);
      }
      alert('Something Went Wrong');
    }
  };

  const completeOrder = () => {
    const payload = {
      Email: form?.email,
      Country: form?.CR,
      FullName: form?.fullName,
      Address: form?.address,
      City: form?.city,
      PostalCode: form?.postalCode,
      Phone: form?.Phone,
      CardNumber: debitCard?.cardNumber,
      HolderName: debitCard?.name,
      ValidThru: debitCard?.validThru,
      CVC: debitCard?.cvc,
    };
    // call API
  };

  return (
    <React.Fragment>
      <Header />
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Spinner color="blue" className="h-16 w-16" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        </div>
      )}
      <div className={`flex justify-center w-full h-full relative ${loading ? "pointer-events-none overflow-hidden" : ""}`}>
        <div className="w-[80rem] border-r border-b border-gray-300" >
          <div className="sm:ml-0 md:ml-0 lg:ml-20 xl:ml-40 px-10 py-10">
            <div className="text-2xl font-semibold" >Contact</div>
            <div className="mt-2">Email</div>
            <input
              className={`w-full text-sm h-12 p-2 rounded-md mt-2 outline-none ${isValidate.email ? 'border-2 border-red-600' : 'border border-gray-300'} focus:border-2 focus:border-[#0082E7]`}
              placeholder="Enter Email"
              value={form?.email}
              onChange={(event) => handleUpdateForm('email', event.target.value)}
              onBlur={(event) => handleBlurForm('email', event.target.value)}
            />
            {isValidate.email && <small className="text-red-600 font-semibold" >{emailValidationMessage}</small>}
            <div className="mt-10 text-2xl font-semibold" >Delivery</div>
            <div className="mt-2" >Country/Region</div>
            <select value={form?.CR} className="w-full p-2 rounded-md mt-2 outline-none border border-gray-300" >
              {countries && countries?.map((item, index) => (
                <option key={index} value={item?.code}>{item?.name}</option>
              ))}
            </select>
            <div className="mt-2" >Full Name</div>
            <input
              className={`w-full text-sm h-12 p-2 rounded-md mt-2 outline-none ${isValidate.fullName ? 'border-2 border-red-600' : 'border border-gray-300'} focus:border-2 focus:border-[#0082E7]`}
              placeholder="Enter Full Name"
              value={form?.fullName}
              onChange={(event) => handleUpdateForm('fullName', event.target.value)}
              onBlur={(event) => handleBlurForm('fullName', event.target.value)}
            />
            {isValidate.fullName && <small className="text-red-600 font-semibold" >Enter Full Name</small>}
            <div className="mt-2">Address</div>
            <input
              className={`w-full text-sm h-12 p-2 rounded-md mt-2 outline-none ${isValidate.address ? 'border-2 border-red-600' : 'border border-gray-300'} focus:border-2 focus:border-[#0082E7]`}
              placeholder="Enter Address"
              value={form?.address}
              onChange={(event) => handleUpdateForm('address', event.target.value)}
              onBlur={(event) => handleBlurForm('address', event.target.value)}
            />
            {isValidate.address && <small className="text-red-600 font-semibold" >Enter Address</small>}
            <div className="mt-2" >City</div>
            <input
              className={`w-full text-sm h-12 p-2 rounded-md mt-2 outline-none ${isValidate.city ? 'border-2 border-red-600' : 'border border-gray-300'} focus:border-2 focus:border-[#0082E7]`}
              placeholder="Enter City"
              value={form?.city}
              onChange={(event) => handleUpdateForm('city', event.target.value)}
              onBlur={(event) => handleBlurForm('city', event.target.value)}
            />
            {isValidate.city && <small className="text-red-600 font-semibold" >Enter City</small>}
            <div className="mt-2" >Postal code <span className="text-gray-400" >(optional)</span></div>
            <input
              className="w-full text-sm h-12 p-2 rounded-md mt-2 outline-none border border-gray-300"
              placeholder="Enter Postal Code"
              value={form?.postalCode}
              onChange={(event) => handleUpdateForm('postalCode', event.target.value)}
              onBlur={(event) => handleBlurForm('postalCode', event.target.value)}
            />
            <div className="mt-2">Phone</div>
            <PhoneInput
              international
              className={`phoneInput PhoneInputInput mt-2 border ${!isPhoneValid ? 'border-red-600' : ''}`}
              focusInputOnCountrySelection
              value={value}
              onChange={(event) => phoneInputHandler(event)}
              onBlur={(event) => phoneInputBlurHandler(event?.target)}
              defaultCountry="GB"
            />
            {!isPhoneValid && (
              <small className="text-red-600 font-semibold">
                Please enter a valid phone number.
              </small>
            )}
            <div className="mt-10 text-2xl font-semibold" >Payment</div>
            <div className="mt-2 text-sm text-gray-500">All transactions are secure and encrypted.</div>
            <div className="mt-10 text-2xl font-semibold" >Debit - Credit Card</div>
            <div className="flex flex-col items-start space-y-2">
              <label htmlFor="card" className="text-gray-700 font-medium mt-2">
                Card Number
              </label>
              <input
                id="card"
                type="text"
                value={debitCard?.cardNumber}
                onChange={(event) => handleInputChange('cardNumber', event)}
                maxLength={19}
                placeholder="Card Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              />
              <label htmlFor="card" className="text-gray-700 font-medium mt-2">
                Name
              </label>
              <input
                id="card"
                type="text"
                value={debitCard?.name}
                onChange={(event) => handleInputChange('name', event)}
                maxLength={20}
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              />
              <div className="flex gap-4" >
                <div>
                  <label htmlFor="card" className="text-gray-700 font-medium mt-2">
                    Valid Thru
                  </label>
                  <input
                    id="card"
                    type="text"
                    value={debitCard?.validThru}
                    onChange={(event) => handleInputChange('validThru', event)}
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label htmlFor="card" className="text-gray-700 font-medium mt-2">
                    CVC
                  </label>
                  <input
                    id="card"
                    type="text"
                    value={debitCard?.cvc}
                    onChange={(event) => handleInputChange('cvc', event)}
                    maxLength={3}
                    placeholder="CVC"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <Button
              fullWidth
              className="bg-[#0082E7] font-titleFont mt-10"
              children={'Complete Order'}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder={undefined}
              onClick={beforeCompleteOrder}
            />
          </div>
        </div>
        <div className="w-[80rem] border-b border-gray-300">
          <div className="px-10 py-10 sm:mr-0 md:mr-0 lg:mr-40 xl:mr-80" >

            {Products && Products.map((item, index) => (
              <PaymentCheckoutCart
                key={index}
                imgSrc={item?.imgSrc}
                quantity={item?.quantity}
                Name={item?.Name}
                price={item?.price}
                id={item?.id} />
            ))}

            <div className="flex justify-between mt-20" >
              <div className="text-sm font-medium" >Subtotal - {Products.length} Items</div>
              <div className="text-sm font-medium" >£{totalAmt.toFixed(2)}</div>
            </div>
            <div className="flex justify-between mt-5" >
              <div className="text-sm font-medium" >Shipping</div>
              <div className="text-sm font-medium" >£{shippingCharge}</div>
            </div>
            <div className="flex justify-between mt-5" >
              <div className='font-semibold text-xl' >Total</div>
              <div className='font-semibold text-xl'>£{(totalAmt + shippingCharge).toFixed(2)}</div>
            </div>

          </div>


        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Payment;