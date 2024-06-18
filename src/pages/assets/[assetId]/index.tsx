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
import Cookies from 'js-cookie';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

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

  const interested = () => {
    if (isConnected) {
      if (Cookies.get('server-auth')) {
        router.push('/waitlist');
      } else {
        showToast('Please sign the transaction', { type: 'info' });
      }
    } else {
      showToast('Please connect your wallet', { type: 'error' });
    }
  };

  const solarImages = [
    'https://images.unsplash.com/photo-1509389928833-fe62aef36deb?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <>
      <AdminLayout>
        <Breadcrumb pageName={['Opportunities', 'Asset Details']} />

        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509389928833-fe62aef36deb?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Solar Portfolio"
              className="w-full h-64 object-cover sm:h-40"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
              <h1 className="text-4xl font-bold text-white mb-2 sm:text-2xl">{asset.assetName}</h1>
              <p className="text-lg text-gray-300 mb-4 text-white sm:text-sm">{asset.assetDescription}</p>
              <div className="flex flex-wrap space-x-2">
                <Tag label={asset.companyName} color="blue" />
                <Tag label={asset.assetType} color="darkBlue" />
                <Tag label={asset.assetClassType} color="green" />
                <Tag
                  label="WEBSITE"
                  color="gray"
                  icon={<FaExternalLinkAlt className="w-4 h-4" />}
                  // link={asset.companyWebsite}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="block lg:hidden mt-4">
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
                <Carousel showThumbs={false} className="mt-4">
                  {solarImages.map((src, index) => (
                    <div key={index}>
                      <img src={src} alt={`Solar Image ${index + 1}`} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-4">
            <div className="flex-1 lg:mr-4">
              <div className="flex mb-7.5 flex-wrap gap-1 pb-5 dark:border-strokedark">
                <Link
                  href="#"
                  className={`rounded-full py-3 px-3 text-sm font-medium hover:bg-primary hover:opacity-80 hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                    openTab === 1 ? activeClasses : inactiveClasses
                  }`}
                  onClick={() => setOpenTab(1)}
                >
                  Overview
                </Link>
                <Link
                  href="#"
                  className={`rounded-full py-3 px-3 text-sm font-medium hover:bg-primary hover:opacity-80 hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                    openTab === 2 ? activeClasses : inactiveClasses
                  }`}
                  onClick={() => setOpenTab(2)}
                >
                  Asset Details
                </Link>
                <Link
                  href="#"
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
                    <h2 className="text-2xl font-bold mb-4 sm:text-xl">Overview</h2>
                    <h4 className="text-xl font-medium mb-4 sm:text-lg">About the developer</h4>
                    <span>{asset.assetOverview.developerDetails}</span>
                    <br />
                    <h4 className="text-xl font-medium mb-4 pt-4 sm:text-lg"> The Offering</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetOverview.assetOffering }}
                    ></div>
                    <br />
                    <h4 className="text-xl font-medium mb-4 pt-4 sm:text-lg"> Target Capital Structure</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetOverview.target }}
                    ></div>
                  </div>
                </div>
                <div className={`leading-relaxed ${openTab === 2 ? 'block' : 'hidden'}`}>
                  <div className="">
                    <h2 className="text-2xl font-bold mb-4 sm:text-xl">Asset Details</h2>
                    <h4 className="text-xl font-medium mb-4 sm:text-lg">About asset issuer</h4>
                    <span>{asset.assetDetails.issuer.about}</span>
                    <br />
                    <h4 className="text-xl font-medium mb-4 pt-4 sm:text-lg"> Contracted Revenue</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetDetails.issuer.contractRenew }}
                    ></div>
                    <br />
                    <h4 className="text-xl font-medium mb-4 pt-4 sm:text-lg"> Expertly Maintained and Insured</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetDetails.issuer.maintained }}
                    ></div>
                  </div>
                </div>
                <div className={`leading-relaxed ${openTab === 3 ? 'block' : 'hidden'}`}>
                  <div className="">
                    <h2 className="text-2xl font-bold mb-4 sm:text-xl">Additional Details</h2>
                    <h4 className="text-xl font-medium mb-4 sm:text-lg">Secondary Market</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetDetails.secondaryMarket }}
                    ></div>
                    <br />
                    <h4 className="text-xl font-medium mb-4 pt-4 sm:text-lg">Risk Factors to Consider</h4>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: asset.assetDetails.riskFactor }}
                    ></div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-full lg:w-1/3 mt-4 lg:mt-0">
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
                  <Carousel showThumbs={false} className="mt-4">
                    {solarImages.map((src, index) => (
                      <div key={index}>
                        <img src={src} alt={`Solar Image ${index + 1}`} />
                      </div>
                    ))}
                  </Carousel>
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
