import {Flex} from "@chakra-ui/react";
import HomeScreenModule from "@/modules/homeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "@/modules/navBar";

export default function Home() {
  return (
    <main>

      <Flex>
        <NavBar></NavBar>
        <HomeScreenModule />
      </Flex>
    </main>
  );
}
