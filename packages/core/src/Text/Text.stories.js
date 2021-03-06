import React from 'react'
import { Text } from '..'

export default {
  title: 'Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'A low-level component for setting font-size, typographic styles, margin, and color',
      },
    },
  },
}

export const TypographyComponent = () => <Text m={3}>Hello</Text>

export const FontSize = () => (
  <div>
    <Text fontSize={6}>Hello 6</Text>
    <Text fontSize={5}>Hello 5</Text>
    <Text fontSize={4}>Hello 4</Text>
    <Text fontSize={3}>Hello 3</Text>
    <Text fontSize={2}>Hello 2</Text>
    <Text fontSize={1}>Hello 1</Text>
    <Text fontSize={0}>Hello 0</Text>
  </div>
)

FontSize.story = {
  name: 'fontSize',
}

export const TextAlign = () => (
  <div>
    <Text textAlign='left'>Hello Left</Text>
    <Text textAlign='center'>Hello Center</Text>
    <Text textAlign='right'>Hello Right</Text>
  </div>
)

TextAlign.story = {
  name: 'textAlign',
}

export const Regular = () => <Text regular>Hello Regular</Text>

Regular.story = {
  name: 'regular',
}

export const Bold = () => <Text bold>Hello Bold</Text>

Bold.story = {
  name: 'bold',
}

export const Caps = () => <Text caps>Hello Caps</Text>

Caps.story = {
  name: 'caps',
}

export const Italic = () => <Text italic>Hello italic</Text>

Italic.story = {
  name: 'italic',
}

export const Strikethrough = () => <Text.s>Hello Strikethrough</Text.s>

Strikethrough.story = {
  name: 'strikethrough',
}

export const Margin = () => (
  <Text mt={4} mb={2}>
    Hello Margin
  </Text>
)

Margin.story = {
  name: 'margin',
}

export const Color = () => (
  <div>
    <Text color='blue'>Hello Blue</Text>
    <Text color='green'>Hello Green</Text>
  </div>
)

Color.story = {
  name: 'color',
}

export const MinMaxHeight = () => (
  <div>
    <Text color='blue' minHeight={200} minWidth={300} width={1}>
      Hello Blue
    </Text>
    <Text color='green' maxHeight={200} maxWidth={300}>
      Hello Green
    </Text>
  </div>
)

MinMaxHeight.story = {
  name: 'min/maxHeight',
}

export const HideOnLgBreakpoints = () => (
  <div>
    <Text
      color='primary'
      display={[null, null, null, 'none']}
      fontSize={4}
      width={1}
    >
      Hidden text on larger screens
    </Text>
    <Text color='secondary' fontSize={4} width={1}>
      I am always show. But the text above, hides on larger screens.
    </Text>
  </div>
)

HideOnLgBreakpoints.story = {
  name: 'Hide on > lg breakpoints',
}
