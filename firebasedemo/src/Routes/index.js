import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Registration from "../components/Registration";

const Route = createStackNavigator(
    {
       Home:Home,
       Products:Products,
       Cart:Cart,
       Invoice:Invoice
    },
    {
      initialRouteName: "Home"
    }
  );
  const RouterConfig = createAppContainer(Route);
  
  export default RouterConfig;