import React from "react"
import { Link } from "gatsby"

const TestPage = () => {
    return (
	<div> 
           <div>
               <h1>Test Page</h1>
           </div>
           <div>
               <ul>
                   <Link to="/">Home</Link>
               </ul>
           </div>
	</div>
    )
}

export default TestPage
