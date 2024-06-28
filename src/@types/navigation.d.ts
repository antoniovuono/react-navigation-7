import { StaticParamList } from "@react-navigation/native";
import { RootStack } from "../routes/stack.routes";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends StaticParamList<typeof RootStack> {}
    }
}