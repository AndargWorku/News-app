import { StyleSheet,  TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
type Props={
  withHorizontalPadding:boolean
  setSearchQuery: Function
};

const SearchBar=({withHorizontalPadding, setSearchQuery}: Props)=> {
  return (
    <View style={[styles.container, withHorizontalPadding && {paddingHorizontal:20}]}>
      <View style={styles.SearchBar}>
        <Ionicons name='search-outline' size={20} color={Colors.lightGrey}/>
       <TextInput placeholder='search' 
       placeholderTextColor={Colors.lightGrey}
       autoCapitalize='none'
       style={styles.searchText}
       onChangeText={query=>setSearchQuery(query)}
       />
      </View>
    </View>
  )
}

export default SearchBar;
const styles = StyleSheet.create({
    container:{
        // marginHorizontal:20,
        marginBottom:20
    },
    SearchBar:{
        backgroundColor: '#e4e4e4',
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:10,
        flexDirection:'row',
        gap:10
    },
    searchText:{
        fontSize:14,
        flex:1,
        color:Colors.darkGrey

    }
})