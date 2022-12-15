import React from "react";
import { Alert, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./Login.styles";
import { Formik } from "formik";
import usePost from "../../../hooks/usePost";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { data, error, loading, post } = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post("https://fakestoreapi.com/auth/login", values);
  }

  if (error) {
    Alert.alert("Dükkan", "hata var");
  }

  if (data) {
    if (data.status === "Error") {
      Alert.alert("Dükkan", "kullanıcı bulunamadı");
    } else {
      dispatch({ type: "SET_USER", payload: { user } });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require("../../assets/login_logo.png")}
        />
      </View>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="kullancı adını girniz..."
              value={values.username}
              onType={handleChange("username")}
              iconName="account"
            />
            <Input
              placeholder="Şifre girniz..."
              value={values.password}
              onType={handleChange("password")}
              iconName="key"
              isSecure={true}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  id: 1,
  email: "John@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  address: {
    city: "kilcoole",
    street: "7835 new road",
    number: 3,
    zipcode: "12926-3874",
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
  },
  phone: "1-570-236-7033",
};
