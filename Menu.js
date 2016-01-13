'use strict';
const React = require('react-native');
const {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    Component,
    } = React;

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: '#00c0ff',
        //padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        top: 30,
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 50,
        fontSize: 20,
        color: 'white',
    },
    image: {
        width: window.height * 0.36,
        height: window.height,
        padding: 20,
        marginLeft: 5,
    },
    item: {
        height: window.height / 20,
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 5,
        backgroundColor: 'grey',
    },
});

module.exports = class Menu extends Component {
    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <Image source={require('./images/side_menu.png')} style={styles.image}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={require('./images/icon.png')}/>
                        <Text style={styles.name}>李小明</Text>
                    </View>
                </Image>
            </ScrollView>
        );
    }
};