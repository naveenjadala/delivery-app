import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { getAllUsers, getRestaurants } from '../../services/api';

type Props = {}

type userData = {
    name: string,
    location: string,
    rating: number,
    createdAt: Date
}

type State = {
    count: number
}

type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error();
    }

}

const DiningScreen = (props: Props) => {
    const [users, setUsers] = useState<userData[]>([]);
    const inputRef = useRef<TextInput>(null);
    const initalState: State = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initalState);

    const [todos, setTodos] = useState<any>([]);

    const handleAddTodo = useCallback((text: any) => {
        const newTodo = { id: 3, text };
        setTodos([...todos, newTodo]);
    }, [todos]);



    const foucsRef = () => {
        if (inputRef.current) {
            inputRef.current.setNativeProps({ text: "jadala" });
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                ref={inputRef}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10 }}
            />
            <Button title='click' onPress={() => handleAddTodo('naveen')} />

            <View>
                <Text>{state.count}</Text>
                <Button title="increment" onPress={() => dispatch({ type: 'increment' })} />
                <Button title="decrement" onPress={() => dispatch({ type: 'decrement' })} />
            </View>
        </View >
    )
}

export default DiningScreen

const styles = StyleSheet.create({
    listSty: {
        padding: 20, backgroundColor: 'white', margin: 10, borderRadius: 15
    }
})