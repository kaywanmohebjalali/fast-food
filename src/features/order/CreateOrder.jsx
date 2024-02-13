// https://uibakery.io/regex-library/phone-number

import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { postData } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import store from '../../store';
import { clearAllCart } from '../cart/cartSliceRedux';
import { userAddress } from '../user/userRedux.js';
import Loader from '../../ui/Loader';
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const { cart, totalAllCartPrice } = useSelector((store) => store.cart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state == 'submitting';
  const errors = useActionData();
  const dispatch = useDispatch();

  const {
    userName: name,
    address,
    position,
    isLoading,
    isError,
  } = useSelector((store) => store.user);
  const result = withPriority
    ? totalAllCartPrice + totalAllCartPrice * 0.23
    : totalAllCartPrice;

  return (
    <div>
      {isLoading && <Loader />}
      <h2>Ready to order? go!</h2>

      <Form
        method="POST"
        action=""
        className="mx-auto w-2/3 space-y-6 text-black  md:mt-10 md:w-full"
      >
        <div className="mx-auto flex w-10/12 flex-col justify-center md:flex-row md:items-center md:gap-2">
          <label className="opacity-60 md:w-[20%]">First Name</label>
          <input
            defaultValue={name}
            className="input "
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="mx-auto flex w-10/12 flex-col justify-center md:flex-row md:items-center md:gap-2">
          <label className="opacity-60 md:w-[20%]">Phone number</label>
          <input className="input " type="text" name="phone" required />
        </div>
        <div className="mx-auto  !mt-2 flex flex-row items-center justify-center gap-2">
          {errors?.phone && (
            <p className="text-red-500 md:ms-4">{errors.phone}</p>
          )}
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <div className="flex  w-10/12 flex-col justify-center md:flex-row md:items-center md:gap-2">
            <label className="opacity-60 md:w-[20%] ">Address</label>
            <input
              className="input py-2 text-sm"
              type="text"
              name="address"
              required
              defaultValue={address ? address : ''}
            />
          </div>

          <button
            disabled={position ? true : false}
            className="disabled:text-gray-500 "
          >
            <abbr title="get your location">
              <svg
                onClick={() => dispatch(userAddress())}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-6 w-6 ${
                  position ? 'text-gray-500' : 'text-indigo-500'
                } mt-6 cursor-pointer`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </abbr>
          </button>
        </div>
        <div className="mx-auto  !mt-2 flex flex-row items-center justify-center gap-2">
          {isError && <p className="text-red-500 md:ms-4">{isError}</p>}
        </div>

        <div className="flex w-full items-center gap-4">
          <input
            className="h-4 w-4 checked:ring-2 checked:ring-offset-1"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"value={`[${position.latitude}, ${position.longitude}]`}
          />
          <Button style={'w-auto'} disabled={isSubmitting || isLoading}>
            {isSubmitting ? (
              'placing order...'
            ) : (
              <p>
                Order now <span className="ml-2">{formatCurrency(result)}</span>
              </p>
            )}
          </Button>
        </div>
      </Form>
     

    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action(prop) {
  const { request } = prop;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: Boolean(data.priority),
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = 'please give us your current phone number';
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await postData(order);
  newOrder && store.dispatch(clearAllCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
