// components/nft-card.tsx
import React from 'react';
import styles from '../styles/CustomCard.module.css';
import { NFT } from '@thirdweb-dev/sdk';

interface NFTCardProps {
  nft: NFT;
  quantity: number;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, quantity }) => {
  return (
    <div className={styles.glassCard}>
      <div className={styles.nftMediaContainer}>
        <model-viewer
          src={nft.metadata.animation_url || nft.metadata.image}
          alt={nft.metadata.name}
          ar
          auto-rotate
          camera-controls
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className={styles.nftCardContent}>
        <h2>{nft.metadata.name}</h2>
        <p>{nft.metadata.description}</p>
        <p>Quantity Owned: {quantity}</p>
      </div>
    </div>
  );
};

export default NFTCard;
