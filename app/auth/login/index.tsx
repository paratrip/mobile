import { Text, View, Touchable, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { logo } from '@/assets/icons';
import SafeAreaContainer from '@/components/utils/sfae-area-container/safe-area-container';
import Buttons from '@/components/utils/buttons/buttons';
import Heading from '@/components/utils/heading/heading';
import KakaoLoginButton from '@/components/login/kakao-login/kakao-login';
import { styles } from './login.styled';

export default function Login() {
  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <View style={styles.container__header}>
          <SvgXml style={styles.header_logo} xml={logo}></SvgXml>

          <View style={styles['header__hading-container']}>
            <Heading content='로그인하고 더 많은 소식을 만나보세요!'></Heading>
          </View>
        </View>

        <KakaoLoginButton />
        <Buttons type='border-line'>이메일로 로그인</Buttons>
      </View>
    </SafeAreaContainer>
  );
}
