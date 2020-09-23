import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

const Screen5 = () => {
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
            <View>
               <Image style={{ alignSelf: 'center' }} source={require('../images/promotion.png')} />
            </View>

            <View style={{}}>
               <Text style={{ fontSize: 18, color: '#003BC4', textAlign: 'center' }}>School/College
            </Text>
            </View>


            <View>
               <Text style={{ color: '#332443', fontSize: 12 }}>Name
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Name" />
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12 }}>Address
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Address" />
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12 }}>Contact Details
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Contact Details" />
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12 }}>Education Category
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="Agriculture" value="1" />
                     <Picker.Item label="Mechanical" value="2" />
                     <Picker.Item label="others" value="3" />
                  </Picker>
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12 }}>Board of Education
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="Telangana Board" value="1" />
                     <Picker.Item label="AP Board" value="2" />
                     <Picker.Item label="MP" value="3" />
                  </Picker>
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12}}>Subjects
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="Telugu" value="1" />
                     <Picker.Item label="Maths" value="2" />
                     <Picker.Item label="English" value="3" />
                  </Picker>
               </View>
            </View>
            <View >
               <Text style={{ color: '#332443', fontSize: 12 }}>Teacher Subject Rating
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="1" value="1" />
                     <Picker.Item label="2" value="2" />
                     <Picker.Item label="3" value="3" />
                  </Picker>
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12}}>Gender Category
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="Man/Woman" value="1" />
                     <Picker.Item label="Man/Woman" value="2" />
                     <Picker.Item label="Other" value="3" />
                  </Picker>
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12 }}>City
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="Hyderabad" value="1" />
                     <Picker.Item label="Karimnagar" value="2" />
                     <Picker.Item label="Warangal" value="3" />
                  </Picker>
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12}}>State
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="Telangana" value="1" />
                     <Picker.Item label="AP" value="2" />
                     <Picker.Item label="Other" value="3" />
                  </Picker>
               </View>
            </View>

            <View>
               <Text style={{ color: '#332443', fontSize: 12}}>Experience Required
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="PCI" value="1" />
                     <Picker.Item label="MCA" value="2" />
                     <Picker.Item label="Other" value="3" />
                  </Picker>
               </View>
            </View>

            <View >
               <Text style={{ color: '#332443', fontSize: 12 }}>Employment Type
            </Text>
               <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#7070701A' }}>
                  <Picker
                     selectedValue={selectedValue}
                     style={{ height: 47, width: 308 }}
                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                     <Picker.Item label="Permanent" value="1" />
                     <Picker.Item label="Contract" value="2" />

                  </Picker>
               </View>
            </View>
            <View >
               <Text style={{ color: '#332443',fontSize: 12 }}>Last Date of Application
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="21/08/1992" />
               </View>
            </View>

            <View >
               <Text style={{color: '#332443', fontSize: 12 }}>Tenure
            </Text>
               <View style={{ borderWidth: 1,  height: 47, width: 308 , borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Tenure" />
               </View>
            </View>

            <View >
               <Text style={{color: '#332443', fontSize: 12 }}>Budget
            </Text>
               <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                  <TextInput placeholder="Budget" />
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
export default Screen5;



const styles = StyleSheet.create({
   container: {
      flex: 1,
     borderWidth:10,
    borderRadius:20,
    height:1300,
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

