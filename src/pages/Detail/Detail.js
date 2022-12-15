import React from "react";
import { Image, Text, View } from "react-native";
import useFetch from "../../../hooks/useFetch";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import styles from "./Detail.styles";

const Detail = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useFetch(
    "https://fakestoreapi.com/products/" + id
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.decription}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
