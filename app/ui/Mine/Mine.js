/**
 * Created by wangc on 2017/6/2.
 *
 * 微信-我
 */

import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

import Images from './../../images/AllImages'
import Styles from './MineStyles'



export  default  class  Mine extends  Component{
    constructor(props: Object) {
        super(props)

        this.state = {
            currentPage: 0
        }
    }

    render(){
        return(
            <View style={Styles.view_container}>

               <View style={{backgroundColor:'#E7E6E9',height:0.6,marginTop:10}}/>

                {/*个人信息*/}
               <View style={Styles.top_column}>
                   <Image
                       style={{width:50,height:50}}
                       source={Images.MINE_PHOTO}/>

                   <View style={Styles.top_column_center}>
                       <Text style={Styles.wallet_text}>
                           Wangc
                       </Text>
                       <Text style={Styles.wallet_text}>
                           微信号：wang_r_cheng
                       </Text>
                   </View>

                   <View style={Styles.top_column_right}>
                       <Image
                           style={{width:20,height:20}}
                           source={Images.MINE_QRCODE}/>
                       <Image
                           style={{width:12,height:12}}
                           source={Images.IC_RIGHT}/>
                   </View>
               </View>

               <View style={{backgroundColor:'#E7E6E9',height:0.6}}/>

                {/*钱包*/}
                <View style={Styles.wallet}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.MINE_WALLET}/>
                    <Text style={Styles.wallet_text}>
                        钱包
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

                <View style={{backgroundColor:'#F0EFF5',height:20}}/>

                <View style={Styles.Collection}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.MINE_COLLECT}/>
                    <Text style={Styles.wallet_text}>
                        收藏
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

                <View style={{backgroundColor:'#E7E6E9',height:1,paddingLeft:32,marginLeft:32}}/>

                <View style={Styles.Collection}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.MINE_ALBUM}/>
                    <Text style={Styles.wallet_text}>
                        相册
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>
                <View style={{backgroundColor:'#E7E6E9',height:0.6,marginLeft:32}}/>

                <View style={Styles.Collection}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.MINE_CARD}/>
                    <Text style={Styles.wallet_text}>
                        卡包
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>
                <View style={{backgroundColor:'#E7E6E9',height:0.6,marginLeft:32}}/>

                <View style={Styles.Collection}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.MINE_SMILE}/>
                    <Text style={Styles.wallet_text}>
                        表情
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>
                <View style={{backgroundColor:'#E7E6E9',height:0.6,marginLeft:32}}/>

                <View style={Styles.wallet}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.MINE_SET}/>
                    <Text style={Styles.wallet_text}>
                        设置
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>
                <View style={{backgroundColor:'#E7E6E9',height:0.6,marginLeft:32}}/>
            </View>


        )
    }




}