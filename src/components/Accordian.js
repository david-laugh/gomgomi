import React, {Component} from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet,
    LayoutAnimation, 
    Platform, 
    UIManager,
    Dimensions } from "react-native";
import { theme } from '../theme';
import styled from 'styled-components/native';
import Icon from "react-native-vector-icons/MaterialIcons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Accordian extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  render() {

    return (
        <View>
            <TouchableOpacity 
                ref={this.accordian} 
                style={styles.row} 
                onPress={()=>this.toggleExpand()}
            >
                <View
                    style={{
                        height: '100%',
                        flexDirection: 'row',
                        alignItems:'center',
                        paddingLeft: '5%'
                    }}
                >
                    <View
                        style={{
                            width: '10%',
                            alignItems:'center',
                        }}
                    >
                        <ImgProfile 
                            source={this.props.img}
                        />
                    </View>
                    <Text
                        style={[styles.title, styles.font]}
                    >
                        {this.props.title}
                    </Text>
                </View>
                <Icon
                    name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={30}
                    color={'#000000'}
                    style={{
                        marginRight: '4%'
                    }}
                />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
        </View>
        )
    }
    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded : !this.state.expanded})
    }
}

const ImgProfile = styled.Image`
`;

const styles = StyleSheet.create({
    title:{
        paddingLeft: 10,
        fontSize: 14,
        fontWeight:'bold',
        color: "#000000",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: windowWidth * 0.8,
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: windowHeight * 0.08,
        marginBottom: 20,
        borderRadius: 10
    },
    parentHr:{
        color: '#FFFFFF',
        width: windowWidth * 0.8,
    },
    child:{
        marginTop: -25,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        width: windowWidth * 0.8,
        padding:18,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    }
});
