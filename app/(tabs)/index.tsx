import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function introducePage() {
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Hùng!</ThemedText >
        <HelloWave />
      </ThemedView>
      <ThemedView >
        <ThemedText style={styles.nameContainer}>
          Em tên là Vương Trí Hùng 22110153 
          Sinh ngày 5/1/2004
          SV UTE
        </ThemedText>
      </ThemedView>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    fontSize: 20,
    color: '#3498db',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
