import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRamdomContact } from '../utility/api';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import colors from '../utility/color';

const Profile = ({route}) => {
    // const [contact, setContact] = useState({});

    // useEffect(() => {
    // fetchRamdomContact().then(contact => {
    //     console.log('Contact data:', contact); // Kiểm tra dữ liệu
    //     setContact(contact);
    // });
    // }, []);
    // const { avatar, name, email, phone, cell } = contact;

    const { contact } = route.params;

    return (
        <View style={styles.container}>
        <View style={styles.avatarSection}>
            <ContactThumbnail avatar={contact.picture} name={contact.name} phone={contact.phone} />
        </View>
        <View style={styles.detailsSection}>
            <DetailListItem icon="mail" title="Email" subtitle={contact.email} />
            <DetailListItem icon="phone" title="Work" subtitle={contact.phone} />
            <DetailListItem icon="smartphone" title="Personal" subtitle={contact.cell} />
        </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
});
