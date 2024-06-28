import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";
import ScreenC from "../screens/ScreenC";

export const RootStack = createNativeStackNavigator({
    screens: {
        ScreenA: {
            screen: ScreenA
        },
        ScreenB: {
            // if: () => false,  // podemos usar essa propriedade para condicionar a exibição da tela
            screen: ScreenB
        },
        ScreenC: {
            screen: ScreenC
        }
    }
});
