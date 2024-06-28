import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ScreenA() {
    const { navigate } = useNavigation();

    function handleNavigate() {
        navigate('ScreenB')
    }

    return (
        <View style={styles.container}>
            <Text>Screen A</Text>
            <Button title="navigate to screen B" onPress={handleNavigate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})