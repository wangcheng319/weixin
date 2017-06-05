/**
 * Created by wangc on 2017/6/2.
 *
 * 发现页面用到的样式
 */

import {StyleSheet} from 'react-native';

export  default  StyleSheet.create({
    //整个页面
    view_container:{
        backgroundColor :'#F0EFF5',
        flex:1,
    },
    //钱包
    wallet:{
        flexDirection:'row',
        borderTopWidth:0.6,
        borderTopColor:'#E7E6E9',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderBottomColor:'#E7E6E9',
        borderBottomWidth:0.6,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        paddingRight:10,
    },
    wallet_top:{
        flexDirection:'row',
        borderTopWidth:0.6,
        borderTopColor:'#E7E6E9',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderBottomColor:'#E7E6E9',
        borderBottomWidth:0.6,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        paddingRight:10,
        marginTop:16,
    },

    wallet_text:{
        marginLeft:8,
        color:'#060606',
        fontSize:16,
    },

    wallet_right:{
        justifyContent:'flex-end',
        flex:1,
        flexDirection:'row'
    },
})
