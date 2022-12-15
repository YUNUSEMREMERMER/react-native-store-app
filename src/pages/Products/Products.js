import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./Products.styles";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Products = ({ navigation }) => {
  const { error, loading, data } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
