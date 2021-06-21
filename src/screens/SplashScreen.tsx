import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {SplashScreenNavigationProp} from 'navigation/routes';
import {images} from 'assets/images';

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const {t} = useTranslation(['screen']);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Text>{t('splash.content')}</Text>
      <Image source={images.img_logo} style={styles.imgTablet} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgTablet: {
    width: 232 * 2,
    height: 143 * 2,
  },
});
