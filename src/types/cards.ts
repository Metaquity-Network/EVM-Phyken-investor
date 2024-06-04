export type AssetOverview = {
  developerDetails: string;
  assetOffering: string;
  target: string | number;
  proceeds: string;
};

export type AssetDetails = {
  issuer: {
    about: string;
    contractRenew: string;
    maintained: string;
  };
};

export type LiveAssetCardProps = {
  id: string;
  assetName: string;
  assetDescription: string;
  companyName: string;
  assetType: string;
  assetClassType: string;
  companyWebsite: string;
  assetOverview: AssetOverview;
  assetDetails: AssetDetails;
};
