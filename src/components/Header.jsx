import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <meta name='description' content='Little Lemon restaurant app' />
      <meta name='og:title' content='Little Lemon restaurant app' />
      <meta name='og:description' content='' />
      <meta name='og:image' content='Little Lemon restaurant app' />
      <meta name='author' content='name'></meta>
      <meta name='language' content='english'></meta>
      <meta name='copyright' content='Little Lemon Copyright 2022'></meta>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='format-detection' content='telephone=yes' />
      <meta name='HandheldFriendly' content='true' />
      <Nav />
    </header>
  );
};

export default Header;
