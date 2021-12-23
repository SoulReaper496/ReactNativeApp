import react,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Welcome() {
    
    const[name,setName] = useState('dass');

    return(
        <View style={styles.container}>
          <Text>My name is {name}</Text>
          

            </View>

    )

}


