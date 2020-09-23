import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

const Screen6 = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 60 }}>
                    <View>
                        <Image style={{ alignSelf: 'center', width: 282, height: 80 }} source={require('../images/poster.png')} />
                    </View>

                    <View style={{}}>
                        <Text style={{ fontSize: 18, color: '#003BC4', textAlign: 'center' }}>
                            Teacher Profile
            </Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Father_Spouse_Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:10}}>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Marital status</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Single" value="1" />
                                    <Picker.Item label="Married" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:10}}>
                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>DOB
            </Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>House/Plot No
            </Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{paddingTop:10}}>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Apartment Name/Locality/Landmark</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
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

                    <View style={{paddingTop:10}}>
                            <Text style={{ color: '#332443', fontSize: 12 }}>ZipCode</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View style={{paddingTop:10}}>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Mobile Number</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View style={{paddingTop:10}}>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Alternate Mobile Number</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View style={{paddingTop:10}}>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Email Id</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View style={{paddingTop:10}}>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Previos Employment</Text>
                           </View>
                           <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                           <Text style={{ color: '#332443', fontSize: 12, top:15}}>From</Text>
                            <View style={{ borderWidth: 1, height: 47, width:100, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                            <Text style={{ color: '#332443', fontSize: 12,top:15 }}>To</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 100, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:10}}>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Experience</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="1.1" value="1" />
                                    <Picker.Item label="2.2" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Subject Rating</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                                    <Picker.Item label="10" value="Male" />
                                    <Picker.Item label="5" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:10}}>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Employment Type</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Agriculture" value="1" />
                                    <Picker.Item label="Other" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Board Of Education</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                                    <Picker.Item label="TS Board" value="Male" />
                                    <Picker.Item label="5" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:10}}>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Education Category</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Agriculture" value="11" />
                                    <Picker.Item label="Pharma" value="21" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#332443', fontSize: 12 }}>Notice Period</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#7070701A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                                    <Picker.Item label="10" value="Male" />
                                    <Picker.Item label="5" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{paddingTop:10}}>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Permanent Address</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View style={{paddingTop:20, flexDirection:'row'}}>
                            <View style={{ borderWidth: 2,borderStyle:'dashed', height: 47, width: 180, borderColor: '#7070701A', borderRadius: 5 , backgroundColor:'#F8FAFC'}}>
                                <TextInput />
                            </View>
                            <TouchableOpacity>
                     <Text style={{ fontWeight:'bold' , top:15, paddingLeft:50 }}>
                        Upload
            </Text>
                  </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Aadhar Number</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: '#332443', fontSize: 12 }}>Refernces</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#7070701A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>


                    <View style={{paddingTop:10}}>
<Text style={{ color: '#332443', fontSize: 12 }}>Achievements</Text>
</View>
                    <View style={{ flexDirection:'row'}}>
                            <View style={{borderWidth: 2,borderStyle:'dashed', height: 47, width: 180, borderColor: '#7070701A', borderRadius: 5 , backgroundColor:'#F8FAFC'}}>
                                <TextInput />
                            </View>
                            <TouchableOpacity>
                     <Text style={{ fontWeight:'bold' , top:15, paddingLeft:50 }}>
                        Upload
            </Text>
                  </TouchableOpacity>
                        </View>

                        <View style={{paddingTop:10}}>
<Text style={{ color: '#332443', fontSize: 12 }}>Awards</Text>
</View>
                        <View style={{ flexDirection:'row'}}>
                            <View style={{ borderWidth: 2,borderStyle:'dashed', height: 47, width: 180, borderColor: '#7070701A', borderRadius: 5 , backgroundColor:'#F8FAFC'}}>
                                <TextInput />
                            </View>
                            <TouchableOpacity>
                     <Text style={{ fontWeight:'bold' , top:15, paddingLeft:50 }}>
                        Upload
            </Text>
                  </TouchableOpacity>
                        </View>

<View style={{paddingTop:10}}>
<Text style={{ color: '#332443', fontSize: 12 }}>Certifications</Text>
</View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{ borderWidth: 2,borderStyle:'dashed', height: 47, width: 180, borderColor: '#7070701A', borderRadius: 5 , backgroundColor:'#F8FAFC'}}>
                                <TextInput />
                            </View>
                            <TouchableOpacity>
                     <Text style={{ fontWeight:'bold' , top:15, paddingLeft:50 }}>
                        Upload
            </Text>
                  </TouchableOpacity>
                        </View>
                        
<View style={{paddingTop:10}}>
<Text style={{ color: '#332443', fontSize: 12 }}>Resume Upload</Text>
</View>
                        <View style={{ flexDirection:'row'}}>
                            <View style={{ borderWidth: 2,borderStyle:'dashed', height: 47, width: 180, borderColor: '#7070701A', borderRadius: 5 , backgroundColor:'#F8FAFC'}}>
                                <TextInput />
                            </View>
                            <TouchableOpacity>
                     <Text style={{ fontWeight:'bold' , top:15, paddingLeft:50 }}>
                        Upload
            </Text>
                  </TouchableOpacity>
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
export default Screen6;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 10,
        borderRadius: 20,
        height: 1800,
        //  width:375,
        borderColor: '#4A00E0',
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

