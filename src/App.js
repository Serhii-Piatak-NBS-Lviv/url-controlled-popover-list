import { Grid, GridItem } from '@chakra-ui/react';
import { Petname } from './features/Petname';
import petNamesApi from './features/rest';
// import './App.css';

function App() {
  return (
   <Grid templateColumns='repeat(5, 1fr)' gap={15} w='50%' m='2%'>
    { petNamesApi.map((itm) => {
      return (<GridItem w='100%' key={itm.name}>
        <Petname name={itm.name} title={itm.title} description={itm.description} />
      </GridItem>)
    }) }
  </Grid>
  );
}

export default App;
