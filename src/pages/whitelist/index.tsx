'use client';

import React from 'react';
import { AdminLayout } from '@/src/layout';
import Breadcrumb from '@/src/components/Breadcrumbs/Breadcrumb';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Whitelist: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('/api/invest', data);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getErrorMessage = (error: any): string | undefined => {
    if (typeof error === 'string') {
      return error;
    } else if (error && typeof error.message === 'string') {
      return error.message;
    }
    return undefined;
  };

  return (
    <>
      <AdminLayout>
        <Breadcrumb pageName={['Whitelist']} />
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">
            Let Solaris know you are interested in investing in the Ace Portfolio!
          </h1>
          <p className="mb-4">
            In preparation for the Ace Portfolio offering, Solaris is collecting information from potential investors.
            Let Solaris know you are interested in investing in the Ace Portfolio to be among the first to know when the
            offering is live!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.email)}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  {...register('firstName', { required: 'First Name is required' })}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.firstName)}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  {...register('lastName', { required: 'Last Name is required' })}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.lastName)}</p>}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="taxBenefits" className="block text-gray-700 font-bold mb-2">
                Are you interested in accessing US tax benefits related to Solaris?*
              </label>
              <select
                id="taxBenefits"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('taxBenefits', { required: 'This field is required' })}
              >
                <option value="yes">
                  Yes - I have passive income from other investments such as rental property, limited partnerships, etc.
                  to offset with d
                </option>
                <option value="no">No</option>
              </select>
              {errors.taxBenefits && <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.taxBenefits)}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="investmentAmount" className="block text-gray-700 font-bold mb-2">
                How much would you plan on investing in the Ace Portfolio if given the opportunity to do so?*
              </label>
              <input
                id="investmentAmount"
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('investmentAmount', { required: 'Investment amount is required' })}
              />
              {errors.investmentAmount && (
                <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.investmentAmount)}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="additionalInfo" className="block text-gray-700 font-bold mb-2">
                Tell us more
              </label>
              <textarea
                id="additionalInfo"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('additionalInfo')}
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  id="receiveCommunications"
                  type="checkbox"
                  className="mr-2"
                  {...register('receiveCommunications')}
                />
                <label htmlFor="receiveCommunications" className="text-gray-700">
                  I agree to receive other communications from Plural Energy.
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  id="agreeToStoreData"
                  type="checkbox"
                  className="mr-2"
                  {...register('agreeToStoreData', {
                    required: 'You must agree to store and process your personal data',
                  })}
                />
                <label htmlFor="agreeToStoreData" className="text-gray-700">
                  I agree to allow Plural Energy to store and process my personal data.*
                </label>
              </div>
              {errors.agreeToStoreData && (
                <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.agreeToStoreData)}</p>
              )}
            </div>
            <div className="mb-4">
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
            </div>
            <button type="submit" className="w-full p-2 bg-primary text-white font-bold rounded-md">
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </>
  );
};

export default Whitelist;
