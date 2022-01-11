// API KEY
// https://api.nasa.gov/planetary/apod?api_key=yy66O9lcDVhR5SXRuWmEqmHOqSToiB1caCdOWdGx

import {useMultiAPOD} from "../states/MultiAPODState";
import {Box, Container, SimpleGrid} from "@chakra-ui/react";
import APODCell from "../components/APODCell";
import ParticlesBg from 'particles-bg'
import GithubCorner from 'react-github-corner';
import Loader from "../components/Loader";

function App() {

    const {error, isLoading, data: apods} = useMultiAPOD();

    if (error)
        return <h1>Error</h1>

    return (
        <Box py={15}>
            <ParticlesBg color="#FFFFFF" num={200} type="cobweb" bg={{
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
                backgroundColor: "black"
            }} />

            {!isLoading ? (
                <Container maxW='container.xl' pt={10}>
                    <SimpleGrid columns={2} spacing={10}>
                        {apods.map((singleApod, i) => <APODCell key={i} {...singleApod} />)}
                    </SimpleGrid>
                </Container>
            ) : <Loader color={"white"}/>}

            <GithubCorner bannerColor="white" octoColor="black" href="https://github.com/username/repo"/>
        </Box>
    );
}

export default App;
