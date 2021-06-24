import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput,Image,ImageBackground  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';
import * as Speech from 'expo-speech';
import Untitled from '../assets/story.png'

export default class ReadScreen extends React.Component{

  goToReadFairyStory = () => {
    this.props.navigation.navigate('readfairyStory');
  };

  goToReadMoralStory = () => {
    this.props.navigation.navigate('readmoralStory');
  };

  goToReadFunnyStory = () => {
    this.props.navigation.navigate('readfunnyStory');
  };

  goToReadMythologicalStory = () => {
    this.props.navigation.navigate('readmythologicalStory');
  };
 
render()
{
return(

  
  <View>
    <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/story.png')}
                >
   <Text style={{fontSize:30,marginTop:10,textAlign:"center",backgroundColor:"purple",color:"white",
fontWeight:"bold",padding:20}}>
STORY HUB - Read Stories
</Text>
  
    <TouchableOpacity onPress={()=>{
       this.goToReadFairyStory()
     }}>
    <Image 
style = {{width:600 , height:300 , marginLeft : 20,marginTop : 20}}
source = {require('../assets/fatrytale-story-logo.jpg')}
/>
    </TouchableOpacity>

    
    <TouchableOpacity onPress={()=>{
       this.goToReadFunnyStory()
     }}>
    <Image 
style = {{width:600 , height:300 , marginLeft : 20,marginTop : 20}}
source = {require('../assets/funny-story-logo.jpg')}
/>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>{
       this.goToReadMoralStory()
     }}>
    <Image 
style = {{width:600 , height:300 , marginLeft : 955,marginTop : -620}}
source = {require('../assets/moral-story-logo.jpg')}
/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{
          this.goToReadMythologicalStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 955,marginTop : -300}}
source = {require('../assets/mythological-story-logo.png')}
/>
       </TouchableOpacity>
       </ImageBackground>
    </View>
   
)
}
}
  
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    storybutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      alignSelf: 'center',
      borderRadius:10,
     
    },

    searchButton:{
      borderWidth:1,
      height:50,
      width:60,
      backgroundColor:'yellow',
      marginTop:-49,
      marginLeft:1000,
      borderRadius:10
    },
    speechbutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      borderRadius:10,
    width:200,
     
    },
   readbutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      borderRadius:10,
      width:200,
     

    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      },
});