import React from 'react';
import {View,Text} from 'react-native';
import Estilo from './Estilo';


export function CaixaVermelha(){
return <View style={Estilo.menubar}>
       
</View> 
}

export function Menu (){

    return <View style={Estilo.MenubarTop}>
    <Text style={Estilo.textmenutop}>Menu </Text>
    </View>
}

export function Titulo (){
 return <Text  style={Estilo.textcontainer1}>Formulário </Text>

 }

 export function Barra (){
   return  <View style={Estilo.barra}/>     
 }