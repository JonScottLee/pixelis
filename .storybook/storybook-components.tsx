import React, { FC } from 'react';

export const RowWrapper: FC<
  React.PropsWithChildren<{ style?: React.CSSProperties }>
> = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export const ColWrapper: FC<
  React.PropsWithChildren<{ style?: React.CSSProperties }>
> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    {children}
  </div>
);
