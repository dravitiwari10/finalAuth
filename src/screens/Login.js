import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../constants';
import { Button, Input, TextButton, SocialButton } from '../components';
// service
import {Auth} from '../services'

export default Login = ({navigation}) => {

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    return(
        <ScrollView 
            style={styles.scroll}
            contentContainerStyle={styles.container}
        >
            <Text style={styles.heading}>Login</Text>

            <Input 
                placeholder= "Email"
                value={email}
                onChangeText={e => setEmail(e)}
            />
            <Input
                placeholder= "Password"
                secureTextEntry= {true}
                value={password}
                onChangeText={e => setPassword(e)}
            />

            
            <Button  
            buttonText= "Login"
            onPress={() => Auth.signIn(email, password)}
            />
            <TextButton 
                text="Forget Password"
                onPress={() => navigation.navigate('ForgetPassword')}
            />

            <SocialButton  
                buttonText= "Facebook Sign In"
                backgroundColor= {colors.facebook}
                onPress={() => Auth.facebookSignIn()}
            />

            <SocialButton  
                buttonText= "Google Sign In"
                backgroundColor= {colors.google}
                onPress={() => Auth.googleLogin()}
            />

            <TextButton 
                text="Have not an account? SignUp"
                onPress={() => navigation.navigate('SignUp')}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll:{
        flex: 1
    },
    container:{
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 20,
    }
})