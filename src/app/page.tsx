import {Flex} from "@chakra-ui/react";
import HomeScreenModule from "@/modules/homescreen/homeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>

      <Flex>
        <HomeScreenModule />
      </Flex>
    </main>
  );
}
