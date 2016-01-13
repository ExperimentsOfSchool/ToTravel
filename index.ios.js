/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
//const React = require('react-native');
//const {
//    AppRegistry,
//    } = React;
//const Navigation = require('./Navigation');
////const ToTravel = require('./ToTravel')
//AppRegistry.registerComponent('ToTravel',() => Navigation);
/**
 * Created by Lawrence on 16/1/13.
 */
'use strict';
const React = require('react-native');
const {
    Navigator,
    Component,
    AppRegistry,
    } = React;
const ToTravel = require('./ToTravel');
const DiaryIndex = require('./DiaryIndex');
//module.exports = class Navigation extends Component {
//    configureScene(route) {
//        return Navigator.SceneConfigs.FloatFromLeft;
//    }
//    renderScene(router, navigator) {
//        var Component = ToTravel;
//        switch (router.name) {
//            case 'ToTravel':
//                Component = ToTravel;
//                break;
//            case 'DiaryIndex':
//                Component = DiaryIndex;
//                break;
//            default:
//                Component = ToTravel;
//        }
//        return <Component navigator={navigator} />;
//    }
//    render() {
//        return (
//            <Navigator
//                initialRoute={{name: 'ToTravel'}}
//                configureScene={this.configureScene}
//                renderScene={this.renderScene} />
//        );
//    }
//};
var Navigation = React.createClass({
    render: function() {
        return (
            <Navigator
                initialRoute={{name: 'ToTravel'}}
                cofigureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    },
    configureScene: function(route) {
        return Navigator.SceneConfigs.FloatFromLeft;
    },
    renderScene: function(router, navigator) {
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
});
AppRegistry.registerComponent('ToTravel',() => Navigation);