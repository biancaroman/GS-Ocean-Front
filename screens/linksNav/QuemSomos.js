import { View, Text } from "react-native";
import React from 'react';
import Navbar from '../../components/NavBar';

export default function QuemSomos (){
    return(
        <View style={{ flex: 1 }}>
            <Navbar logoSource={require('../../assets/logos/Logo1.png')} />
            <Text>Pagina Quem Somos</Text>
        </View>
    )
}