// Task build a react functional component
// 1. import React
// 2. need a function
//      a. return statement that contains html
//      b. one and only one jsx element (or null)
// 3. export

import React from "react"
import HelloWorld from "./HelloWorld"

function HelloWorldContainer() {
    // wat todo here?
    
    return (
        <div className="helloWorldContainer">
            <HelloWorld />
        </div>
    )

}

export default HelloWorldContainer