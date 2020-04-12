import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"
import ani_1 from "../../content/assets/fig_animals/ani_1.jpg"
import ani_2 from "../../content/assets/fig_animals/ani_2.jpg"
import ani_3 from "../../content/assets/fig_animals/ani_3.jpg"
import ani_4 from "../../content/assets/fig_animals/ani_4.jpg"
import ani_5 from "../../content/assets/fig_animals/ani_5.jpg"

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
	         <p>
	            どうも，律です．
	         </p>
	         <p>
	            爬虫類が好きで，いくつかの生体を飼育しています．とはいえ，まだまだ飼育初心者であり，勉強中です．
                 </p>
	         <Styled.h2
	            css={css({
	               my:0,
		       fontSize: 3,
		    })}
	         >
	            飼育中の動物たち
	         </Styled.h2>
	            現在のところ蛇を3匹を飼育しています．また，爬虫類以外にもハムスターを飼育しています．
	         <ul>
	            <li>コーンスネーク(シルクストライプ)
	    　　　　   <ul>
	                  <li>シルク：一番最初にお迎えした子．ペットシーツの下がお気に入り．</li>
	                  <img src={ani_1} alt="へびのシルク" className="fig" />
	               </ul>
                    </li>
	            <li>コーンスネーク(ノーマル)
	               <ul>
	                  <li>ニョロ：素早い動きを見せる子．でもご飯はゆっくり食べます．</li>
	                  <img src={ani_2} alt="ヘビのニョロ" className="fig" />
	               </ul>
	            </li>
	            <li>ボールパイソン(FHノーマル)
	               <ul>
	                  <li>スフィ：おとなしい子．ミトンの中がお気に入り．</li>
	                  <img src={ani_3} alt="へびのスフィ" className="fig" />
	               </ul>
	            </li>
	            <li>ハムスター(ジャンガリアン)
	               <ul>
	                  <li>お嬢：好奇心旺盛で迷ったらとりあえず噛む．</li>
	                  <img src={ani_4} alt="ハムスターのお嬢" className="fig" />
	               </ul>
	            </li>
	            <li>ハムスター(ブルーサファイヤ)
	               <ul>
	                  <li>蒼くん：のんびり屋さん．お散歩が大好き．</li>
	                  <img src={ani_5} alt="ハムスターの蒼くん" className="fig" />
	               </ul>
	            </li>
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

export default ProfilePage
