import React from 'react';
import {View,TextInput,TouchableOpacity,Text} from 'react-native';
import Estilo from './Estilo';

export default class Entrada extends React.Component {

    render(props){
    return (
   <View>
       <TextInput style= {Estilo.input}
onChangeText={props.nome}
autoCapitalize ='none'
placeholder= " Primeiro nome "
placeholderTextColor = 'black'
/>
<TextInput style={Estilo.input}
placeholder= " Idade "
autoCapitalize = 'none'
onChangeText={props.idade}
placeholderTextColor= 'black'
/>
<TouchableOpacity style={Estilo.submit}
onPress={props.submit}
><Text style={Estilo.textsubmit}>Exibir </Text>

</TouchableOpacity>
   </View>
    );
}
}


