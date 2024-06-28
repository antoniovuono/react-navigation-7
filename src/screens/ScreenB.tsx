import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ScreenB() {
    const { navigate } = useNavigation();

    function handleNavigate() {
        navigate('ScreenC')
    }
    
    return (
        <View style={styles.container}>
            <Text>Screen B</Text>
            <Button title="navigate to screen C" onPress={handleNavigate} />
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