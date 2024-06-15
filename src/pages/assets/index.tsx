'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AdminLayout } from '@/src/layout';
import LiveAssetCard from '@/src/components/cards/liveAssetCard';
import Breadcrumb from '@/src/components/Breadcrumbs/Breadcrumb';
import asset from '../../../public/example/sample.json';

const Assets: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);
  const [activeAssets, setActiveAssets] = useState<any[]>([]);
  const activeClasses = 'bg-primary text-white hover:opacity-100';
  const inactiveClasses = 'bg-gray dark:bg-meta-4 text-black dark:text-white';

  useEffect(() => {
    getActiveAssets();
  }, []);

  const getActiveAssets = async () => {
    setActiveAssets(asset);
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
              <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
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
