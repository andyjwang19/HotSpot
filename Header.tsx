import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <View >
            <Image source = {require('./assets/hotspotlogotransparent-pinkyellowblue.png')} resizeMode="contain" style={styles.logoImg} />
        </View>
        <View style={styles.profile} ><Text>PROFILE</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    zIndex:2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width:"100%",
    top:0,
    height:120
  },
  logoImg:{
    width:200,
    top:18,
  },
  profile:{
    position:'absolute',
    right:10,
    top:65
  }
});
