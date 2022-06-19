import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme)=>({
    appBar: {
      
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
        fontFamily  : 'Blaka'
      },
      image: {
        
        padding:5,
        overflow:'hidden'
        
        
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer:{
          flexDirection:"column-reverse"
        }
      },
      
}));