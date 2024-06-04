import React from 'react';

const ProposedOffering: React.FC = () => {
  return (
    <div className="p-6 bg-gray-2 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Proposed Offering</h2>

      <div className="mb-4 border-b border-gray-300 pb-4 flex justify-between">
        <h3 className="text-lg font-semibold">Projected Year 1 Yield</h3>
        <div className="flex flex-col text-right">
          <p className="text-xl">12%</p>
          <a href="#" className="text-meta-5 text-sm">
            Learn more about projected returns
          </a>
        </div>
      </div>

      <div className="mb-4 border-b border-gray-300 pb-4 flex justify-between">
        <h3 className="text-lg font-semibold">Tax Benefits</h3>
        <div className="flex flex-col text-right">
          <p>Pending analysis - to be announced</p>
          <a href="#" className="text-meta-5 text-sm">
            Coming soon, contact us for more details
          </a>
        </div>
      </div>

      <div className="mb-4 border-b border-gray-300 pb-4 flex justify-between">
        <h3 className="text-lg font-semibold">Distributions</h3>
        <p className="text-right">Quarterly</p>
      </div>

      <div className="mb-4 border-gray-300  flex justify-between">
        <h3 className="text-lg font-semibold">Liquidity</h3>
        <div className="flex flex-col text-right">
          <p>Auction Based</p>
          <a href="#" className="text-meta-5 text-sm">
            Learn more about secondary markets
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProposedOffering;
