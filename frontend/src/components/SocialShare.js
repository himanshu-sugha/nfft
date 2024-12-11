import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const SocialShare = ({ nft }) => {
  const nftUrl = window.location.href + '/nft/' + nft.id; // Generate URL to the NFT's page

  return (
    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
      <FacebookShareButton url={nftUrl} quote={`Check out this amazing NFT: ${nft.name}`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={nftUrl} title={`Check out this amazing NFT: ${nft.name}`}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={nftUrl} title={`Check out this amazing NFT: ${nft.name}`}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
