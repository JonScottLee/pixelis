import { render, fireEvent } from '@testing-library/react';
import { NotFound } from './not-found';

describe('Not Found', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<NotFound />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
