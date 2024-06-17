'use client';

import React, { useEffect, useState } from 'react';
import { AdminLayout } from '@/src/layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useToast } from '@/src/hooks/useToast';
import { ToastContainer } from 'react-toastify';
import { CountryDropdown } from 'react-country-region-selector';

const Waitlist: React.FC = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [country, setCountry] = useState('India');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({ mode: 'onBlur' });
  const { address, isConnected } = useAccount();

  useEffect(() => {
    setValue('nationality', country);
  }, [country, setValue]);

  useEffect(() => {
    setValue('walletAddress', address);
  }, [address, setValue]);

  useEffect(() => {
    if (!isConnected) {
      router.push('/assets');
    }
  }, [isConnected, router]);

  const onSubmit = async (data: any) => {
    if (isSubmitting) return; // Prevent multiple submits
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/waitlist/send-invite', data);
      if (response.status === 200) {
        showToast('Your details have been added to the waitlist', { type: 'success' });
        router.push('coming-soon');
      } else {
        showToast(response.data.message, { type: 'error' });
      }
    } catch (error: any) {
      showToast(error.response.data.message, { type: 'error' });
    } finally {
      setIsSubmitting(false);
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
    <AdminLayout>
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">
          Let RF Solar Farm know you are interested in investing in the RF Solar Farm!
        </h1>
        <p className="mb-4">
          In preparation for the RF Solar Farm offering, RF Solar Farm is collecting information from potential
          investors. Let RF Solar Farm know you are interested in investing in the RF Solar Farm to be among the first
          to know when the offering is live!
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
            {errors.email && <p className="text-red text-sm mt-1">{getErrorMessage(errors.email)}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('firstName', { required: 'First Name is required' })}
              />
              {errors.firstName && <p className="text-red text-sm mt-1">{getErrorMessage(errors.firstName)}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                Last Name*
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('lastName', { required: 'Last Name is required' })}
              />
              {errors.lastName && <p className="text-red text-sm mt-1">{getErrorMessage(errors.lastName)}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="nationality" className="block text-gray-700 font-bold mb-2">
                Your Nationality
              </label>
              <CountryDropdown
                classes="w-full p-2 border border-gray-300 rounded-md"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>

            <div>
              <label htmlFor="investmentAmount" className="block text-gray-700 font-bold mb-2">
                How much would you plan on investing?*
              </label>
              <input
                id="investmentAmount"
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('investmentAmount', {
                  required: 'Investment amount is required',
                  min: {
                    value: 100,
                    message: 'Investment amount must be at least $100',
                  },
                })}
              />
              {errors.investmentAmount && (
                <p className="text-red text-sm mt-1">{getErrorMessage(errors.investmentAmount)}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="telegramId" className="block text-gray-700 font-bold mb-2">
                Your Telegram Username
              </label>
              <input
                id="telegramId"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="@phykennetowrk"
                {...register('telegramId', { required: 'Telegram Id is required' })}
              />
              {errors.telegramId && <p className="text-red text-sm mt-1">{getErrorMessage(errors.telegramId)}</p>}
            </div>
            <div>
              <label htmlFor="twitterId" className="block text-gray-700 font-bold mb-2">
                Your Twitter Username
              </label>
              <input
                id="twitterId"
                type="text"
                placeholder="@phyken_network"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register('twitterId', { required: 'Twitter id is required' })}
              />
              {errors.twitterId && <p className="text-red text-sm mt-1">{getErrorMessage(errors.twitterId)}</p>}
            </div>
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
                I agree to receive other communications from Phyken Network.
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
                I agree to store and process my personal data.<sup className="text-red font-extrabold">*</sup>
              </label>
            </div>
            {errors.agreeToStoreData && (
              <p className="text-red text-sm mt-1">{getErrorMessage(errors.agreeToStoreData)}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full p-2 text-white font-bold rounded-md ${!isValid ? 'bg-[#7FCE98]' : 'bg-primary'}`}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </AdminLayout>
  );
};

export default Waitlist;
