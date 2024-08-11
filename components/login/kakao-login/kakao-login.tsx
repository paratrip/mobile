import { View, TouchableOpacity, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { kakao } from '@/assets/icons';

import { styles } from './kakao-login.styles';

export default function KakaoLoginButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container__content}>
        <View style={styles.content__logo}>
          <SvgXml xml={kakao} />
        </View>

        <View>
          <Text>카카오 로그인</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
