import { useState } from "react";
import { View, Text, Image, ScrollView,Button, Pressable, Modal, StatusBar, Alert } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
      <StatusBar backgroundColor="green" hidden={isVisible}/>
      <ScrollView>
        <Button title="toggleVisibility" onPress={()=>setIsVisible(!isVisible)}/>
        <Button title="alert" onPress={()=>Alert.alert("hello")}/>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Button title="show model" onPress={()=> setIsModelVisible(true)}/>
      <Text style={{ color: "white" }}>
        k chha ipsum dolor sit amet consectetur adipisicing elit. Porro
        aspernatur ex quam iste harum hic tempore? Neque accusantium in deleniti
        ullam quasi, dolores tenetur officia autem explicabo, numquam enim.
        Necessitatibus et veniam, cupiditate, impedit, quo quibusdam veritatis
        expedita id eaque mollitia accusamus provident itaque. Id quaerat omnis
        nobis maiores? Nesciunt error tempore optio distinctio enim, natus quam,
        culpa veritatis quisquam tenetur quas quibusdam illo in dolorem odit,
        blanditiis debitis voluptas libero recusandae. Consequatur nam cumque
        ipsum culpa, quis dicta deleniti nesciunt quidem omnis mollitia
        voluptatem aperiam quaerat placeat alias odio vel voluptates? Sequi
        consequuntur praesentium earum recusandae et in numquam deserunt, nam
        provident a mollitia tempora similique blanditiis nostrum quis quibusdam
        porro distinctio! Impedit eaque maxime illo, magnam saepe ipsam, animi
        ex rem, iste sunt dolor deserunt modi veniam numquam tempora architecto
        aspernatur vitae officia error veritatis autem minus praesentium sint
        incidunt. Recusandae inventore impedit velit officiis ut ab harum atque
        enim assumenda? Itaque molestias beatae quibusdam, alias ut architecto
        nulla adipisci illo ipsam, dolorem maxime, exercitationem ullam soluta
        excepturi illum dolores cupiditate officia ab eligendi commodi! Modi,
        dolores quia optio voluptas aliquid consequuntur, explicabo rerum velit
        reprehenderit perferendis eveniet repudiandae voluptatibus fugit
        consequatur assumenda quas praesentium dolorem reiciendis ipsum.
      </Text>
      {/* <ImageBackground source={logoImg} style={{flex: 1}}>
       <Text style={{color: "white"}}> Hello World</Text>
    </ImageBackground> */}
    <Pressable onPress={()=> console.log("Image pressed")} onLongPress={()=> console.log("Long pressed")} onPressOut={()=> console.log("Long pressed sucessfully")}>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
    </Pressable>
      <Button title="Press" onPress={()=> console.log("Button Pressed")} color="midnightblue"/>
      <Modal visible={isModelVisible} onRequestClose={()=>{setIsModelVisible(false)}} animationType="slide" presentationStyle="formSheet">
        <View style={{flex:1, backgroundColor: "lightblue",padding: 60}}>
          <Text> Model Content</Text>
          <Button title="Close Model" onPress={()=> setIsModelVisible(false)}/>
        </View>
      </Modal>
      </ScrollView>
    </View>
  );
}
