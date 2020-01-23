import {StyleSheet} from 'react-native';


export default StyleSheet.create({

container:{
flexDirection: 'column',
height: 600,
backgroundColor: '#CD2626',
alignItems: 'center'
},

container1:{
 margin: -90,
    height: 500,
 width: 320,
 backgroundColor: 'white',
 justifyContent: 'flex-start',
 flexDirection: 'column'

} ,
menubar:{
height: 190,
width: 360,
backgroundColor: '#8B0000',
alignItems: 'center',
flexDirection: 'column'
}, 

MenubarTop:{
 height: 45,
 width: 360,
 backgroundColor: '#FF8247' ,
 alignItems: 'center',
 justifyContent: 'flex-start'   
},


textmenutop: {
 color: 'white',
 fontWeight: 'bold',
 fontSize: 24   
},


textcontainer1:{
fontWeight: 'bold',
 color: 'black',
 fontSize: 40
},



barra:{
margin: 10,
backgroundColor: '#363636',
height: 1,
width: 290,
flexDirection: 'column'
},

input:{
 margin: 10,
    width: 290,
 height: 40,
 backgroundColor: 'white',
borderWidth: 1,
borderColor: '#FFE4E1'
},


submit:{
    margin: 10,
    width: 290,
 height: 40,
 backgroundColor: '#8B1A1A',
 alignItems: 'center'
},
textsubmit:{
 color: 'white',
 fontWeight: 'bold',
 fontSize: 24   
}


})