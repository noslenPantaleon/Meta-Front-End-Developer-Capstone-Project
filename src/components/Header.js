import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <meta name='description' content='your text goes here' />
      <meta name='description' />
      <meta name='title' />
      <meta name='author' content='name'></meta>
      <meta name='language' content='english'></meta>
      <meta name='copyright' content='Copyright 2022'></meta>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='format-detection' content='telephone=yes' />
      <meta name='HandheldFriendly' content='true' />
      <Nav />
    </header>
  );
};

export default Header;
