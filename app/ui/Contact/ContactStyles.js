/**
 * Created by wangc on 2017/6/2.
 *
 * 通讯录样式
 */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    //整个页面
    view_container:{
        backgroundColor :'#F0EFF5',
        flex:1,
    },
    search_box:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        borderColor:'#C9C9C9',
        borderRadius:8,
        borderWidth:0.6,
        flexDirection:'row',
        margin:10,
        height:35,
        paddingRight:8,
    },
    search_view:{
        fontSize:12,
        textAlign:'center',
        flex:1,

    }
})
