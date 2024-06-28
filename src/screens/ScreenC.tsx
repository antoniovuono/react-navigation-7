import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ScreenC() {
    const { reset } = useNavigation();

    function handleResetStack() {
        reset({
            index: 0,
            routes: [{name: 'ScreenA'}]
        })
    }

    return (
        <View style={styles.container}>
            <Text>Screen C</Text>
            <Button title="Reset to screen A" onPress={handleResetStack} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})