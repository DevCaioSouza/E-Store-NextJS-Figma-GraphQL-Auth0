import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainNavigation = () => {
  return (
    <div>
     <div className='topHeader'>
      <div className='imageWrapper'>
        <Link href="/">
            <Image src="/logo.png" height={100} width={240} alt="logo"/>
        </Link>
      </div>
    </div>
  </div>
  );  
};

export default MainNavigation;