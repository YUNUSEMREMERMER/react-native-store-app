import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Wrapper() {
  const Stack = createNativeStackNavigator();
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="ProductPage"
              component={Products}
              options={{
                title: "Dükkan",
                headerStyle: { backgroundColor: "#03c961" },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerRight: () => (
                  <Icon
                    name="logout"
                    size={25}
                    color="white"
                    onPress={() => dispatch({ type: "REMOVE_USER" })}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={Detail}
              options={{
                title: "Detay",
                headerStyle: { backgroundColor: "#03c961" },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
                headerTintColor: "white",
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
