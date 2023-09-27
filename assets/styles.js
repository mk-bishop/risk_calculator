import { StyleSheet, Dimensions } from "react-native";
import {
    useFonts,
    JosefinSans_400Regular,
    JosefinSans_400Regular_Italic,
    JosefinSans_700Bold,
    JosefinSans_700Bold_Italic,
    SedgwickAveDisplay_400Regular,
    SedgwickAve_400Regular
} from '@expo-google-fonts/dev';

let primary1 = '#e40ff7';
let primary2 = '#b8b8d1';
let primary3 = '#c2f9bb';
let primary4 = '#62c370';
let primary5 = '#20063B';
const headingFont = SedgwickAveDisplay_400Regular;
const subtitleFont = SedgwickAve_400Regular;
const regularFont = JosefinSans_400Regular;
const italicFont = JosefinSans_400Regular_Italic;
const boldFont = JosefinSans_700Bold;
const boldItalicFont = JosefinSans_700Bold_Italic;

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: primary1,
        color: primary5,
        fontFamily: regularFont,
        
    },
    title: {
        backgroundColor: primary2,
        color: primary1,
        fontFamily: headingFont
    },
    container: {
        backgroundColor: primary3,
        color: primary5,
        fontFamily: regularFont,
    },
    menu: {
        backgroundColor: primary4,
        color: primary5,
        fontFamily: boldFont
    }
});