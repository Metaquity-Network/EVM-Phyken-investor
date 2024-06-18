'use client';

import React, { useEffect, useState } from 'react';
import { AdminLayout } from '@/src/layout';
import LiveAssetCard from '@/src/components/cards/liveAssetCard';
import Breadcrumb from '@/src/components/Breadcrumbs/Breadcrumb';
import asset from '../../../public/example/sample.json';

const Assets: React.FC = () => {
  const [activeAssets, setActiveAssets] = useState<any[]>([]);

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
          <div>
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
      </AdminLayout>
    </>
  );
};

export default Assets;
