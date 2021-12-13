import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Card, Image, Button} from 'react-native-elements';
import { SmiteContext } from '../Context/SmiteContext';
import Logo from '../img/SmiteLogo.png'

const InfoGodScreen = ({navigation}) => {
    const {descripcion, EliminarDescripcion} = useContext(SmiteContext);
    return (
        <>
            <View style={styles.header}>
                <Image
                    source={Logo}
                    style={styles.SmiteLogo}
                />
            </View>
            <View style={styles.Contenedor}>
                <Text>{}</Text>
            </View>
        </>
    )
}

export default InfoGodScreen

const styles = StyleSheet.create({
    header:{
        flex:.2,
        width:'100%',
        backgroundColor:'#1C2332',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#E5C75C',
        borderWidth:5,
    },
    SmiteLogo:{
        width:350,
        height:100,
    },
    Contenedor:{
        flex:1  ,
        width:'100%',
        backgroundColor:'#1C2332',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:28,
    },
})
