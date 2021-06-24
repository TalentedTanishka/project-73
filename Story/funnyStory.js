import * as React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import { Header } from 'react-native-elements';

export default class funnyStory  extends React.Component{

  constructor(){
    super();
    this.state = {
      title:'',
      author:'',
      story1:'',
      isSearchPressed: '',
    }
  }

  fairystory=async()=>{
    
    db.collection("funny-story").add({
      "author":this.state.author,
    "story":this.state.story1,
    "title":this.state.title
   })

    this.setState({
      title:'',
      author:'',
      story1:''
    })
}
 /*
       <View>
       <Image style={{width:300,height:150,alignSelf:"center",marginTop:40}} source={require('../assets/story.png')}></Image>
       </View>
       */

 render()
 {
   return(
   
     <KeyboardAvoidingView behavior="padding" enabled >
          <Text style={{fontSize:30,marginTop:10,textAlign:"center",backgroundColor:"purple",color:"white",
 fontWeight:"bold",padding:20}}>
   STORY HUB
   </Text>
     <TextInput 
             style=
             {[styles.inputbox ,
             {fontWeight:"bold"}]} 
             onChangeText={(title)=>{
               this.setState({
                 title:title,
                 isSearchPressed: false,
               })
             }}
             value={this.state.title} 
             placeholder="Title of the Story"
           
             />
             
             <TextInput 
             style= {styles.inputbox} 
             onChangeText={(author)=>{
               this.setState({
                
                 author:author,
               
                 isSearchPressed: false,
               })
             }}
             value={this.state.author}
              placeholder="Author"
              />
     
             <TextInput 
             style= {[styles.inputbox ,{height:170}]} 
             onChangeText={(story1)=>{
               this.setState({
                 story1:story1,
                 isSearchPressed: false,
               })
             }}
             value={this.state.story1} 
             placeholder="Write your Story" 
             multiline={true}
             />
             
             <TouchableOpacity 
             style=
             {{
               backgroundColor:"pink",
               borderRadius:10,
               borderWidth:1,
               width:90,
               marginTop:20,
               marginLeft:10,
               alignSelf:"center"
           }}
           onPress={()=>{
             /*
             ToastAndroid.showWithGravityAndOffset(
               " Congratulation! :) YOUR STORY IS SUBMITED ",
               ToastAndroid.LONG,
               ToastAndroid.BOTTOM,
               10,
           100
             );
             */
            alert(" Congratulation! :) YOUR STORY IS SUBMITED ",)
             this.setState({ isSearchPressed: true });
             this.fairystory();  
           }}
           
           >
               <Text style={{fontSize:20,textAlign:"center"}}>
                 Submit
               </Text>
             </TouchableOpacity>
     
     <TouchableOpacity onPress={()=>{
     this.props.navigation.navigate("WriteStory")
  }}>
<Image
style = {{width:200 , height:200 }}
source = {require('../assets/back.png')}
/>
</TouchableOpacity>
     </KeyboardAvoidingView>
       
        
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
});