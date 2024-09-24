import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "./DrawerScreen";
import AppStack from "./AppStack";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerScreen {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#c6cbef",
                    width: "65%",
                },
                // overlayColor: "transparent",
            }}
        >
            <Drawer.Screen name="AppStack"
                component={AppStack}
                options={{
                    headerShown: false,
                }} />
        </Drawer.Navigator>
    )
}

export default AppDrawer