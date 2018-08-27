import { View, Text } from 'react-native';
import React from 'react';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default AlbumDetail;

