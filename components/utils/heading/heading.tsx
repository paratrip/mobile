import { Text, View } from 'react-native';

import { styles } from './heading.styles';

type HeadingProps = {
  type?: 'h1' | 'h2' | 'h3';
  content: string;
};

export default function Heading(props: HeadingProps) {
  const { type = 'h1', content } = props;

  return <Text style={styles[type]}>{content}</Text>;
}
