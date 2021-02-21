import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { STYLES } from '../../constants'

const ConfirmDialog = (props) => {
    const { title, children, open, setOpen, onConfirm } = props;
    
    return (
        <View> 
            { open ? (
                <View style={STYLES.floatWindow}>
                    
                    <Text style={STYLES.confirmText}>Wait, are you sure you want to delete this plant? </Text>
                    <TouchableOpacity
                        style={STYLES.confirmYesButton}
				
						onPress={() => {
                            setOpen(false);
                            onConfirm();
                        }}
					><Text style={STYLES.buttonTitle}>Yes</Text></TouchableOpacity>

                    
                    <TouchableOpacity
                        style={STYLES.confirmNoButton}
				
						onPress={() => {
                            setOpen(false);
                        }}
					><Text style={STYLES.buttonTitle}>No</Text></TouchableOpacity>
                   
                 </View>
            ) : null}
        </View>
    )
};
export default ConfirmDialog;