'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AdminLayout } from '@/src/layout';
import LiveAssetCard from '@/src/components/cards/liveAssetCard';
import Breadcrumb from '@/src/components/Breadcrumbs/Breadcrumb';

const Assets: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);
  const [activeAssets, setActiveAssets] = useState<any[]>([]);
  const activeClasses = 'bg-primary text-white hover:opacity-100';
  const inactiveClasses = 'bg-gray dark:bg-meta-4 text-black dark:text-white';

  useEffect(() => {
    getActiveAssets();
  }, []);

  const getActiveAssets = async () => {
    setActiveAssets(assets);
  };

  return (
    <>
      <AdminLayout>
        <Breadcrumb pageName={['Opportunities']} />
        <div className="rounded-sm p-4 dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5 w-[95%]">
          <div className="flex mb-7.5 2xsm:flex-col-3  2xsm:w-[45%] md:flex-row gap-1 pb-5 dark:border-strokedark">
            <Link
              href=""
              className={`rounded-full py-3 px-3 text-sm font-medium hover:bg-primary hover:opacity-80 hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                openTab === 1 ? activeClasses : inactiveClasses
              }`}
              onClick={() => setOpenTab(1)}
            >
              Open
            </Link>
          </div>

          <div>
            <div className={`leading-relaxed ${openTab === 1 ? 'block' : 'hidden'}`}>
              <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-2">
                {activeAssets.length > 0 ? (
                  activeAssets.map((asset, key) => {
                    return <LiveAssetCard {...asset} key={key} />;
                  })
                ) : (
                  <span>No active assets to invest</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Assets;

const assets = [
  {
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
  },
];
