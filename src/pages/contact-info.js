import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

const ContactPage = () => {
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
	            お問い合わせ先
	         </Styled.h1>
                 <p>
	            本サイトの記事の内容に関するご意見・ご質問は，Twitter及びメールにてお受けいたします．
	         </p>
	         <p>
	            <ul>
	               <li><a href="https://twitter.com/reptiles_022">Twitter</a>：@reptiles_022 </li>
	               <li>Mail：ritsuanimals@gmail.com </li>
	            </ul>
	         </p>
	         
	         <ul>
                    <Link to="/">Home</Link>
                 </ul>
              </div>
	   </div>
	</div>
	</Styled.root>
    )
}
export default ContactPage
