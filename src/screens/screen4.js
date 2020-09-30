import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen4 = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 42 }}>
                    <View>
                        <Image style={{ alignSelf: 'center', width: 282, height: 80 }} source={require('../images/poster.png')} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Image style={{ alignSelf: 'center'}} source={require('../images/promotion.png')} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            School
            </Text>
                    </View>




                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Name Of the School</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Complete Postal Address</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Conatct Details</Text>
                        <View style={{flexDirection:'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                       <View style={{marginLeft:10,top:8}}><Icon name="phone" size={30} color="#A7A7A7"/></View> 
                        <TextInput style={{width:'100%'}} />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Curriculum Followed</Text>
                            <View style={{ borderWidth: 1, width: 308, borderRadius: 5, borderColor: '#95989A'}}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Curriculum" value="1" />
                                    <Picker.Item label="Curriculum2" value="2" />
                                </Picker>
                            </View>
                        </View>

                        
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{color: '#909090', fontSize: 12 }}>Single Point of Contact Details</Text>
                    </View>


                    <View style={{ paddingTop: 5 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Number</Text>
                        <View style={{flexDirection:'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                       <View style={{marginLeft:10,top:8}}><Icon name="phone" size={30} color="#A7A7A7"/></View> 
                        <TextInput style={{width:'100%'}} />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>School Board Registration Number</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                    <View style={{ }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>School Contact Number</Text>
                        <View style={{flexDirection:'row', borderWidth: 1, height: 47, width: 142, borderColor: '#95989A', borderRadius: 5 }}>
                       <View style={{marginLeft:10,top:8}}><Icon name="phone" size={30} color="#A7A7A7"/></View> 
                        <TextInput style={{width:'100%'}} />
                        </View>
                    </View>
                    <View style={{ }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>School Telephone Number</Text>
                        <View style={{flexDirection:'row', borderWidth: 1, height: 47, width: 142, borderColor: '#95989A', borderRadius: 5 }}>
                       <View style={{marginLeft:10,top:8}}><Icon name="phone" size={30} color="#A7A7A7"/></View> 
                        <TextInput style={{width:'100%'}} />
                        </View>
                    </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Email Id</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput placeholder="def@gmail.com" />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Latitude</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Longitude</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>

                  



                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                        <View style={{ marginRight: 30 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#02ACE6', marginTop: 10 }}>
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
export default Screen4;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:80,
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
        backgroundColor: '#02ACE6'
    },
    button_upload:
    {
        color: '#909090',
        padding: 15,
        borderRadius: 5,
        borderWidth:2,
        borderStyle:'dashed',
        borderColor: '#95989A',
        // paddingLeft: 50,
        width: 165,
        backgroundColor: '#F8FAFC'
    },

});

