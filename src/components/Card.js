import React from 'react';
import { View,Dimensions } from 'react-native';


let screenWidth= Dimensions.get('window').width;
let screenHeight= Dimensions.get('window').height;
const Card = (props) => {
       
    return (
        <View style={styles.containerHorizontal}>
            {props.children}
        </View>
    );
};

const styles = {
    containerVertical: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    containerHorizontal: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        width: screenWidth,
        height:screenHeight,
        marginTop: 20
    }
}

export default Card;