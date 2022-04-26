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

## Agregar botin a un componente
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



