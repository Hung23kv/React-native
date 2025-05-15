import { createContext, useContext, useMemo, useReducer } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from "react-native";

const MyContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return { ...state, userLogin: action.value };
        case "LOGOUT":
            return { ...state, userLogin: null };
        default:
            return state;
    }
};

const MyContextControllerProvider = ({ children }) => {
    const initialState = {
        userLogin: null,
        services: [],
    };
    
    const [controller, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
    
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

const useMyContextController = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContextController must be used within MyContextControllerProvider");
    }
    return context;
};

const USERS = firestore().collection("Users");

const login =  (dispatch, email, password) => {
    auth().signInWithEmailAndPassword(email,password)
    .then(response =>
        USERS.doc(email)
        .onSnapshot(
            u=> dispatch({type:"USER_LOGIN",value: u.data()})
        )
    )
    .catch(e=> Alert.alert("Sai email và password"))
};

const logout = async (dispatch) => {
    try {
        await auth().signOut();
        dispatch({ type: "LOGOUT" });
    } catch (error) {
        Alert.alert("Error", "Failed to logout");
    }
};

export {
    MyContextControllerProvider,
    useMyContextController,
    login,
    logout
};