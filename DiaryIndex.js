
'use strict';
const React = require('react-native');
const {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    SegmentedControlIOS,
    } = React;
const window = Dimensions.get('window');
const images = StyleSheet.create({
    title: {
        width: window.width - 10,
        marginVertical: 5,
    },
    list: {
        width: window.width - 20,
        height: (window.width - 20) / 3,
        marginHorizontal: 10,
        marginVertical: 5,
    }
});
module.exports =  class DiaryIndex extends Component {
    getBack() {
        this.props.navigator.push({name: 'ToTravel'});
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.title}>
                    <Text style={[texts.title, texts.backBut]} onPress={this.getBack.bind(this)}>返回</Text>
                    <Text style={[texts.title, texts.titleBut]}>游记</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('./images/search.png')} style={images.title} />
                    <View>
                        <SegmentedControlIOS values={['按时间', '按热度']} selectedIndex={1} style={{
                    width: window.width - 20,
                    }}/>
                    </View>
                </View>
                <View style={styles.list}>
                    <Image style={images.list} source={require('./images/1.jpg')} />
                    <Image style={images.list} source={require('./images/2.jpg')} />
                    <Image style={images.list} source={require('./images/3.jpg')} />
                    <Image style={images.list} source={require('./images/1.jpg')} />
                    <Image style={images.list} source={require('./images/2.jpg')} />
                    <Image style={images.list} source={require('./images/3.jpg')} />
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginBottom: 5,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    list: {

    }
});
const texts = StyleSheet.create({
    title: {
        fontSize: 16,
        //textAlign: 'center',
        width: window.width / 3,
    },
    backBut: {
        color: '#005bff',
        textAlign: 'left',
        paddingLeft: 20,
    },
    titleBut: {
        color: 'black',
        textAlign: 'center',
    }
});