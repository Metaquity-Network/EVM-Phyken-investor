'use client';

import React, { useEffect, useState } from 'react';
import { AdminLayout } from '@/src/layout';
import Breadcrumb from '@/src/components/Breadcrumbs/Breadcrumb';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProposedOffering from '@/src/components/assets/proposedOffering';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import { useToast } from '@/src/hooks/useToast';
import sampleAsset from '../../../../public/example/sample.json';

interface TagProps {
  label: string;
  color: 'blue' | 'darkBlue' | 'green' | 'gray';
  icon?: React.ReactNode;
  link?: string;
}

const Tag = ({ label, color, icon, link }: TagProps) => {
  const baseStyles = 'rounded-full text-white px-3 py-1 text-sm font-semibold mr-2 mb-2 flex items-center';
  const colorStyles = {
    blue: 'bg-meta-3',
    darkBlue: 'bg-meta-6',
    green: 'bg-meta-5',
    gray: 'bg-meta-4',
  };

  return (
    <span className={`${baseStyles} ${colorStyles[color]} ${link ? 'hover:cursor-pointer' : ''}`}>
      {link ? (
        <a href={link} target="_blank" className="flex items-center">
          {icon && <span className="mr-1">{icon}</span>}
          {label}
        </a>
      ) : (
        <>
          {icon && <span className="mr-1">{icon}</span>}
          {label}
        </>
      )}
    </span>
  );
};

const FractionalizeAsset: React.FC = () => {
  const router = useRouter();
  const [openTab, setOpenTab] = useState(1);
  const { isConnected } = useAccount();
  const { showToast } = useToast();
  const [asset, setAsset] = useState(sampleAsset[0]);
  const activeClasses = 'bg-primary text-white hover:opacity-100';
  const inactiveClasses = 'bg-gray dark:bg-meta-4 text-black dark:text-white';

  useEffect(() => {
    console.log(router.query.assetId);
  });

  const interested = () => {
    if (isConnected) {
      router.push('/waitlist');
    } else {
      showToast('Please connect your wallet', { type: 'error' });
    }
  };

  return (
    <>
      <AdminLayout>
        <Breadcrumb pageName={['Opportunities', 'Asset Details']} />

        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <img
              src="https://www.greenbiz.com/sites/default/files/styles/16_9_cropped/public/2022-09/FloatingSolar_setsoPhoto_sstock1470.jpg?itok=kdsSpnrx"
              alt="Solar Portfolio"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
              <h1 className="text-4xl font-bold text-white mb-2">{asset.assetName}</h1>
              <p className="text-lg text-gray-300 mb-4 text-white">{asset.assetDescription}</p>
              <div className="flex space-x-2">
                <Tag label={asset.companyName} color="blue" />
                <Tag label={asset.assetType} color="darkBlue" />
                <Tag label={asset.assetClassType} color="green" />
                <Tag
                  label="WEBSITE"
                  color="gray"
                  icon={<FaExternalLinkAlt className="w-4 h-4" />}
                  link={asset.companyWebsite}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row mt-4">
            <div className="flex-1 lg:mr-4">
              <div className="flex mb-7.5 2xsm:flex-col-3 2xsm:w-[45%] md:flex-row gap-1 pb-5 dark:border-strokedark">
                <Link
                  href=""
                  className={`rounded-full py-3 px-3 text-sm font-medium hover:bg-primary hover:opacity-80 hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                    openTab === 1 ? activeClasses : inactiveClasses
                  }`}
                  onClick={() => setOpenTab(1)}
                >
                  Overview
                </Link>
                <Link
                  href=""
                  className={`rounded-full py-3 px-3 text-sm font-medium hover:bg-primary hover:opacity-80 hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                    openTab === 2 ? activeClasses : inactiveClasses
                  }`}
                  onClick={() => setOpenTab(2)}
                >
                  Asset Details
                </Link>
                <Link
                  href=""
                  className={`rounded-full py-3 px-3 text-sm font-medium hover:bg-primary hover:opacity-80 hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                    openTab === 3 ? activeClasses : inactiveClasses
                  }`}
                  onClick={() => setOpenTab(3)}
                >
                  Additional Details
                </Link>
              </div>
              <div>
                <div className={`leading-relaxed ${openTab === 1 ? 'block' : 'hidden'}`}>
                  <div className="">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <h4 className="text-xl font-medium mb-4">About the developer</h4>
                    <span>{asset.assetOverview.developerDetails}</span>
                    <br />
                    <h4 className="text-xl font-medium mb-4 pt-4"> The Offering</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetOverview.assetOffering }}
                    ></div>
                    <br />
                    <h4 className="text-xl font-medium mb-4 pt-4"> Target Capital Structure</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetOverview.target }}
                    ></div>
                  </div>
                </div>
                <div className={`leading-relaxed ${openTab === 2 ? 'block' : 'hidden'}`}>
                  <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-2">
                    <span>No active sdfsdf to invest</span>
                  </div>
                </div>
                <div className={`leading-relaxed ${openTab === 3 ? 'block' : 'hidden'}`}>
                  <div>
                    <div className="p-6 bg-gray-2 rounded-2xl shadow-md w-full">
                      <h4 className="text-l font-bold mb-4 pt-4"> Regulatory Disclosure</h4>
                      <span>This is in preparation of the offering going live. At this time:</span>{' '}
                      <span>
                        No money or other consideration is being solicited, and if sent in response, will not be
                        accepted. No offer to buy the securities can be accepted, and no part of the purchase price can
                        be received until the offering statement is filed and only through the platform of an
                        intermediary (funding portal or broker-dealer). A person's indication of interest includes no
                        obligation or commitment of any kind.
                      </span>
                      <span>
                        Past performance may not be indicative of future results. Different types of investments involve
                        varying degrees of risk, and there can be no assurance that the future performance of any
                        specific investment, investment strategy, or product made reference to directly or indirectly in
                        this offering will be profitable, equal to any corresponding indicated historical performance
                        level(s), or be suitable for your portfolio. Due to various factors, including changing market
                        conditions, the content may no longer be reflective of current opinions or positions. Moreover,
                        you should not assume that any discussion or information contained in this offering page serves
                        as the receipt of, or as a substitute for, personalized investment advice from Plural Everything
                        Inc. or any of its Subsidiaries, Solaris Energy Inc. or any of its Subsidiaries, Solaris
                        Investment Group LLC or any of its Subsidiaries, Texture Capital, or any other affiliated
                        entities or partners of the aforementioned entities. To the extent that a reader has any
                        questions regarding the applicability of any specific issue discussed above to their individual
                        situation, they are encouraged to consult with the professional advisor of their choosing.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="sticky top-25">
                <ProposedOffering />
                <div className="p-6 text-center mt-4">
                  <button
                    className="bg-primary text-white py-2 px-4 rounded-lg mb-2 w-full h-15 font-bold"
                    onClick={interested}
                  >
                    Express Interest in This Offering
                  </button>
                  <p>Get in line!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </AdminLayout>
    </>
  );
};

export default FractionalizeAsset;
