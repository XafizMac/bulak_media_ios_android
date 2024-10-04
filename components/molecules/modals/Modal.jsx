import { KeyboardAvoidingView, Platform, Modal as RNModal, StyleSheet, Text, View } from "react-native";

export const Modal = ({ isOpen, withInput, children, ...rest }) => {

    const content = withInput ? (
        <KeyboardAvoidingView style={styles.withInput} behavior="padding">
            {children}
        </KeyboardAvoidingView>
    ) :
        <View style={styles.noInput}>
            {children}
        </View>

    return (
        <RNModal
            visible={isOpen}
            transparent
            animationType="fade"
            statusBarTranslucent

            {...rest}
        >
            {content}
        </RNModal>
    )
}

const styles = StyleSheet.create({
    noInput: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
    },
    withInput: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
    }
})