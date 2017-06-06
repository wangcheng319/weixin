/**
 * Created by wangc on 2017/6/2.
 *
 * 微信-通讯录
 */
import React, {Component} from "react";
import {Text, View,TextInput,Image,SectionList,Platform,StyleSheet} from "react-native";

import Styles from './ContactStyles'
import Strings from '../../strings'
import Images from './../../images/AllImages'



export  default  class  Contact extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state = {

          }
      }


    _renderItem = (info) => {
        var txt =  info.item.name;
        return <Text
            style={{height:30,textAlignVertical:'center',backgroundColor:'white',color:'#060606',fontSize:15}}>{txt}</Text>
    }

    _sectionItem = (info) => {
        var txt = 'key:' + info.section.key;
        return <Text
            style={{height:20,textAlign:'center',textAlignVertical:'center',backgroundColor:'#F1F0F6',color:'black',fontSize:13}}>{txt}</Text>
    }


    render(){
        var sections = [];
        for (var i = 0; i < 10; i++) {
            var datas = [];
            for (var j = 0; j < 10; j++) {
                datas.push({name: 'name:' + j});
            }
            sections.push({key: i, data: datas});
        }

        return(
            <View style={Styles.view_container}>

                <View style={Styles.search_box}>
                    <TextInput
                        ref="1"
                        underlineColorAndroid='transparent'
                        placeholder={Strings.SEARCH}
                        placeholderTextColor={'#C9C9C9'}
                        style={Styles.search_view}
                    />


                <Image
                    style={{width:20,height:20}}
                    source={Images.CONTACT_RECORD}/>

                </View>


                <SectionList
                    renderSectionHeader={this._sectionItem}
                    renderItem={this._renderItem}
                    sections={sections}/>


            </View>
        )
    }
}

