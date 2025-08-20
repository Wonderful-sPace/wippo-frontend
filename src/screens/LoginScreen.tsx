import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const handleKakaoLogin = () => {
    console.log('Kakao login clicked');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <View style={styles.container}>
      <Button title="카카오 로그인" onPress={handleKakaoLogin} />
      <View style={{ marginVertical: 10 }} />
      <Button title="구글 로그인" onPress={handleGoogleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
