// import axios from "axios";
import { Button, Text, View } from "react-native";

export default function Index() {
  function onPressFetch() {
    fetch('http://todos')
      .then(response => response.json())
      .then(json => console.log(json))

    // axios.get('http://todos', {
    //   headers: {
    //     "Accept": 'application/json',
    //     "Content-Type": 'application/json'
    //   }
    // })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   })
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={{ marginTop: 10 }}>
        <Button title="HELLO" onPress={onPressFetch} />
      </View>
    </View>
  );

}
