/**
 * Created by wangc on 2017/6/2.
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //整个页面
    view_container:{
        backgroundColor :'#F0EFF5',
        flex:1,
    },
    //第一行
    top_column:{
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        padding:10,
        alignItems:'center'

    },
    //第一行中间部分
    top_column_center :{
        flexDirection: 'column',
        marginLeft: 10,
    },

    //第一行右边部分
    top_column_right:{
        flexDirection: 'row',
        justifyContent :'flex-end',
        alignItems :'center',
        flex:1,
    },

    //钱包
    wallet:{
      flexDirection:'row',
      marginTop:20,
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

    //收藏
    Collection:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        paddingRight:10,
    },



})