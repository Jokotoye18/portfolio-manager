import React, { ComponentProps, useMemo } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { Text as BaseText } from 'react-native-paper';

type TextProps = ComponentProps<typeof BaseText> & {
  text: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  fontFamily?:
    | 'Heebo-Regular'
    | 'Heebo-Medium'
    | 'Heebo-Bold'
    | 'Heebo-Light'
    | 'Quicksand-Regular'
    | 'Quicksand-Medium'
    | 'Quicksand-Bold'
    | 'Quicksand-Light';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: StyleProp<TextStyle>;
};

export const Text = ({
  text,
  textAlign,
  color = '#1b1a1a',
  fontWeight = '400',
  style,
  ...rest
}: TextProps) => {
  const propsStyle = useMemo(
    () => ({
      color,
      textAlign,
      fontWeight,
    }),
    [color, textAlign, fontWeight],
  );

  return (
    <BaseText style={[propsStyle, style]} {...rest}>
      {text}
    </BaseText>
  );
};
