import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const IntroScreen = () => {
  return (
    <View>
      <Text style={{fontSize: 48}}>IntroScreen</Text>

      <Text style={styles.title}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </Text>
      <Text style={styles.text}>
        سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        از صنعت چاپ
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'YekanBakh-Fat',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',

    letterSpacing: 0,
    textAlign: 'center',
    color: '#585858',
  },
  text: {
    fontFamily: 'YekanBakh',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#737373',
  },
});

export default IntroScreen;
