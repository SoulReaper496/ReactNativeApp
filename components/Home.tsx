import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,
  ImageBackground } from 'react-native';


const Separator = () => (
  <View style={ styles.separator } />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    
         <View >
        <Text>Some more text</Text>
        <ImageBackground
          source={
           require( '../assets/images/splash.png') 
          }style={styles.image}
          >
          <Text style={{ width: 100, height: 100 }} >
            MOST EXCLUSIVE MATRIMONY
                   SERVICE FOR
                   COMMUNITIES
          </Text>
          </ImageBackground>
      </View>
     
   
    <Separator />
   <View style={styles.fixToText}>
       

        <Button
          style={styles.button}
          title="Login"
          onPress={() => Alert.alert('Left button pressed')}
        />
        
        <Button 
           style={styles.button}
           title="SignUp"
          onPress={() => Alert.alert('Right button pressed')}
        />
         
      </View>
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  image: {
       flex: 1,
      
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    position: "absolute",
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttons: {
    marginBottom: 20,
    padding: 30
  },
    space: {
    width: 20, // or whatever size you need
    height: 20,
  }
 
});

export default App;