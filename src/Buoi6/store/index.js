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
      return { ...state, userLogin: null, cartItems: [] };

    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.value.id
      );

      if (existingItemIndex !== -1) {
        // Nếu món đã có → tăng số lượng
        const updatedItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cartItems: updatedItems };
      } else {
        // Nếu chưa có → thêm mới
        const newItem = { ...action.value, quantity: 1 };
        return { ...state, cartItems: [...state.cartItems, newItem] };
      }

    case "UPDATE_CART_ITEM":
      const { id, quantity } = action.value;
      if (quantity <= 0) {
        // Xóa món khỏi giỏ
        const filtered = state.cartItems.filter((item) => item.id !== id);
        return { ...state, cartItems: filtered };
      } else {
        // Cập nhật số lượng món
        const updatedCart = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        return { ...state, cartItems: updatedCart };
      }

    default:
      return state;
  }
};
const MyContextControllerProvider = ({ children }) => {
    const initialState = {
        userLogin: null,
        services: [],
        cartItems: [],
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
        .onSnapshot( u => {
            if(u.exists){
                console.log("Đăng nhập thành công với; " + u.id)
                dispatch({type:"USERLOGIN", value:u.data()})
            }
        }
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