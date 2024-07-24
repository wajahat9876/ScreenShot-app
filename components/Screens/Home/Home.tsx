import { resetProgress, setRouteState } from "@store/slices/userSlice";
import { getRespValue } from "@utils/design/design";
import Button from "components/globals/Button";
import { useRouter } from "expo-router";
import { MultiStepFormProps } from "hooks/useMultiStepForm";
import { MotiView } from "moti";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { useDispatch } from "react-redux";
const Home = ({ goTo }: MultiStepFormProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <MotiView
      key="Home"
      from={{
        opacity: 0,
        translateY: 100,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      exit={{
        opacity: 0,
        direction: "rtl",
        translateY: 100,
      }}
      transition={{
        type: "timing",
        duration: 300,
      }}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, marginTop: getRespValue(80), alignItems: "center" }}
      >
        <Progress.Bar
          progress={0.3}
          width={300}
          color="orange"
          height={8}
          style={{ backgroundColor: "white" }}
        />

        <Text style={{ fontSize: 22, margin: 10 }}>Home</Text>
        <Button
          onPress={() => {
            router.replace("/(auth)/Welcome");
            dispatch(setRouteState(false));
            dispatch(resetProgress());
          }}
          title="Back"
        />
          <Button
              title="Scanner"
              onPress={() => {
                router.replace("/(main)/Scanner");   
              }}
            />
        <Button
          onPress={() => {
            goTo && goTo(1);
          }}
          title="Chat"
        />
      </View>
    </MotiView>
  );
};

export default Home;
