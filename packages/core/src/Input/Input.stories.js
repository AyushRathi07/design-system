import React from 'react'
import { Box, Input, Label, Divider } from '..'

export default {
  title: 'Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Simple styled input component that accepts a color and whether or not to show an error container.',
      },
    },
  },
}

export const InputComponent = () => <Input my={3} />

export const Colors = () => (
  <Box width={400}>
    <Input mb={3} id='input-colors-1' placeholder='No color' />
    <Input mb={3} id='input-colors-2' color='primary' placeholder='Primary' />
    <Input
      mb={3}
      id='input-colors-3'
      color='secondary'
      placeholder='Secondary'
    />
    <Input mb={3} id='input-colors-4' color='warning' placeholder='Warning' />
    <Input mb={3} id='input-colors-5' color='alert' placeholder='Alert' />
    <Input mb={3} id='input-colors-6' color='caution' placeholder='Caution' />
  </Box>
)

export const WithExternalLabel = () => (
  <Box width={400}>
    <Label fontSize={4} htmlFor='sample-input'>
      Label!
    </Label>
    <Input id='sample-input' placeholder='Click the label' />
  </Box>
)

export const WithHelperText = () => (
  <Box width={400}>
    <Box>
      <Label fontSize={4} htmlFor='sample-input'>
        Error text!
      </Label>
      <Input
        id='sample-input'
        placeholder='Click the label'
        helperText={<Input.ErrorText>No soup for you!</Input.ErrorText>}
      />
    </Box>
    <Divider />
    <Box>
      <Label fontSize={4} htmlFor='sample-input-2'>
        Alert text!
      </Label>
      <Input
        id='sample-input'
        placeholder='Click the label'
        helperText={<Input.AlertText>Broccoli? Vile weed!</Input.AlertText>}
      />
    </Box>
    <Divider />
    <Box>
      <Label fontSize={4} htmlFor='sample-input-3'>
        Info text!
      </Label>
      <Input
        id='sample-input'
        placeholder='Click the label'
        helperText={
          <Input.InfoText>But I don&apos;t wanna be a cowboy!</Input.InfoText>
        }
      />
    </Box>
  </Box>
)

WithExternalLabel.story = {
  name: 'With external label',
}
