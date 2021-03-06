import { Flex, Heading } from '@chakra-ui/core'

import Utils from '../utils/components_utils'

interface ContentSectionParameters {
  alignment?
  backgroundColor?: string
  children?
  color?: string
  direction?
  title?
}

export default function ContentSection(
  props: ContentSectionParameters
): JSX.Element {
  const alignment = props.alignment ?? 'center'
  const backgroundColor = props.backgroundColor ?? 'blue.500'
  const color = props.color ?? 'white'
  const direction = props.direction ?? 'column'
  const title = props.title

  return (
    <Flex
      alignItems={alignment}
      direction={direction}
      backgroundColor={backgroundColor}
      color={color}
      paddingX={Utils.defaultPaddingX}
      paddingY={Utils.defaultPaddingY}
      textAlign={alignment}
    >
      <Heading color={color} marginBottom={4}>
        {title}
      </Heading>
      {props.children}
    </Flex>
  )
}
