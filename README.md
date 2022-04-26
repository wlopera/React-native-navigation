# React-native-navigation
APP React-Native uso de Navegación por pantallas

## Carga de datos iniciales
![Captura](https://user-images.githubusercontent.com/7141537/165118268-dd267d88-118c-477b-be8a-e0b0f3e47482.PNG)

## Crear Grid y estilos
![Captura](https://user-images.githubusercontent.com/7141537/165127391-8273a9b0-a5ef-4c72-b50c-97726be68e83.PNG)

## Crear Lista de Comidas y estilos
![Captura](https://user-images.githubusercontent.com/7141537/165164057-dd6c3ae7-fa73-42a6-8b35-0e6754c86c05.PNG)

## Crear Lista de detalles (useNavigation)
![Captura](https://user-images.githubusercontent.com/7141537/165182707-79091df2-4a12-448a-a81d-2d44f5eb4768.PNG)

## Lista de detalles - estilos y componentes
![Captura](https://user-images.githubusercontent.com/7141537/165339577-ecf65162-eb0b-456f-9482-317ba0cfde81.PNG)

## Agregar botón a un componente
* En componente inicial (Definiciones de pantallas)
```
<Stack.Navigator>
...
   <Stack.Screen
      name="MealDetail"
      component={MealDetailsScreen}
      options={{
      title: "Detalles",
        headerRight: () => {
        return <Button title="Presióname" />;
       },
       }}
   />
...
</Stack.Navigator>
```

* Dentro del componente 
```
...
const MealDetailsScreen = ({ route, navigation }) => {
  const headerButtonPressHandler = () => {
    console.log("Botón Presionado");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Presióname" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);
...
```
![Captura](https://user-images.githubusercontent.com/7141537/165346351-d75fc323-268f-49c3-91f9-627aaf842276.PNG)


## Agregar botón personalizado
* En componente IconButton.js
```
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
```
* En componente MealDetailsScreen (uso del botón personalizado)
```
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
```

Nota: Se intalo la librería (npm i @expo/vector-icons) por problema con md5-file-promise

![Captura](https://user-images.githubusercontent.com/7141537/165361241-cda3f296-c47f-45b5-8e25-90215f6c9f2c.PNG)


