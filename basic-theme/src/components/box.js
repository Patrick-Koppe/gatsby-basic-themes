import React from 'react';
import colors from '../tokens/colors';
import layouts from '../tokens/layouts';

export default ({ children }) => (
  <div style={{
    backgroundColor: colors.primary,
    margin: layouts.center,
    width: layouts.half
  }}
  >{children}</div>
)