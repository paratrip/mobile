import { SafeAreaView, Platform } from 'react-native';
import { styles } from './safe-area-container.styled';

type SafeAreaContainerProps = {
  children: React.ReactNode;
};

export default function SafeAreaContainer(props: SafeAreaContainerProps) {
  const { children } = props;

  if (Platform.OS === 'ios') {
    return <SafeAreaView>{children}</SafeAreaView>;
  } else {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
  }
}
