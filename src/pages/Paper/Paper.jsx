import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Avatar, Card, Modal, Portal, Text, PaperProvider  } from 'react-native-paper';

export default function Paper() {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};


    return (
        <PaperProvider>
            <View>
                <Text>Paper</Text>
                <Button style={style.btn} buttonColor={'#dc1919'} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
                <Button style={style.btn} buttonColor={'#dc1919'} icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>

                <Card style={style.btn}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </Modal>
                </Portal>
                <Button style={{marginTop: 30}} onPress={showModal}>
                    Show
                </Button>
            </View>
        </PaperProvider>
    )
}

const style = StyleSheet.create({
    btn: {
        margin: 5,
    }
})
