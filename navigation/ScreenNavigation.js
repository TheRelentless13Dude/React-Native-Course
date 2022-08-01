import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Platform} from "react-native";
import Colors from "../constants/app/Colors";

import ProfessionsScreen from "../screens/ProfessionsScreen/ProfessionsScreen";
import ResourcesScreen from "../screens/ResourcesScreens/ResourcesScreen";
import EquipmentScreen from "../screens/EquipmentScreens/EquipmentScreen";
import BuildingsScreen from "../screens/BuildingsScreens/BuildingsScreen";
import ShrinesScreen from "../screens/ShrinesScreens/ShrinesScreen";
import MainScreen from "../screens/MainScreen";
import BlacksmithScreen from "../screens/ProfessionsScreen/Blacksmith/BlacksmithScreen";
import CarpenterScreen from "../screens/ProfessionsScreen/Carpenter/CarpenterScreen";
import CookScreen from "../screens/ProfessionsScreen/Cook/CookScreen";
import FarmerScreen from "../screens/ProfessionsScreen/Farmer/FarmerScreen";
import JanitorScreen from "../screens/ProfessionsScreen/Janitor/JanitorScreen";
import MerchantScreen from "../screens/ProfessionsScreen/Merchant/MerchantScreen";
import MineralsScreen from "../screens/ResourcesScreens/Minerals/MineralsScreen";
import RangerScreen from "../screens/ProfessionsScreen/Ranger/RangerScreen";
import WarriorScreen from "../screens/ProfessionsScreen/Warrior/WarriorScreen";
import WoodcutterScreen from "../screens/ProfessionsScreen/Woodcutter/WoodcutterScreen";
import FoodScreen from "../screens/ResourcesScreens/Food/FoodScreen";
import TreesScreen from "../screens/ResourcesScreens/Trees/TreesScreen";
import ItemsScreen from "../screens/EquipmentScreens/Items/ItemsScreen";
import WeaponsScreen from "../screens/EquipmentScreens/Weapons/WeaponsScreen";

const defaultStackNavOptions = {
    headerTitle: {
        backgroundColor: Platform.OS === 'android' ? Colors.background1 : "white",
        headerTitleStyle: {
            alignSelf: 'center',
        }
    },

};

const ScreenNavigator = createStackNavigator({
    "A Township Tale Wiki": {
        screen: MainScreen
    },
    Professions: {
        screen: ProfessionsScreen
    },
    Resources: {
        screen: ResourcesScreen
    },
    Equipment: {
        screen: EquipmentScreen
    },
    Buildings: {
        screen: BuildingsScreen
    },
    Shrines: {
        screen: ShrinesScreen
    },
    BlackSmith: {
        screen: BlacksmithScreen
    },
    Carpenter: {
        screen: CarpenterScreen
    },
    Cook: {
        screen: CookScreen
    },
    Farmer: {
        screen: FarmerScreen
    },
    Janitor: {
        screen: JanitorScreen
    },
    Merchant: {
        screen: MerchantScreen
    },
    Miner: {
        screen: MineralsScreen
    },
    Ranger: {
        screen: RangerScreen
    },
    Warrior: {
        screen: WarriorScreen
    },
    Woodcutter: {
        screen: WoodcutterScreen
    },
    Food: {
        screen: FoodScreen
    },
    Minerals: {
        screen: MineralsScreen
    },
    Trees: {
        screen: TreesScreen
    },
    Items: {
        screen: ItemsScreen
    },
    Weapons: {
        screen: WeaponsScreen
    },
 });



export default createAppContainer(ScreenNavigator);
