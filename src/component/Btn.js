import React from 'react';
import { Button } from 'evergreen-ui';

function Btn(props){
    return(
        <div>
            {(props.status === 0)?
            <Button margin={10} appearance="primary" onClick={props.start}>START</Button>:""
            }
            {(props.status === 1)?
            <div>
                <Button margin={10} appearance="primary" onClick={(props.stop)}>PAUSE</Button>
                <Button margin={10} appearance="primary" intent="danger" onClick={(props.reset)}>RESET</Button>
            </div>: ""
            }
            {(props.status === 2)?
            <div>
                <Button margin={10} appearance="primary" onClick={(props.resume)}>RESUME</Button>
                <Button margin={10} appearance="primary"  intent="danger" onClick={(props.reset)}>RESET</Button>
            </div>: ""
            }
             {(props.status === 3)?
            <div>
                <Button margin={10} appearance="primary"  intent="danger" onClick={(props.reset)}>RESET</Button>
            </div>: ""
            }
        </div>
    );
}

export default Btn;