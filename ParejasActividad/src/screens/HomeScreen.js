import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const studentsData = [
  { id: 1, name: 'Juan Pablo Flamenco', carnet: '20220671', photo: require('../img/Juan.png') },
  { id: 2, name: 'Gerson Echeverria Hernandez', carnet: '20220175', photo: require('../img/Gerson.png') }
];

const StudentsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {studentsData.map(student => (
        <Card key={student.id} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Image source={student.photo} style={styles.image} />
            <Title style={styles.title}>{student.name}</Title>
            <Paragraph style={styles.text}>Carnet: {student.carnet}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  text: {
    fontSize: 16,
    color: '#666666',
  },
});

export default StudentsScreen;
