import {View, ScrollView, FlatList} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Axios() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(function (response) {
                const array = [];
                response.data.forEach(val => {
                    array.push({
                        id: val.id,
                        title: val.title,
                        url: val.url,
                        thumbnailUrl: val.thumbnailUrl
                    })
                })
                setData(array)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const Card1 = ({id, title, url,  thumbnailUrl}) => (
        <Card style={{margin: 10}}>
            <Card.Content style={{flex: 1}}>
                <View style={{flex: 2}}>
                    <Avatar.Image size={70} source={{uri: thumbnailUrl}}/>
                    <Text variant="titleLarge">{id + '. ' + title}</Text>
                </View>
            </Card.Content>
            <Card.Cover source={{ uri: url }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    )

    return(
        <View style={{flex: 1}}>
            <Text variant="titleLarge">Axios</Text>
            {/*<ScrollView>*/}
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <Card1
                            id={item.id}
                            title={item.title}
                            url={item.url}
                            thumbnailUrl={item.thumbnailUrl}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            {/*</ScrollView>*/}
        </View>
    )
}
