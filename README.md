# React-native-navigation
APP React-Native uso de Navegación por pantallas - Stack Navigator y Drawer Navigator

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

## Agregar Navegacion anidada (Stack Navigation - Drawer Navigation)
* Nota: Se intalo la librería (npm install --save md5-file) por problema con md5-file-promise - Drawer Navigation
 
![Captura](https://user-images.githubusercontent.com/7141537/165404847-d6754ee0-81c2-4619-bc1a-0020be9d6e91.PNG)

![Captura1](https://user-images.githubusercontent.com/7141537/165404841-38eb72ad-5f97-425b-b589-91b6d92ee98e.PNG)

![Captura2](https://user-images.githubusercontent.com/7141537/165404846-f968a5ab-bf9f-4398-9252-94a75c4e9ee6.PNG)

## Uso de API Context de React - Agregar listado de favoritas
![Captura0](https://user-images.githubusercontent.com/7141537/165554593-015a4182-3c3d-4e83-8c64-e12da5c4da6a.PNG)

## Seleccionar Favoritas
![Captura1](https://user-images.githubusercontent.com/7141537/165554566-6e077530-f64b-445f-af6c-01ae3e0fd5ba.PNG)
![Captura2](https://user-images.githubusercontent.com/7141537/165554578-851ca98c-a7fa-4d3a-95ca-87429f0ce5c6.PNG)

## Favoritas seleccionadas
![Captura1-1](https://user-images.githubusercontent.com/7141537/165554576-eb063c7d-7186-40c7-8b53-36338d3b1f53.PNG)
![Captura2-2](https://user-images.githubusercontent.com/7141537/165554582-6f422964-f4ef-4a13-bb78-a7f479e63a2c.PNG)

## Lista de Favoritas
![Captura3](https://user-images.githubusercontent.com/7141537/165554586-60822ad9-7587-4e3b-8adf-6f3b56d8ba4a.PNG)

## Mensaje si no posee favoritas
![Captura](https://user-images.githubusercontent.com/7141537/165554591-1a04650f-d065-4bfe-ac1e-7386365e88ec.PNG)

