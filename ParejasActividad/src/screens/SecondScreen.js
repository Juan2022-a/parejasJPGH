import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

const favoriteFoods = [
  {
    id: 1,
    name: 'Costillas Ahumadas',
    description: 'La mejor comida que existe en la vida By Juan.',
    image: require('../img/costillaAhumada.png'),
  },
  {
    id: 2,
    name: 'Lasaña',
    description: 'La lasaña es vida By Gerson.',
    image: require('../img/lasaña.png'),
  },
  {
    id: 3,
    name: 'Bolas de papa con queso',
    description: 'Loco que ricas son uHmmmmmmmm.',
    image: require('../img/bolasdepapa.png'),
  },
  {
    id: 4,
    name: 'Carne asada',
    description: 'La carne asada es vida nada mas que agregar.',
    image: require('../img/carneasada.png'),
  },
  {
    id: 5,
    name: 'Pasta Alfrediño',
    description: 'Si se cocina bien lo mejor de este universo tal vez.',
    image: require('../img/pastaalfredo.png'),
  },
  {
    id: 6,
    name: 'Yo JP',
    description: 'Le gusta a Gerson',
    image: require('../img/jpYO.png'),
  },
];
const statusBarHeight = Constants.statusBarHeight || StatusBar.currentHeight || 0;

const FavoriteFoodsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {favoriteFoods.map(food => (
        <View key={food.id} style={styles.foodContainer}>
          <Image source={food.image} style={styles.foodImage} />
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDescription}>{food.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:statusBarHeight,
    paddingHorizontal:10,
    backgroundColor: '#fff',
  },
  foodContainer: {
    marginBottom: 20,
  },
  foodImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  foodDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default FavoriteFoodsScreen;
