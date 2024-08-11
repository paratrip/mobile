import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './buttons.styled';

type BorderLineButtonProps = {
  type: 'default' | 'border-line';
} & TouchableOpacityProps;

export default function Buttons(props: BorderLineButtonProps) {
  const { type = 'default', children } = props;

  if (type === 'border-line') {
    return (
      <View>
        <TouchableOpacity style={styles['border-line']}>
          <Text style={styles['border-line__text']}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity>{children}</TouchableOpacity>
    </View>
  );
}
