import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import "./App.css";

import GoalMakerClient from "./Components/Goal-maker-client";
import Graph from "./Components/Graph";

function App() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2 }}
      justifyContent="center"
      alignItems="center"
      
    >
      <Box>
        <GoalMakerClient />
      </Box>
    </Stack>
  );
}

export default App;
