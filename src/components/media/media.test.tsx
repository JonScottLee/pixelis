import { render } from '@testing-library/react'
import { Media } from './media'

describe('Media', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(
      <Media
        image="/wind.jpg"
        content={
          <>
            <h2>Media Pattern</h2>
            <p>Image goes on one side, content goes on the other</p>
          </>
        }
      />
    )

    // Assert
    expect(baseElement).toBeTruthy()
  })
})
