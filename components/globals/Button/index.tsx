import { getRespValue } from "@utils/design/design";
import React, { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

interface button {
  title: string;
  buttonStyle?: object;
  loading?: boolean;
  onPress:()=>void;
}
const Button = (props: button) => {
  const { title, buttonStyle,loading ,onPress} = props;
  const [press, setPress] = useState(false);
  return (
    <Pressable
      onPressIn={() => setPress(true)}
      onPressOut={() => setPress(false)}
      style={{
        ...buttonStyle,
        backgroundColor: press ? "grey" : "green",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        width: "40%",
        alignItems: "center",
        opacity: press ? 0.6 : 1,
        marginVertical:getRespValue(20)
      }}
      onPress={onPress}
    >
        {loading? (
          <ActivityIndicator color='blue' size={"small"} />
        ) : (
          <Text style={{ color: "white" }}>{title}</Text>
        )}
    </Pressable>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {},
});
