/**
 * Created by Lawrence on 16/1/13.
 */

'use strict';
const React = require('react-native');
const Swiper = require('react-native-swiper');
const SideMenu = require('react-native-side-menu');
const Menu = require('./Menu');
//const Navigation = require('./Navigation');
const sliderImages = [
    require('./images/slider_1.jpg'),
    require('./images/slider_2.jpg'),
    require('./images/slider_3.jpg'),
    require('./images/slider_4.jpg'),
    require('./images/slider_5.jpg'),
    require('./images/slider_6.jpg'),
    require('./images/slider_7.jpg'),
];
const {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    Component,
    } = React;
const windowWidth = Dimensions.get('window').width;
module.exports = class ToTravel extends Component {
    state = {
        isOpen: false,
    };
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    updateMenuState(isOpen) {
        this.setState({isOpen, });
    }
    toDiary() {
        this.props.navigator.push({name: 'DiaryIndex'});
    }
    render() {
        var rows = [];
        for(var i = 0; i < sliderImages.length; i++) {
            rows.push(<Image key={i} source={sliderImages[i]} style={styles.headerImg} />);
        }
        return (
            <SideMenu
                menu={<Menu />}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}
                navigator={null}
            >
            <ScrollView style={styles.container}>
                <Swiper
                    style={styles.headerImg}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={3}
                    showsPagination={true}
                    height={Dimensions.get('window').width / 2}>
                    {rows}
                </Swiper>
                <View>
                    <Image source={require('./images/title_full.png')} style={titleImages.full}>
                        <Text style={texts.fullTitle}>热门城市</Text>
                    </Image>
                </View>
                <View style={views.hotCity}>
                    <Image style={images.hotCity} source={require('./images/Beijing.png')} />
                    <Image style={images.hotCity} source={require('./images/Shanghai.png')} />
                </View>
                <View style={views.hotCity}>
                    <Image style={images.hotCity} source={require('./images/Hongkong.png')} />
                    <Image style={images.hotCity} source={require('./images/Harbin.png')} />
                </View>
                <View>
                    <Image source={require('./images/title_full.png')} style={titleImages.full}>
                        <Text style={texts.fullTitle} onPress={this.toDiary.bind(this)}>游记</Text>
                    </Image>
                </View>
                <View style={views.diary}>
                    <View style={views.diaryPiece}>
                        <Image source={require('./images/diary_1.jpg')} style={images.diaryPiece} />
                        <Text style={texts.diaryPiece}>2016年城市猎人新路线探索持续中</Text>
                    </View>
                    <View style={views.diaryPiece}>
                        <Image source={require('./images/diary_2.jpg')} style={images.diaryPiece} />
                        <Text style={texts.diaryPiece}>肉肉都是用鲜奶做出来的 很可爱哦</Text>
                    </View>
                </View>
                <View style={views.diary}>
                    <View style={views.diaryPiece}>
                        <Image source={require('./images/diary_3.jpg')} style={images.diaryPiece} />
                        <Text style={texts.diaryPiece}>碰壁后更加坚强 迷茫后方向更加明确</Text>
                    </View>
                    <View style={views.diaryPiece}>
                        <Image source={require('./images/diary_4.jpg')} style={images.diaryPiece} />
                        <Text style={texts.diaryPiece}>你的生活 远比你“抱怨”时美好的多</Text>
                    </View>
                </View>
            </ScrollView>
            </SideMenu>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //marginTop: 20,
        backgroundColor: '#F5FCFF',
    },
    header: {
        //position: 'absolute',
        height: 50,
        fontSize: 20,
        textAlign: 'center',
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
    headerImg: {
        width: windowWidth,
        height: windowWidth / 2,

    }
});
var views = StyleSheet.create({
    hotCity: {
        width: windowWidth,
        height: windowWidth / 8 * 3,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    diary: {
        width: windowWidth,
        height: windowWidth / 2 + 20,
        flexDirection: 'row',
    },
    diaryPiece: {
        width: windowWidth / 2,
        height: windowWidth / 2 + 20,
        padding: 5,
    }
});
const texts = StyleSheet.create({
    fullTitle: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 20,
        //width: windowWidth / 3 * 2,
        //position: 'absolute',
        //height: Dimensions.get('window').width / 10,
    },
    hotCity: {
        fontSize: 18,
        lineHeight: windowWidth / 15,
        width: windowWidth / 2,
        height: windowWidth / 12,
        backgroundColor: 'gray',
        opacity: 0.7,
    },
    more: {
        width: windowWidth / 3,
    },
    diaryPiece: {
        fontSize: 16,
        color: 'gray',
        backgroundColor: '#FBF7EB',
        height: windowWidth / 2  - ((windowWidth / 2 - 10) / 4 * 3) + 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,

    }
});
const titleImages = StyleSheet.create({
    full: {
        backgroundColor: 'transparent',
        width: windowWidth,
        height: windowWidth / 10,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    half: {
        width: windowWidth,
        height: windowWidth / 20,
    },
});
const images = StyleSheet.create({
    hotCity: {
        width: windowWidth / 2,
        height: windowWidth / 8 * 3,
        justifyContent: 'flex-end',
    },
    diaryPiece: {
        width: windowWidth / 2 - 10,
        height: (windowWidth / 2 - 10) / 4 * 3,
    }
});