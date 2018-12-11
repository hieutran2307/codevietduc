import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight, Linking } from 'react-native';
import MapView from 'react-native-maps';

import phoneIcon from '../../../../media/appIcon/phone.png';
import mailIcon from '../../../../media/appIcon/mail.png';
import messageIcon from '../../../../media/appIcon/message.png';
import locationIcon from '../../../../media/appIcon/location.png';

class Contact extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <MapView
                        style={{ width: width - 20, height: 250 }}
                        initialRegion={{
                            latitude: 10.802392,
                            longitude: 106.714588,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{ latitude: 10.802392, longitude: 106.714588 }}
                            title="HUTECH"
                            description="ĐỒ ÁN CHUYÊN NGÀNH"
                        />
                    </MapView>
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>475A ĐIỆN BIÊN PHỦ, QUẬN BÌNH THẠNH</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>0933332979</Text>
                     </View>
  
                   <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                   <TouchableHighlight onPress={()=>Linking.openURL('https://mail.yahoo.com/d?.intl=vn&.lang=vi-VN&.partner=none&.src=fp')} >

                      <Image source={require('../../../../../images/images.png')} style={imageStyle} />
                      </TouchableHighlight>
                        <Text style={infoText}> dovietduc01@yahoo.com </Text>

                    </View>
  
                   <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                   <TouchableHighlight onPress={()=>Linking.openURL('https://www.facebook.com/SASAQUEENVIETNAM/')} >

                      <Image source={require('../../../../../images/facebook.jpg')} style={imageStyle} />
                      </TouchableHighlight>
                        <Text style={infoText}> Đứcfanpage </Text>

                    </View>


                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});

export default Contact;
