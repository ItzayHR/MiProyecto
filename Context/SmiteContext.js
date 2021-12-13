import React, {createContext, useState} from 'react';
import { Alert } from 'react-native';

export const SmiteContext = createContext();

const SmiteProvider = (props) => 
{
    const [descripcion, setDescripcion] = useState({});
    const [gods, setGods] = useState([
        { codigo:1, nombre:"Neith", titulo:"Weaver of Fate", rol:"Hunter", tipo:"Ranged", danio:"Physical", url:'https://static.wikia.nocookie.net/smite_gamepedia/images/5/5b/SkinArt_Neith_Default.jpg/revision/latest/scale-to-width-down/750?cb=20160505052627' },
        { codigo:2, nombre:"Ymir", titulo:"Father of the Frost Giants", rol:"Guardian", tipo:"Melee", danio:"Magical", url:'https://static.wikia.nocookie.net/smite_gamepedia/images/1/17/SkinArt_Ymir_Default.jpg/revision/latest/scale-to-width-down/750?cb=20160505053040' },
        { codigo:3, nombre:"Ra", titulo:"Sun God", rol:"Mage", tipo:"Ranged", danio:"Magical", url:'https://static.wikia.nocookie.net/smite_gamepedia/images/0/0e/SkinArt_Ra_Default.jpg/revision/latest/scale-to-width-down/750?cb=20160505052727' },
        { codigo:4, nombre:"Guan Yu", titulo:"Saint of War", rol:"Warrior", tipo:"Melee", danio:"Physical", url:'https://static.wikia.nocookie.net/smite_gamepedia/images/5/50/SkinArt_GuanYu_Default.jpg/revision/latest/scale-to-width-down/750?cb=20160505052355' },
        { codigo:5, nombre:"Thor", titulo:"God of Thunder", rol:"Assassin", tipo:"Melee", danio:"Physical", url:'https://static.wikia.nocookie.net/smite_gamepedia/images/7/7e/SkinArt_Thor_Default.jpg/revision/latest/scale-to-width-down/750?cb=20160505052941' },
    ]);

    const AsignarCarril = (dios) =>
    {
        let carril;

        if (dios.rol === "Hunter")
        {
            carril = "ADC";
        }
        else if (dios.rol === "Guardian")
        {
            carril = "SUPP";
        }
        else if (dios.rol === "Mage")
        {
            carril = "MID";
        }
        else if (dios.rol === "Warrior")
        {
            carril = "SOLO";
        }
        else if (dios.rol === "Assassin")
        {
            carril = "JG";
        }

        const tempGod={
            _codigo:dios.codigo,
            _nombre:dios.nombre,
            _titulo:dios.titulo,
            _rol:dios.rol,
            _tipo:dios.tipo,
            _danio:dios.danio,
            _carril:carril,
        }
        setDescripcion(tempGod);
    }

    const EliminarDescripcion = () =>
    {
        setDescripcion({});
    }

    return (
        <SmiteContext.Provider
            value={{
                descripcion,
                gods,
                AsignarCarril,
                EliminarDescripcion
            }}>
            {props.children}
        </SmiteContext.Provider>
    );
}

export default SmiteProvider;
