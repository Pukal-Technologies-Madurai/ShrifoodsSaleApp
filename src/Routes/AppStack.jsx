import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OpenCamera from "../Components/OpenCamera";

import StartScreen from "../Screens/StartScreen";
import LoginScreen from "../Screens/login/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import Customers from "../Screens/retailers/Customers";
import CustomersDetails from "../Screens/retailers/CustomersDetails";
import AddCustomer from "../Screens/retailers/AddCustomer";
import EditCustomer from "../Screens/retailers/EditCustomer";
import Attendance from "../Screens/attendance/Attendance";
import EndDay from "../Screens/attendance/EndDay";
import StockClosing from "../Screens/StockClosing";
import AttendanceInfo from "../Screens/attendance/AttendanceInfo";
import RetailerVisit from "../Screens/retailers/RetailerVisit";
import RetailerVisitLog from "../Screens/reports/RetailerVisitLog";
import AttendanceReport from "../Screens/attendance/AttendanceReport";
import StockInfo from "../Screens/reports/StockInfo";
import SaleOrder from "../Screens/sales/SaleOrder";
import OrderPreview from "../Screens/reports/OrderPreview";
import ProfileScreen from "../Screens/ProfileScreen";
import RetailerMapView from "../Screens/RetailerMapView";
import Sales from "../Screens/sales/Sales";
import LoginPortal from "../Screens/login/LoginPortal";
import DeliveryCheck from "../Screens/reports/DeliveryCheck";
import RetailerHistory from "../Screens/retailers/RetailerHistory";

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
                header: () => null,
            }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginPortal" component={LoginPortal} />

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

            <Stack.Screen name="Customers" component={Customers} />
            <Stack.Screen
                name="CustomersDetails"
                component={CustomersDetails}
            />
            <Stack.Screen name="RetailerVisit" component={RetailerVisit} />
            <Stack.Screen name="RetailerHistory" component={RetailerHistory} />

            <Stack.Screen name="RetailerLog" component={RetailerVisitLog} />
            <Stack.Screen name="StockInfo" component={StockInfo} />
            <Stack.Screen
                name="AttendanceReport"
                component={AttendanceReport}
            />

            <Stack.Screen name="AttendanceInfo" component={AttendanceInfo} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="EndDay" component={EndDay} />

            <Stack.Screen name="OpenCamera" component={OpenCamera} />
            <Stack.Screen name="StockClosing" component={StockClosing} />

            <Stack.Screen name="Orders" component={SaleOrder} />
            <Stack.Screen name="OrderPreview" component={OrderPreview} />
            <Stack.Screen name="Sales" component={Sales} />

            <Stack.Screen name="DeliveryCheck" component={DeliveryCheck} />

            {/* Not Used */}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
                name="AddCustomer"
                component={AddCustomer}
                options={{ title: "Retailer Visit" }}
            />
            <Stack.Screen name="EditCustomer" component={EditCustomer} />
            <Stack.Screen
                name="RetailerMapView"
                component={RetailerMapView}
                options={{ title: "Retailers" }}
            />
        </Stack.Navigator>
    );
};

export default AppStack;
