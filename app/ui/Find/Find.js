/**
 * Created by wangc on 2017/6/2.
 *
 * 微信-发现
 */

import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

import Styles from './FindStyles'
import Images from './../../images/AllImages'

export default class Find extends Component{
    render(){
        return(
            <View style={Styles.view_container}>

                <View style={{backgroundColor:'#E7E6E9',height:0.6,marginTop:10}}/>

                {/*朋友圈*/}
                <View style={Styles.wallet}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_FRIEND}/>
                    <Text style={Styles.wallet_text}>
                        朋友圈
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

                <View style={Styles.wallet_top}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_SCAN}/>
                    <Text style={Styles.wallet_text}>
                        扫一扫
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

                <View style={Styles.wallet}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_SHARK}/>
                    <Text style={Styles.wallet_text}>
                        摇一摇
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

                <View style={Styles.wallet_top}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_NEARBY}/>
                    <Text style={Styles.wallet_text}>
                       附近的人
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

                <View style={Styles.wallet}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_BOTTLE}/>
                    <Text style={Styles.wallet_text}>
                        漂流瓶
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

                <View style={Styles.wallet_top}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_SHOP}/>
                    <Text style={Styles.wallet_text}>
                        购物
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>


                <View style={Styles.wallet}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_GAME}/>
                    <Text style={Styles.wallet_text}>
                        游戏
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>


                <View style={Styles.wallet_top}>
                    <Image
                        style={{width:30,height:30}}
                        source={Images.FIND_LITTLE}/>
                    <Text style={Styles.wallet_text}>
                        小程序
                    </Text>
                    <View  style={Styles.wallet_right}>
                        <Image
                            style={{width:12,height:12}}
                            source={Images.IC_RIGHT}/>
                    </View>
                </View>

            </View>
        )
    }
}