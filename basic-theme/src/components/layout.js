import React from 'react';
import layouts from '../tokens/layouts';
import font from '../tokens/font';
import colors from '../tokens/colors';

export default ({ children }) => (
  <section style={{
    display: 'block',
    width: layouts.w650,
    margin: '2rem auto',
    fontFamily: font.fontFamily,
    textAlign: layouts.tCenter,
    border: '1px solid',
    borderColor: colors.secondary 
  }}>
    {children}
  </section>
);