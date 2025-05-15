// Import side effects first and services
import enableMocking from "./enableMocking";

// Initialize services
enableMocking();

// Register app entry through Expo Router
import "expo-router/entry";
