import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Graph extends Component{

    render() {
        const data = [
            {value: 50, label: '월', frontColor: '#FFD561'},
            {value: 75, label: '화', frontColor: '#92D7F8'},
            {value: 0, label: '수'},
            {value: 50, label: '목', frontColor: '#FFD561'},
            {value: 30, label: '금', frontColor: '#177AD5'},
            {value: 10, label: '토', frontColor: '#D6674C'},
            {value: 100, label: '일', frontColor: '#B9D859'},
        ];

        return (
            <View>
                <View style={{
                    width: '90%',
                    height: '90%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        borderRadius: 15,
                        height: '100%',
                        width: '10%',
                        backgroundColor: '#d3d3d3'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '100%',
                        width: '10%',
                        backgroundColor: '#d3d3d3'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '100%',
                        width: '10%',
                        backgroundColor: '#d3d3d3'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '100%',
                        width: '10%',
                        backgroundColor: '#d3d3d3'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '100%',
                        width: '10%',
                        backgroundColor: '#d3d3d3'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '100%',
                        width: '10%',
                        backgroundColor: '#d3d3d3'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '100%',
                        width: '10%',
                        backgroundColor: '#d3d3d3'
                    }} />
                </View>
                <View style={{
                    width: '90%',
                    height: '90%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute'
                }}>
                    <View style={{
                        borderRadius: 15,
                        height: '60%',
                        width: '10%',
                        backgroundColor: '#FFD561',
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '50%',
                        width: '10%',
                        backgroundColor: '#B9D859'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '50%',
                        width: '10%',
                        backgroundColor: '#D6674C'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '50%',
                        width: '10%',
                        backgroundColor: '#FFD561'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '50%',
                        width: '10%',
                        backgroundColor: '#177AD5'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '50%',
                        width: '10%',
                        backgroundColor: '#B9D859'
                    }} />
                    <View style={{
                        borderRadius: 15,
                        height: '50%',
                        width: '10%',
                        backgroundColor: '#D6674C'
                    }} />
                </View>
            </View>
        )
    }
}
