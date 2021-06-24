import * as React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,KeyboardAvoidingView,ToastAndroid,ScrollView,ImageBackground} from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import { Header } from 'react-native-elements';


export default class WriteScreen  extends React.Component{
 /*
       <View>
       <Image style={{width:300,height:150,alignSelf:"center",marginTop:40}} source={require('../assets/story.png')}></Image>
       </View>
       */
       goToFairyStory = () => {
        this.props.navigation.navigate('fairyStory');
      };

      goToMoralStory = () => {
        this.props.navigation.navigate('moralStory');
      };

      goToFunnyStory = () => {
        this.props.navigation.navigate('funnyStory');
      };

      goToMythologicalStory = () => {
        this.props.navigation.navigate('mythologicalStory');
      };
    

 render()
 {
   return(
   
    
      <ScrollView>
      <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/story.png')}
                >
                    
      <Text style={{fontSize:30,marginTop:10,textAlign:"center",backgroundColor:"purple",color:"white",
 fontWeight:"bold",padding:20}}>
   STORY HUB - Write Stories
   </Text>
     
       <TouchableOpacity onPress={()=>{
          this.goToFairyStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 20,marginTop : 20}}
source = {require('../assets/fatrytale-story-logo.jpg')}
/>
       </TouchableOpacity>

       
       <TouchableOpacity onPress={()=>{
          this.goToFunnyStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 20,marginTop : 20}}
source = {require('../assets/funny-story-logo.jpg')}

/>
       </TouchableOpacity>


       <TouchableOpacity onPress={()=>{
          this.goToMoralStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 955,marginTop : -620}}
source = {require('../assets/moral-story-logo.jpg')}
/>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{
          this.goToMythologicalStory()
        }}>
       <Image 
style = {{width:600 , height:300 , marginLeft : 955,marginTop : -300}}
source = {require('../assets/mythological-story-logo.png')}
/>
       </TouchableOpacity>

       </ImageBackground>
       </ScrollView>
      
        
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center'
  },
  inputbox: {
    borderColor:"black",
    borderWidth:2,
    fontSize: 20,
    marginLeft:10,
   alignItems:"center",
    color:"black",
    marginTop:5,
    borderRadius:2,
    padding:10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    },
});