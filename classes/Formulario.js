import React from 'react';
import {View,TextInput,TouchableOpacity,Text,props} from 'react-native';
import Estilo from './Estilo';
import {CaixaVermelha,Menu,Titulo,Barra} from './Box';
export  class Formulario  extends React.Component{
    state ={

        nome: '',
        idade: 1
       }
        
       Nome =(text)=> {
       this.setState({nome: text})
       
       } 
       Idade =(int)=> {
        this.setState({idade: int})   
       }
       
       Submit = (no,ida) =>{
        alert(" Nome: "+ no + " Idade: "+ ida);   
       }

    render(){

    
return(

<View style={Estilo.container}>
<Menu/>
<CaixaVermelha/>

<View style={Estilo.container1}>
<Titulo/>  
<Barra/>  
            <TextInput style= {Estilo.input}
            onChangeText={this.Nome}
            autoCapitalize ='none'
            placeholder= " Primeiro nome "
            placeholderTextColor = 'black'
            />
           <TextInput style={Estilo.input}
            placeholder= " Idade "
            autoCapitalize = 'none'
            onChangeText={this.Idade}
            placeholderTextColor= 'black'
            />
            <TouchableOpacity style={Estilo.submit}
            onPress={()=> this.Submit(this.state.nome , this.state.idade)}
            ><Text style={Estilo.textsubmit}>Exibir </Text>
   
            </TouchableOpacity>
            
            </View>







</View>


        
   

);


}
}
//<Text  style={Estilo.textcontainer1}>Formulário </Text>
//<View style={Estilo.barra}/>


//<View style={Estilo.MenubarTop}>
//<Text style={Estilo.textmenutop}>Menu </Text>
//</View>