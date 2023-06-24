import { render, fireEvent } from '@testing-library/react';
import { Testimonial } from './testimonial';

describe('Testimonial', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(
      <Testimonial
        attribution="Jon Lee"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in venenatis libero, in sollicitudin nunc. Suspendisse sed sem sit amet sapien malesuada auctor. Vestibulum eu fringilla risus."
      />
    );

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
