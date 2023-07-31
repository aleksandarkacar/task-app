import React, {ReactNode} from "react";
import { Button } from "@mui/material";
export default function TextWithNumber({
    children
  }: {
    children: (num: number) => ReactNode
  }) {
    const [ state, stateSet] = React.useState<number>(1);
  
    return (<div>
      <div>
        {children(state)}
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={() => stateSet(state + 1)}> Add </Button>
      </div>
    </div>)
  }