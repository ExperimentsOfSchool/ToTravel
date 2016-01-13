/**
 * Created by Lawrence on 16/1/13.
 */
'use strict';
const React = require('react-native');
const {
    Navigator,
    Component
    } = React;
const ToTravel = require('./ToTravel');
const DiaryIndex = require('./DiaryIndex');
module.exports = class Navigation extends Component {
    configureScene(route) {
        return Navigator.SceneConfigs.FloatFromLeft;
    }
    renderScene(router, navigator) {
        var Component = ToTravel;
        switch (router.name) {
            case 'ToTravel':
                Component = ToTravel;
                break;
            case 'DiaryIndex':
                Component = DiaryIndex;
                break;
            default:
                Component = ToTravel;
        }
        return <Component navigator={navigator} />;
    }
    render() {
        return (
            <Navigator
                initialRoute={{name: 'ToTravel'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
};