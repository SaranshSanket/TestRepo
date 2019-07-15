import { createStackNavigator,createAppContainer } from 'react-navigation';
import HomeScreen from '../views/HomeView'
import GiftedC from '../views/GiftedC'


const viewStack=createStackNavigator({
Home: {
    screen:HomeScreen,
},
GiftedChat:{
    screen:GiftedC
}
},
{   
headerMode: 'screen',
initialRouteName:'Home'
},
)

const AppContain =createAppContainer(viewStack)
export default AppContain