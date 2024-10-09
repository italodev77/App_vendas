import Welcome from "../pages/Welcome";

import Login from "../pages/Login";

import Register from "../pages/Register";

import CadCliente from "../pages/RotinasCadastro/CadCliente";

import RotinasCadastro from "../pages/RotinasCadastro/rotinasCadastro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Rotinas from "../pages/Rotinas";
import CadForn from "../pages/RotinasCadastro/CadForn";
import Vendas from "../pages/Vendas";
import TelaFinalizac from "../Component/TelaFinalizac";


const Stack = createNativeStackNavigator();



export default function Routes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Rotinas"
        component={Rotinas}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CadCliente"
        component={CadCliente}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="CadForn"
        component={CadForn}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="RotinasCadastro"
        component={RotinasCadastro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Vendas"
        component={Vendas}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TelaFinalizac"
        component={TelaFinalizac}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
};