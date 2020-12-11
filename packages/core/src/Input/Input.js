import React from 'react'
import styled from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import { Text } from '../Text'
import {
  applyVariations,
  getPaletteColor,
  borders,
  deprecatedColorValue,
} from '../utils'

const StyledInput = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: ${getPaletteColor('text.light')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space} ${fontSize};
  ${applyVariations('Input')}
`

const INPUT_ERROR_TEXT = 'InputErrorText'
const INPUT_ALERT_TEXT = 'InputAlertText'
const INPUT_INFO_TEXT = 'InputInfoText'

export const Input = (props) => {
  const { helperText, color, ...restProps } = props

  const getBorderColor = (helperText) => {
    if (!helperText) {
      return color
    }
    switch (helperText.type.displayName) {
      case INPUT_ERROR_TEXT:
        return 'error.base'
      case INPUT_ALERT_TEXT:
        return 'alert.base'
      case INPUT_INFO_TEXT:
        return 'text.light'
    }
  }

  const borderColor = getBorderColor(helperText)
  return (
    <>
      <StyledInput {...restProps} color={borderColor} />
      {helperText}
    </>
  )
}

const HelperText = styled(Text).attrs(() => ({
  mt: 2,
  fontSize: 1,
}))``

Input.ErrorText = (props) => (
  <HelperText color='error.base' {...props}>
    {props.children}
  </HelperText>
)

Input.AlertText = (props) => (
  <HelperText color='alert.base' {...props}>
    {props.children}
  </HelperText>
)

Input.InfoText = (props) => (
  <HelperText color='text.light' {...props}>
    {props.children}
  </HelperText>
)

Input.ErrorText.displayName = INPUT_ERROR_TEXT
Input.AlertText.displayName = INPUT_ALERT_TEXT
Input.InfoText.displayName = INPUT_INFO_TEXT

Input.displayName = 'Input'
Input.isField = true
Input.defaultProps = {
  fontSize: [2, null, 1],
}
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  /**
   * Display text below the input and set error color on input
   */
  helperText: PropTypes.node,
  ...borders.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
}

export default Input
