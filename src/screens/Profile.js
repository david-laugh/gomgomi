import React, {Component} from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Button, Accordian } from '../components';
import { theme } from '../theme';

const BG = require('../../assets/BG.png');
const profile = require('../../assets/profile.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = ({ navigation }) => {
    const _handleEditProfilePress = () => {
        navigation.navigate('EditProfile');
    };

    const menu = [
        { 
            title: 'Non Veg Biryanis', 
            data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
        },
        { 
            title: 'Pizzas',
            data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
        { 
            title: 'Drinks',
            data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
        }
    ]
      
    const renderAccordians=()=> {
        const items = [];
        for (let item of menu) {
            items.push(
                <Accordian 
                    title = {item.title}
                    data = {item.data}
                />
            );
        }
        return items;
    }

    return (
        <View style={[styles.header]}>
            <ImageBackground
                source={BG}
                imageStyle={styles.bgImageStyle}
            >
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Text style={styles.textCase1}>Profile</Text>
                    </View>
                    <View style={styles.case2}>
                        <ImgProfile 
                            style={{
                                height: windowWidth * 0.25,
                                width: windowWidth * 0.25
                            }}
                            source={profile}
                        />
                    </View>
                    <View style={styles.case3}>
                        <Text style={styles.textCase2}>John Doe</Text>
                    </View>
                    <View style={styles.case4}>
                        <Text>JohnDoe@Gomgomi.com</Text>
                    </View>
                    <View style={styles.case5}>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}
                        >
                            <Button 
                                containerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '70%',
                                    width: '80%',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 15
                                }}
                                onPress={_handleChatCallButtonPress}
                                title="Edit Profile"
                                titleStyle={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    color: '#000000'
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center'
                            }}
                        >
                            <Button 
                                containerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '70%',
                                    width: '80%',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 15
                                }}
                                onPress={_handleChatCallButtonPress}
                                title="Log-out"
                                titleStyle={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    color: '#000000'
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.case6}>
                        <Text style={styles.textCase3}>FAQ</Text>
                    </View>
                    <View style={styles.case7}>
                        <View style={styles.container}>
                            {/* { renderAccordians() } */}
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Profile;

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const ImgProfile = styled.Image`
`;

const styles = StyleSheet.create({
    header: { flex: 1 },
    bgImageStyle: {
        bottom: 100,
        width: windowWidth * 1.2,
        height: windowHeight * 1,
        left: -windowWidth * 0.1,
        top: -windowHeight * 0.2,
    },
    startChatStyle: {
        left: '8%',
        top: '9%',
        height: '82%',
        width: '84%',
        borderRadius: 15,
        backgroundColor: '#D6E7FF'
    },

    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textCase2: {
        fontSize: 23,
        fontWeight: "bold",
    },
    textCase3: {
        fontSize: 18,
    },

    container: {
        flex: 1,
        alignItems: 'center',
    },
    case1: {
        width: '100%',
        height: '14%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: theme.testcase1,
    },
    case2: {
        width: '100%',
        height: '18%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '5%',
        alignItems: 'center',
        // backgroundColor: theme.testcase4,
    },
    case5: {
        flexDirection: 'row',
        width: '90%',
        height: '10%',
        // backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '10%',
        paddingLeft: '9%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase6,
    },
    case7: {
        width: '100%',
        height: '30%',
        // backgroundColor: theme.testcase1,
    },
});

const _handleChatCallButtonPress = async () => {};
