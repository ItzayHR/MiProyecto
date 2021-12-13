import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Card, Image, Button} from 'react-native-elements';
import { SmiteContext } from '../Context/SmiteContext';
import Logo from '../img/SmiteLogo.png'

const GodsScreen = ({navigation}) => {
    const {gods, AsignarCarril} = useContext(SmiteContext);
    return (
        <>
            <View style={styles.header}>
                <Image
                    source={Logo}
                    style={styles.SmiteLogo}
                />
            </View>
            <View style={styles.Contenedor}>
                <ScrollView>
                    {
                        gods.map((dios,index)=>{
                            return(
                                <Card containerStyle={styles.Personajes} key={index}>
                                        <Card.Title style={styles.nombreDios}>{dios.nombre}</Card.Title>
                                        <Card.Divider style={styles.division}/>

                                        <View style={styles.Dios}>
                                            <Image 
                                                style={styles.imagenDios}
                                                source={{
                                                    uri: `${dios.url}`, 
                                                    
                                                }}
                                            />

                                            {console.log(dios.url)}
                                            <Button
                                                onPress={()=>(
                                                    AsignarCarril(dios),
                                                    navigation.navigate('Info')
                                                )}
                                                key={index}
                                                title="Seleccionar" 
                                            />
                                        </View>
                                </Card>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </>
    )
}

export default GodsScreen

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
    Personajes:{
        backgroundColor:'#1C2332',
        borderColor: '#E5C75C',
        borderWidth: 3,
        width:'80%',
    },
    division:{
        color: '#E5C75C',
        borderBottomWidth: .5,
        borderBottomColor: '#E5C75C',
    },
    nombreDios:{
        color:'#FFF',
        fontSize:20,
    },
    imagenDios:{
        width:350,
        height:450,
    }
})
