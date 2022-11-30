import React, { Component, useState } from "react";
import { Switch, View, Text, TouchableOpacity, useColorScheme } from "react-native";

export default function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const colors = {
    dark: '#222520',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  }

  // TouchableOpacity method call for functioning keys
  const calculate = (title)=>{
    if (title =='C'){
      setResult('');

    }else if (title=='DL'){
      setResult(result.substring(0,result.length - 1));
    }else if (title=='='){
      setResult(eval(result));

    }else setResult(result + title);

  }

  // Component button
  const Btn = ({ title,type }) => (
    <TouchableOpacity
    onPress={() =>{calculate(title)}}
    style={{
      padding: 12, borderRadius: 8, elevation: 2,
      backgroundColor: getColor(colors.light1, colors.dark1), height: 68, width: 68, margin: 13
    }}>
      <Text style={{ fontSize: 35, color: "black", textAlign: "center", textAlignVertical: 'center'
       ,color:getBtnColor(type)
    
    }}>{title}</Text>
    </TouchableOpacity>
  )
  const getBtnColor=(type)=>{
    if(type =='top'){
    return '#35FBD6'
    } else if(type=='right'){
      return '#EB6363'
    }else if (type=='number'){
      return getColor(colors.dark,colors.light)
    }

  }

  const getColor = (light, dark) => darkTheme ? dark : light;

  return (
    <View style={{
      height: '100%',
      width: '100%',
      paddingVertical: 15,
      backgroundColor: getColor(colors.light, colors.dark),
      alignItems: "center"
    }}>
      <Switch value={darkTheme} onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.light2, colors.dark2)} trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
      <Text style={{
        fontSize: 38, color: getColor(colors.dark, colors.light),
        width: '100%', textAlign: "right",
        paddingRight: 18,
        paddingBottom:18,
        marginTop:170,
        textAlign:"right"
      
      }}>{result}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" ,justifyContent:"center",
    backgroundColor:getColor(colors.light1,colors.dark1),borderTopRightRadius:18,
    borderTopLeftRadius:18}}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top"/>
        <Btn title="/" type="top"/>
        <Btn title="%" type="top"/>
        <Btn title="7" type="number" />
        <Btn title="8" type="number"/>
        <Btn title="9" type="number"/>
        <Btn title="+" type="number"/>
        <Btn title="4" type="number"/>
        <Btn title="5" type="number"/>
        <Btn title="6" type="number"/>
        <Btn title="*" type="right"/>
        <Btn title="1" type="number"/>
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="-" type="right"/>
        <Btn title="00" type="number"/>
        <Btn title="0" type="number"/>
        <Btn title="." type="number"/>
        <Btn title="=" type="right"/>

      </View>
    </View>
  )

}