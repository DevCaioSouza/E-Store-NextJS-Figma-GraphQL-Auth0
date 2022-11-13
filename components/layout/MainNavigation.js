import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'

const Navigation = styled.div`
  background-color: #004695;
`

const MainNavigation = () => {
  return (
    <Navigation>
      <div className='topHeader'>
        <div className='imageWrapper'>
          <Link href="/">
            <Image src="/logo.png" height={100} width={240} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          <div className='cartWrapper'>
            <Link href="#">
              <Image src="/carticon.svg" height={24} width={24} alt="cartIcon"/>
            </Link>
          </div>
        </nav>
      </div>
    </Navigation>
  );
};

export default MainNavigation;