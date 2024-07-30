'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import { FaTicketAlt, FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import { AiOutlineUserAdd } from 'react-icons/ai';
import styles from '../styles/Home.module.css';

export default function Header() {
  const address = useAddress();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src="/logo.webp" alt="Power Frens Logo" width={128} height={24} className={styles.logoImage} />
        </Link>
        <p className={styles.siteTitle}>Power Frens Beta Site</p>
      </div>
      <nav className={`${styles.navContainer} ${menuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navButton}>
          <FaHome className={styles.icon} />
          Home
        </Link>
        <Link href="/nfts" className={styles.navButton}>
          <FaTicketAlt className={styles.icon} />
          Claim / Obtener
        </Link>
        <Link href="/nfts" className={styles.navButton}>
          <SiEthereum className={styles.icon} />
          Badges / Medallas
        </Link>
        <Link href="https://pwr2tp.mx/road2" className={styles.navButton} target="_blank" rel="noopener noreferrer">
          <AiOutlineUserAdd className={styles.icon} />
          Invite More Frens
        </Link>
      </nav>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}
