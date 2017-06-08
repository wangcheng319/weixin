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

var sections = [];

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
        return(
        <View>
            <View style={Styles.item_view}>
                <Image style={{width:30,height:30}}
                       source={Images.MINE_PHOTO}
                />

                <Text style={{marginLeft:10}}>
                    {txt}
                </Text>

            </View>

            <View style={{backgroundColor:'#E7E6E9',height:0.6,marginLeft:10}}/>

        </View>


            )
    }

    _sectionItem = (info) => {
        var txt = info.section.key;
        return <Text
            style={{height:20,textAlignVertical:'center',paddingLeft:10,backgroundColor:'#F1F0F6',color:'black',fontSize:13}}>{txt}</Text>
    }


    componentWillMount() {
        /*A*/
        var datasA = [];
        for (var i=0;i<6;i++){
            datasA.push({name:'阿三'});
        }
        sections.push({key:'A',data:datasA})

        /*B*/
        var datasB = [];
        for (var i=0;i<6;i++){
            datasB.push({name:'百三'});
        }
        sections.push({key:'B',data:datasB})


        /*C*/
        var datasC = [];
        for (var i=0;i<6;i++){
            datasC.push({name:'陈三'});
        }
        sections.push({key:'C',data:datasC})
    }


    render(){


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

