import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#171d31"
    },
    content: {
        
    },
    title: {
        marginTop: 10,
        paddingBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#0094FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        right: 25,
        bottom: 25,
        elevation: 2,
        zIndez: 9,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3,
        }
    },
    modal: {
        flex: 1,
        backgroundColor: '#171d31',

    },
    modalHeader: {
        marginLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalTitle:{
        marginLeft: 15,
        fontSize: 23,
        color: '#FFF'
    },
    modalBody:{
      marginTop: 15,
    },
    input: {
      fontSize: 15,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 30,
      backgroundColor: '#FFF',
      padding: 9,
      height: 30,
      textAlignVertical: 'top',
      color: '#000',
      borderRadius: 5,
    },
    handleAdd:{
        backgroundColor:'#FFF',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 5,
       },
       handleAddText:{
         fontSize: 20,
       }
});

export default styles;