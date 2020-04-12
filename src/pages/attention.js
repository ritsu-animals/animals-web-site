import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

const AttentionPage = () => {
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
	            利用規約
	         </Styled.h1>
	         <p>
	            当サイトの記事は，運営者個人の経験や爬虫類を中心とした動物に関する知識を学ぶ中で得られた情報を元に書かれます．記事をお読みになる際に，以下に示す免責事項をよくお読みいただき同意をした上でご利用ください．
	         </p>
	         <Styled.h2
	            css={css({
	               my:0,
		       fontSize: 3,
		    })}
	         >
	            免責事項
	         </Styled.h2>
	         <Styled.h3
	            css={css({
	               my:0,
		       fontSize: 2,
		       marginTop: "1em",
		    })}
	         >
	            内容の不保証について
	         </Styled.h3>
                    <ul>
	               <li>当サイトの記事の内容については，サイト運営者の個人的な経験や勉強中の知識を含みます．</li>
	               <li>可能な限り正確な情報をお届けするように努めています．</li>
	               <li>しかし，万が一誤った情報や古い情報が入り込むことがあります．</li>
	               <li>このような場合において，記事に書かれた内容の正確性を保証できません</li>
	            </ul>
	         <Styled.h3
                    css={css({
                       my:0,
                       fontSize: 2,
                       marginTop: "1em",
                    })}
                 >
                    内容の変更について
                 </Styled.h3>
	            <ul>
	               <li>当サイトの記事に書いている内容を予告なく変更することがあります．</li>
	               <li>記事の内容の変更については，より良いものになるように最新の情報に更新するために行います．</li>
	               <li>注意してご利用ください．</li>
	            </ul>
	         <Styled.h3
                    css={css({
                       my:0,
                       fontSize: 2,
                       marginTop: "1em",
                    })}
                 >
                    損害の責任について
                 </Styled.h3>
	            <ul>
	               <li>当サイトの記事に書かれた内容について安全性を保証しません．</li>
	               <li>利用者者様が当サイトの内容を真似した場合に被る損害は，一切責任を負いません．</li>
	            </ul>
	         <Styled.h3
                    css={css({
                       my:0,
                       fontSize: 2,
                       marginTop: "1em",
                    })}
                 >
                    画像の著作権について
                 </Styled.h3>
	            <ul>
	               <li>当サイトの記事に掲載している画像の著作権や肖像権については，各権利の所有者に帰属します．</li>
	               <li>万が一，当サイトの記事の中でこれらの権利を犯しているといったご指摘をお受けした場合は，確認後に対応させていただきます．</li>
	            </ul>
	         <Styled.h3
                    css={css({
                       my:0,
                       fontSize: 2,
                       marginTop: "1em",
                    })}
                 >
                    無断転載について
                 </Styled.h3>
	            <ul>
	               <li>本サイトの記事内の文章，画像，動画などの著作物を無断で使用することを禁止します．</li>
	               <li>運営者が，正しい引用方法以外での転載と判断した場合は法的処置をとる場合があります．</li>
	            </ul>
	         <ul>
                    <Link to="/">Home</Link>
                 </ul>
              </div>
	   </div>
	</div>
	</Styled.root>
    )
}

export default AttentionPage
