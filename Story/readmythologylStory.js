import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput ,Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';
import * as Speech from 'expo-speech';
export default class  readmythologicalStory extends React.Component{

  constructor(props)
  {
    super(props)

    this.state={
      allStories:[],
      dataSource:null,
      search:''
    }
  }
  componentDidMount=async()=>{
    
    const ref = await db.collection("mythology-story").get();
    ref.docs.map(doc=>{
      this.setState({
        allStories:[...this.state.allStories,doc.data()]
      })
    })
  }

  SearchFilterFunction=async()=>{
   
      if(this.state. dataSource!==null)
      {
      const ref = await db.collection("mythology-story").startAfter(this.state. dataSource).limit(10).get()
    
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
        })
      })
    }
    
  }

  Search=async(text)=>{
    var EnteredText = text.split('')
    
    if(EnteredText[0].toUpperCase() === 'Title' && this.state.dataSource !== null)
    {
      const ref = await db.collection("mythology-story").where('title','==',text).startAfter(this.state.dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
    }
    console.log(EnteredText)
  }
 
  render() {
    return (
      <ScrollView>
 <Text style={{fontSize:30,marginTop:10,textAlign:"center",backgroundColor:"purple",color:"white",
 fontWeight:"bold",padding:20}}>
   STORY HUB
   </Text>
   <View>
   <SearchBar
  style={{color:"white"}}
        placeholder="Search Title Here......, Remember while searching the title make sure write in this way(Title : abc) or (Title :  abc)"
        onChangeText={(text)=>{
          this.setState({
            search:text
          })
        }}
        value={this.state.search}
      />
      <TouchableOpacity style={styles.searchButton} onPress={()=>{
               this.Search(this.state.search)
             }}>
            <Text style={{fontSize:15,textAlign:"center",marginTop:10}}>
              Search
            </Text>
          </TouchableOpacity>
   </View>
   

   
   <TouchableOpacity onPress={()=>{
     this.props.navigation.navigate("ReadStory")
  }}>
<Image
style = {{width:200 , height:200 }}
source = {require('../assets/back.png')}
/>
</TouchableOpacity>
      
        {this.state.allStories.map((iteam,index)=>{
          return(
            <View style={{borderBottomWidth:10,marginTop:20,borderColor:"purple"}} key={index}>
                
         
            <Text style={{fontSize : 50,fontWeight:"100",marginLeft:10}}>
              {iteam.title}
            </Text>
            <Text style={{fontSize : 30, textDecorationLine: 'underline',marginLeft:10}}>
              {"Author : " + iteam.author}
            </Text>
             
            
            <Text style={{fontSize : 30,fontWeight:"350",marginTop:20,marginLeft:10}}>
       {iteam.story}
     </Text>

            </View>
           
          )
        }   
        )   
      }
      
      <TouchableOpacity onPress={()=>{
     this.props.navigation.navigate("ReadStory")
  }}>
<Image
style = {{width:200 , height:200 }}
source = {require('../assets/back.png')}
/>
</TouchableOpacity>    
      </ScrollView>
    );
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
     

    }
});