import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

const Screen7 = () => {
   const [selectedValue, setSelectedValue] = useState("java");
   return (
      <ScrollView
         style={{ flex: 1 }}
      >
         <View style={styles.container}>
<View style={{top:60}}>
            <View>
               <Image style={{alignSelf: 'center', width:282, height:80}} source={require('../images/poster.png')} />
            </View>
            

            <View style={{marginTop:20}}>
               <Text style={{ fontSize: 18, color: '#003BC4', textAlign: 'center' }}>School/College
            </Text>
            </View>


            <View style={{paddingTop:20}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>School_College Name
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Name" />
               </View>
            </View>

            <View style={{paddingTop:20}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>Society Name
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Address" />
               </View>
            </View>

            <View style={{paddingTop:20}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>House Number
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Contact Details" />
               </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:10}}>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>City</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Karimnagar" value="1" />
                                    <Picker.Item label="Hyd" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>State</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                                    <Picker.Item label="Telangana" value="Male" />
                                    <Picker.Item label="AP" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Branch</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>PinCode</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{paddingTop:20}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>Registration Number
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput />
               </View>
            </View>

            <View  style={{paddingTop:10}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>BOE
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="BOE" value="01" />
                     <Picker.Item label="2" value="23" />
                     
                  </Picker>
               </View>
            </View>

            <View style={{paddingTop:10}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>Contact_Person
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput />
               </View>
            </View>

            <View style={{paddingTop:10}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>Principal_Name
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput />
               </View>
            </View>

            <View style={{paddingTop:10}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>Secretary_Name
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput />
               </View>
            </View>

            <View style={{paddingTop:10}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>Total No Of Strength
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput />
               </View>
            </View>

            <View style={{paddingTop:10}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>No Of Teaching_Staff
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput />
               </View>
            </View>


            <View style={{paddingTop:10}}>
<Text style={{ color: '#332443', fontSize: 12 }}>Photo Upload</Text>
</View>

            <View style={{ flexDirection:'row'}}>
                
                            <View style={{ borderWidth: 2, height: 47, width: 180, borderColor: '#7070701A', borderRadius: 5 , backgroundColor:'#F8FAFC', borderStyle:'dashed'}}>
                                <TextInput />
                            </View>
                            <TouchableOpacity>
                     <Text style={{ fontWeight:'bold' , top:15, paddingLeft:50 }}>
                        Upload
            </Text>
                  </TouchableOpacity>
                        </View>

                        <View  style={{paddingTop:10}}>
               <Text style={{ color: '#332443', fontSize: 12 }}>Classes
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="" value="" />
                     <Picker.Item label="" value="" />
                     
                  </Picker>
               </View>
            </View>










            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
               <View style={{ marginRight: 30 }}>
                  <TouchableOpacity>
                     <Text style={{ color: '#2575FC', marginTop: 10 }}>
                        Cancel
            </Text>
                  </TouchableOpacity>
               </View>

               <View style={{ marginLeft: 60 }}>
                  <TouchableOpacity>
                     <Text style={styles.button}>
                        Submit
            </Text>
                  </TouchableOpacity>
               </View>
            </View>


            </View>

         </View>
      </ScrollView>

   );
}
export default Screen7;



const styles = StyleSheet.create({
   container: {
      flex: 1,
     borderWidth:10,
    borderRadius:20,
    height:1400,
   //  width:375,
    borderColor:'#4A00E0',
      alignItems: "center"
   },
   button: {
      color: 'white',
      padding: 15,
      borderRadius: 5,
      paddingLeft: 50,
      // bottom: 20,
      borderColor: 'black',
      width: 150,
      backgroundColor: '#2575FC'
   }
});

