import { render, fireEvent } from '@testing-library/react';
import { Tout } from './tout';

describe('Tout', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Tout
      className="bg-[url('/wind.jpg')]"
      content={
        <>
          <h2>Foo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            accumsan mauris a interdum euismod. Sed auctor turpis lacinia purus
            vehicula lobortis.
          </p>
        </>
      }
    />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
