import { render } from '@testing-library/react'
import { TextField } from './text-field'

describe('Text Field', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(
      <TextField
        label="Disabled"
        disabled
        id="disabled"
        helperText="Enter first name"
      />
    )

    // Assert
    expect(baseElement).toBeTruthy()
  })
})
