import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./img/w_12.png')} style={styles.w12} />
      <View style={styles.rectangle4} />
      <View style={styles.ellipse2} />
      <View style={styles.ellipse2} />
      <Text style={styles.title}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </Text>
      <Text style={styles.text}>
        سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        از صنعت چاپ
      </Text>
      <TouchableOpacity style={styles.rectangle1}>
        <Text style={styles.layer}>ادامه</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
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
  w12: {
    width: 278,
    height: 254,
    borderRadius: 50,
  },
  rectangle1: {
    width: 115,
    height: 36,
    borderRadius: 50,
    backgroundColor: '#0c4daa',
  },
  layer: {
    fontFamily: 'YekanBakh',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  rectangle4: {
    width: 29,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#0caa84',
  },
  ellipse2: {
    width: 12,
    height: 12,
    backgroundColor: '#efefef',
  },
});

export default IntroScreen;
