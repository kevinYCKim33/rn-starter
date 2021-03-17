import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// type, action, payload, dispatch all community conventions in reducers
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

  switch (action.type) {
    case "change_red":
      // if it can't be any redder or any not redder just hold steady and return state;
      // otherwise just do normal reducer stuff
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // actually agree that useReducer works better instead of having 3 hooks for red, setRed, green, setGreen, blue, setBlue
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  // hmmm why isn't this a flatlist?? I guess it could be but not as readable...
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
