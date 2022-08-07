import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Graph extends Component{

    render(props) {
        return (
            <View style={{
                width: '80%',
                height: '80%',
            }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <BarList data={maxData}/>
                </View>
                <View style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute'
                }}>
                    <BarList data={data}/>
                </View>
            </View>
        )
    }
}

//example
const data = [
    {day: "월", score: 60, color: '#FFD561'},
    {day: "화", score: 0, color: '#000000'},
    {day: "수", score: 20, color: '#D6674C'},
    {day: "목", score: 40, color: '#177AD5'},
    {day: "금", score: 80, color: '#92D7F8'},
    {day: "토", score: 100, color: '#B9D859'},
    {day: "일", score: 60, color: '#FFD561'},
];
const maxData = [
    {day: "월", score: 100, color: '#D3D3D3'},
    {day: "화", score: 100, color: '#D3D3D3'},
    {day: "수", score: 100, color: '#D3D3D3'},
    {day: "목", score: 100, color: '#D3D3D3'},
    {day: "금", score: 100, color: '#D3D3D3'},
    {day: "토", score: 100, color: '#D3D3D3'},
    {day: "일", score: 100, color: '#D3D3D3'},
];

const BarList = (props) => {
    const items = [];
    for (let item of props.data) {
        items.push(
            <View style={{
                width: '10%'
            }}>
                <View style={{
                    height: '100%',
                    width: '100%',
                    flexDirection:'row',
                    alignItems:'flex-end',
                }}>
                    <View style={{
                        borderRadius: 15,
                        height: `${item.score}%`,
                        width: '100%',
                        backgroundColor: item.color,
                    }} />
                </View>
                <View style={{
                    width: '100%',
                    height: '15%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text>{item.day}</Text>
                </View>
            </View>
        );
    }
    return items;
}
