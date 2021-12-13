import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Header, Card, Image, Button} from 'react-native-elements';
import { SmiteContext } from '../Context/SmiteContext';
import Logo from '../img/SmiteLogo.png'

const GodsScreen = ({navigation}) => {
    const {gods, AsignarCarril} = useContext(SmiteContext);
    return (
        <ScrollView>
            <View style={styles.header}>
                <Image
                    source={Logo}
                    style={styles.SmiteLogo}
                />
            </View>
            <View style={styles.Contenedor}>
                    {
                        gods.map((dios,index)=>{
                            return(
                                <Card containerStyle={styles.Personajes} key={index}>
                                        <Card.Title>{dios.nombre}</Card.Title>
                                        <Card.Divider/>
                                </Card>
                            )
                        })
                    }
            </View>
        </ScrollView>
    )
}

export default GodsScreen

const styles = StyleSheet.create({
    header:{
        flex:1,
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
        flex:5,
        width:'100%',
        backgroundColor:'#1C2332',
        justifyContent:'center',
        alignItems:'center',
    },
    Personajes:{
        backgroundColor:'#1C2332',
        borderColor: '#E5C75C',
        width:'75%',
    },
})
