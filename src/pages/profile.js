import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

const ProfilePage = () => {
    return (
	<Styled.root>
        <div>
           <div
               css={css({
               maxWidth: `container`,
	         mx: `auto`,
                 px: 3,
                 py: 4,
              })}
	      
           >
              <div>
	         <Styled.h1
                    css={css({
                       my: 0,
                       fontSize: 4,
                    })}
                 >
	            運営者プロフィール
	         </Styled.h1>
                 <ul>
                    <Link to="/">Home</Link>
                 </ul>
              </div>
	    </div>
        </div>
	</Styled.root>
    )
}

export default ProfilePage
