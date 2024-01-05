import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const featuredRecipes = [
    {
      id: uuidv4(),
      title: 'Delicious Burger',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A classic American dish with a creamy sauce...'
    },
    {
      id: uuidv4(),
      title: 'Pizza',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'An ittalian clasical pizza'
    },
    {
      id: uuidv4(),
      title: 'Delicious Sandwich',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A classic American dish with a creamy sauce...'
    },
    {
      id: uuidv4(),
      title: 'Delicious Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A classic American dish with a creamy sauce...'
    },
    {
      id: uuidv4(),
      title: 'BreakFast Toast',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A classic American dish with a creamy sauce...'
    },
    // Add more featured recipes as needed
  ];

  export default featuredRecipes