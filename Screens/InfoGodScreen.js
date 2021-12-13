import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Card, Image, Button} from 'react-native-elements';
import { SmiteContext } from '../Context/SmiteContext';
import Logo from '../img/SmiteLogo.png'
import { Alert } from 'react-native';

const InfoGodScreen = ({navigation}) => {
    const {descripcion, EliminarDescripcion} = useContext(SmiteContext);
    console.log(descripcion._url);
    return (
        <>
            <View style={styles.header}>
                <Image
                    source={Logo}
                    style={styles.SmiteLogo}
                />
            </View>
            <View style={styles.Contenedor}>
                <Text>DESCRIPCION DEL PERSONAJE</Text>
                <Text>{descripcion._nombre}, {descripcion._titulo}</Text>
                <Text>{descripcion._rol}</Text>
                <Text>{descripcion._tipo}</Text>
                <Text>{descripcion._danio}</Text>
            </View>
            <View>
                <Button
                    style={styles.buttonStyle}
                    buttonStyle={{backgroundColor:'green'}}
                    title="Jugar"
                    onPress={()=>(
                        console.log('¡Disfruta tu partida!'),
                        navigation.goBack()
                        )}
                />
            </View>
            <View>
                <Button
                    style={styles.buttonStyle}
                    buttonStyle={{backgroundColor:'red'}}
                    title="Cancelar"
                    onPress={()=>(
                        EliminarDescripcion(),
                        navigation.goBack()
                        )}
                />
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
        flex:1,
        width:'100%',
        backgroundColor:'#1C2332',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:28,
    },
    imagenDios:{
        width:350,
        height:450,
    }
})
