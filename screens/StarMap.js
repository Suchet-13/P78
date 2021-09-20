import React,{Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends React.Component{
    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text>Star Map Screen</Text>
                <WebView
                    scalesPageToFit = {true}
                    source = {{uri:'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
                    style = {{marginTop:20,marginBottom:20}}
                />
                <TextInput
                    style = {{height:40, borderColor:'gray',borderWidth:1}}
                    placeholder = "Enter your Latitude"
                    placeholderTextColor = "#ffff#000000"
                    onChangeText={(text)=>{
                        this.setState=({
                            latitude: text
                        })
                    }}
                />
                const{longitude,latitude} = this.state;
                const path = 'https//virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&showgridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
            </View>
        )
    }
}