'use client';

import React, { useEffect, useState } from 'react';
import { AdminLayout } from '@/src/layout';
import Breadcrumb from '@/src/components/Breadcrumbs/Breadcrumb';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProposedOffering from '@/src/components/assets/proposedOffering';
import Link from 'next/link';

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
  const activeClasses = 'bg-primary text-white hover:opacity-100';
  const inactiveClasses = 'bg-gray dark:bg-meta-4 text-black dark:text-white';

  useEffect(() => {
    console.log(router.query.assetId);
  });

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
                  <button className="bg-primary text-white py-2 px-4 rounded-lg mb-2 w-full h-15 font-bold">
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

const asset = {
  id: `66fb2eb7-4eeb-4584-8664-f7addfa042dc`,
  assetName: 'Ace Portfolio',
  assetDescription:
    'Operating solar portfolio equity offering of Solaris Renewable Equity A (aka the Ace Portfolio, the Issuer).',
  companyName: 'Solaris Renewable',
  assetType: 'EQUITY',
  assetClassType: 'SOLAR',
  companyWebsite: 'http://www.google.com',
  assetOverview: {
    developerDetails: `Solaris Energy, Inc. is a Colorado-based solar and storage developer with a long track record of developing, financing, and owning commercial-scale projects around the country. Its projects are contributing to a worldwide shift toward a renewable energy future.
    As part of the company's 15th anniversary, Solaris is inviting the public to share in the economic performance of the clean energy transition from one of its marquee portfolios: Ace Portfolio.`,
    assetOffering: `<p style="margin-left:0px;">
    This offering is for equity interests in a newly formed entity, Solaris Renewable Equity A LLC, also referred to as Ace Portfolio. This newly formed entity will be managed by Solaris Energy, Inc. This is a unique opportunity for the general public to take part in direct energy investing, which was previously primarily accessible only to big banks and fund managers.
</p>
<p style="margin-left:0px;">
    Highlights:
</p>
<ul>
    <li>
        <strong>Immediate returns:</strong> Investors enjoy quarterly income distributions, with the first distribution scheduled for Q4 of 2024.
    </li>
    <li>
        <strong>Contracted Long-term Revenue:</strong> These projects have been operating at 95%+ contracted production since the mid-2010s, with fully contracted revenue streams ranging from 10 to 20 years in remaining length and options to extend many of the revenue contracts.
    </li>
    <li>
        <strong>Diversified Portfolio:</strong> This portfolio includes 21 commercial-scale solar installations located across the United States.
    </li>
    <li>
        <strong>Capital Structure:</strong> The Issuer intends to borrow between $1.9M and $2.3M of secured debt against the portfolio.
    </li>
</ul>
<p style="margin-left:0px;">
    Internal projections show that the Ace Portfolio is projected to deliver ~12% annual dividend yield for the existing contract period, with seasonal variations due to the length of daylight and weather.
</p>
<figure class="image image_resized" style="width:63.88%;">
    <img style="aspect-ratio:2140/950;" src="https://app.plural.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpublic-issuer-media%2Fsolaris%2Fsolaris_projected_yield.png&amp;w=3840&amp;q=75" alt="Solaris' historical and projected yield" width="2140" height="950">
</figure>
<p>
    &nbsp;
</p>
<p style="margin-left:0px;">
    Detailed financials can be found in the <a href="https://docs.google.com/spreadsheets/d/1JMKSRliZld3gijFDcG49xe3iy49FyZ8RBKfj2I-rzXY/edit?usp=sharing"><u>Ace Portfolio Financial Model (click to download)</u></a>. All assumptions available in the “Data, assumptions, and model” below. The Ace Portfolio model is provided as a tool and should not be considered investment advice or a guarnatee of returns. Investors are encouraged to do their own research, analyze data for themselves, and make informed investment decisions.
</p>`,
    target: `<p style="margin-left:0px;">
    The Ace Portfolio will raise debt alongside its equity investment. The target terms of debt are 6.75% interest rate, 24 year term, with debt service payments sculpted to reflect the seasonality of revenue.
</p>
<figure class="image">
    <img style="aspect-ratio:2304/1016;" src="https://app.plural.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpublic-issuer-media%2Fsolaris%2Fsolaris_target_capital_structure.png&amp;w=3840&amp;q=75" alt="Solaris' target capital structure post offering" width="2304" height="1016">
</figure>`,
    proceeds: `The Proceeds from this offering will be used to close the financing of the portfolio purchase price from Solaris Investment Group, the Ace Portfolio's prior owner and a financing partner to Solaris Energy, Inc. Proceeds from this equity raise and a subsequent debt raise will be used to purchase the portfolio, pay related transaction costs, and fund initial working capital.`,
  },
  assetDetails: {
    issuer: {
      about: `Based in Fort Collins, Colorado, and grown from non-profit roots, Solaris Energy, Inc. is an experienced, value-driven solar development, finance, and asset management firm. The company accelerates the widespread deployment of distributed solar energy systems while providing investors with attractive rates of return. Solaris Energy provides solutions to non-residential customers looking to reduce their environmental impact, increase their bottom line, and participate in the worldwide shift to renewable energy. Solaris Energy's dedicated team of passionate individuals has been providing these services since 2008, building a solid track record of proven and cost-effective renewable energy solutions across all sectors of energy consumers.`,
      contractRenew: `Ace Portfolio revenue is contracted under set prices in Power Purchase Agreements (PPAs) for at least the next nine years. On some projects, it is contracted out for 19 years. The majority of contracted revenue is with trusted purchasers such as universities, municipalities, community centers, and more. Most contracts can be extended for another 5 to 10 years after the current contracted term.`,
      maintained: `This portfolio has been expertly managed by Solaris Energy, the historically contracted asset management company. Solaris Investment Group has made major capital improvements in recent years, including, but not limited to, upgrading to cutting-edge, revenue-grade monitoring systems, telecommunications equipment, and modern inverters. Using the latest power inverter standards improves efficiency and profitability for years to come. Every project in the portfolio is insured to protect against damage for weather and other unforeseen events.`,
    },
  },
};
