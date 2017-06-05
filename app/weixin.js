/**
 * Created by wangc on 2017/6/2.
 *
 * 项目入口
 */

import React,{Component} from 'react';
import {AppRegistry,StyleSheet,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';



const HOME_NORMAL = require('./images/ic_home.png')
const HOME_SELECTED = require('./images/ic_home_selected.png')
const CONTACT_NORMAL = require('./images/ic_contact.png')
const CONTACT_SELECTED = require('./images/ic_contact_selected.png')
const FIND_NORMAL = require('./images/ic_find.png')
const FIND_SELECTED = require('./images/ic_find_selected.png')
const MINE_NORMAL = require('./images/ic_mine.png')
const MINE_SELECTED = require('./images/ic_mine_selected.png')



import Home from './ui/Home/Home'
import Contact from  './ui/Contact/Contact'
import Find from './ui/Find/Find'
import Mine from './ui/Mine/Mine'




export default class weixin extends Component{
    constructor(props) {
        super(props);
        this.state = {selectedTab: "微信"}
    }

    render(){
        return(
           <TabNavigator hidesTabTouch={true} tabbarstyle={styles.tab}>
               {this._renderTabItem(HOME_NORMAL, HOME_SELECTED, "微信", <Home nav={this.props.nav}/>)}
               {this._renderTabItem(CONTACT_NORMAL, CONTACT_SELECTED, "通讯录", <Contact nav={this.props.nav}/>)}
               {this._renderTabItem(FIND_NORMAL, FIND_SELECTED, "发现", <Find nav={this.props.nav}/>)}
               {this._renderTabItem(MINE_NORMAL, MINE_SELECTED, "我", <Mine nav={this.props.nav}/>)}

           </TabNavigator>
        )
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                title ={tag}
                selectedTitleStyle={styles.selectedTabText}
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>

                {childView}
            </TabNavigator.Item>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    tabIcon: {
        width: 21,
        height: 20,
    },
    selectedTabText:{
        color:'#1AAD19'
    }
})


AppRegistry.registerComponent('weixin', () => weixin);