import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTitle = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({});
