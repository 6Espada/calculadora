import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

function Calculadora() {
    
    const [operador, setOperador] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [resultado, setNumero] = useState(0)

    const atribuir = (int) => {
        if (num1 == 0) {
            setNum1(int)
            return
        }
        setNum2(int)
    }

    const soma = () => {
        setNumero(num1 + num2);
    }

    const substracao = () => {
        setNumero(num1 - num2);
    }

    const multiplicacao = () => {
        setNumero(num1 * num2);
    }

    const divisao = () => {
        setNumero(num1 / num2);
    }

    const igual = () => {
        if(operador == '+'){
            soma();
        }
        else if(operador == '-'){
            substracao();
        }
        else if(operador == '/'){
            divisao();
        }
        else if(operador == '*'){
            multiplicacao();
        }
    }

    return (
        <View>
            <Text style={[styles.texto]}>{resultado}</Text>
            <View style={[styles.appButtonText]}>
                <Button onPress={() => setOperador('+')} title="+"></Button>
                <Button onPress={() => setOperador('-')} title="-"></Button>
                <Button onPress={() => setOperador('/')} title="/"></Button>
                <Button onPress={() => setOperador('*')} title="*"></Button>
                <Button onPress={() => igual()} title="="></Button>
            </View>

            <View style={[styles.appButtonText]}>
                <Button onPress={() => atribuir(1)} title="1"></Button>
                <Button onPress={() => atribuir(2)} title="2"></Button>
                <Button onPress={() => atribuir(3)} title="3"></Button>
                <Button onPress={() => atribuir(4)} title="4"></Button>
                <Button onPress={() => atribuir(5)} title="5"></Button>
                <Button onPress={() => atribuir(6)} title="6"></Button>
                <Button onPress={() => atribuir(7)} title="7"></Button>
                <Button onPress={() => atribuir(8)} title="8"></Button>
                <Button onPress={() => atribuir(9)} title="9"></Button>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    appButtonText: {
        flexDirection: 'row',
        width: '100%',
    },
    texto: {
        fontSize: 60
    }
})

export default Calculadora