import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function HomePage() {
    const [name, setName] = useState('');
    useEffect(() => {

     }, []);

    const saveStudent = () => {
        console.log("Hello Yasindu.....");
    }

    return (
        <View>
            <Text>HomePage</Text>
            <Button
                title='Click Me'
                onPress={saveStudent}
            />
        </View>
    )
}
