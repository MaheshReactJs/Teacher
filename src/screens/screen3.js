import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker'

const Screen3 = () => {
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
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            Teacher Profile
            </Text>
                    </View>

                    


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>

                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
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



                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>HouseNo/FlatNo/PlotNo</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Apartment Name/Locality/Landmark</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>City</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A'}}>
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
                            <Text style={{ color: '#909090', fontSize: 12 }}>State</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
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

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Zip/PinCode</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{color: '#909090', fontSize: 12 }}>Mobile Number</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Alternate Mobile Number</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>




                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>Qualification</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="B.Ed" value="1" />
                                    <Picker.Item label="MCA" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>Exp of Years</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="5" value="Male" />
                                    <Picker.Item label="10" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{color: '#909090', fontSize: 12 }}>Previous Employment</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>From</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 132 }}
                                    mode="date"
                                    placeholder="2020-09-25"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2016-06-01"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 10,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height:47, marginTop:10
                                        }
                                    }}
                                // onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={{color: '#909090', fontSize: 12 }}>To</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 132 }}
                                    mode="date"
                                    placeholder="2020-09-25"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2016-06-01"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 10,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height:47, marginTop:10
                                        }
                                    }}
                                // onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:20 }}>
                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>School Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Notice Period</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="30 Days" value="Male" />
                                    <Picker.Item label="15 Days" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>Subjects Interested in</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Science" value="11" />
                                    <Picker.Item label="Pharma" value="21" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Grades</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Primary" value="30" />
                                    <Picker.Item label="Secondary" value="86" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Employment Category</Text>
                        <View style={{ borderWidth: 1, width: 308, borderRadius: 5, borderColor: '#95989A'}}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 47 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Permanent" value="30" />
                                <Picker.Item label="Temporary" value="86" />
                            </Picker>
                        </View>
                    </View>




                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Certifications</Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        
                         <TouchableOpacity>
                                <Text style={styles.button_upload}>
                                    Upload Your Photo
            </Text>
                            </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', top: 15, paddingLeft: 50 }}>
                                Upload
            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Resume Upload</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                         
                    <TouchableOpacity>
                                <Text style={styles.button_upload}>
                                    Resume Upload
            </Text>
                            </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', top: 15, paddingLeft: 50 }}>
                                Upload
            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Additional Note</Text>
                        <View style={{ borderWidth: 1, height: 100, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
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
export default Screen3;



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

