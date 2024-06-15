import { LiveAssetCardProps } from '@/src/types/cards';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

const LiveAssetCard: React.FC<LiveAssetCardProps> = ({
  id,
  assetName,
  assetDescription,
  assetClassType,
  assetType,
}) => {
  const router = useRouter();

  const shortDescription = (description: string) =>
    description.length <= 50 ? description : `${description.slice(0, 50)}....`;

  const redirect = useCallback(() => {
    router.push(`/assets/${id}`);
  }, [router, id]);

  const roundedFullStyles = 'border bg-primary text-white text-sm rounded-full h-6 w-18 text-center';

  return (
    <div
      className="bg-gray-2 rounded-xl text-black p-6 border-graydark hover:border hover:border-primary hover:cursor-pointer"
      onClick={redirect}
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1509389928833-fe62aef36deb?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Asset Image"
          className="rounded-t-xl w-full object-cover h-40"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-sm rounded-full h-6 w-18 text-center flex items-center justify-center">
          Preview
        </div>
      </div>
      <div className="flex flex-row justify-between pt-4">
        <div className="text-2xl font-bold">{assetName}</div>
      </div>
      <div className="text-xl font-thin">{shortDescription(assetDescription)}</div>
      <div className="flex pt-3 col-span-2 pb-4">
        <div className={`${roundedFullStyles} border-secondary bg-secondary`}>
          <span>{assetClassType}</span>
        </div>
        <div className="pl-4">
          <div className={`${roundedFullStyles} border-secondary bg-secondary`}>
            <span>{assetType}</span>
          </div>
        </div>
      </div>
      {[
        ['Estimated Yield', '12.3%'],
        ['Offering Size', '$900,000'],
        ['Min Investment', '$100'],
        ['Term', 'Open Ended'],
      ].map(([label, value], index) => (
        <div key={index} className="flex flex-row justify-between pt-4 pb-1 border-b-2">
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default LiveAssetCard;
