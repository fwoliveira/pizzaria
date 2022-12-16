import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SingIn';
import {HomeAdmin} from '../screens/HomeAdmin';

const { Screen, Navigator, Group } = createNativeStackNavigator();

// coloque o nome da rota, do tipo UserRoutes, AdminRoutes, AuthRoutes, pra cada contexto de navegação
export function AppRoutes(){
    return(
        // propriedade initialRouteName define qual rota começa primeiro, 
        // mas se não definir vai carregar a primeira
        // <Navigator initialRouteName='screenB'>
        <Navigator>
            <Screen 
                name='signIn'
                options={{ 
                    headerShown: false, //remover cabeçalho
                }}
                component={SignIn}
            />
            <Group
                screenOptions={{ 

                }}
            >
                <Screen 
                    name='homeAdmin'
                    options={{ 
                        title:'',
                        headerStyle:{
                            backgroundColor: '#E03F50'
                        },
                       
                    }}
                    component={HomeAdmin}
                />
            </Group>
            
        </Navigator>
    )
}