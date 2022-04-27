import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      mealId: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
