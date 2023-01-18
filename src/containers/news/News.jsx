import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import news__banner  from '../../assets/news__banner.png';
import Button from 'react-bootstrap/Button';
import { TbArrowsSort } from 'react-icons/tb';
import {BiTimeFive} from 'react-icons/bi';

const News = () => (
  <div>
    <header id="News__header">
        <div className="News__banner">
          <div className="News__banner__img"></div>
        </div>
    </header>
    <section id="News__section">
      <nav id='News__nav'>
    <h2>News</h2>
    <div className="d-md-flex justify-content-between m-2">
              <div className="News__none550 text-nowrap d-inline-flex">
                <Link to="/" className="News__text-nowrap">
                  <p>首頁</p>
                </Link>
                <p> ▶ </p>
                <Link to="#" className="News__text-nowrap">
                  <p>展覽空間</p>
                </Link>
              </div>
              <div className="col-7">
              <Button className="News__button" variant="dark"> 
                由新至舊<TbArrowsSort />
              </Button>
              </div>
            </div>
    </nav>
    <main className="News__main">
    <div className='News__main-wrap'>
                                 
              <div classMame="News__img-id-wrap">
              <Link to="./NewsId">
              <img className="News__card-img-top" src={news__banner} />
              <h4 className='News__newsId ' >達文西光影藝術特展</h4>
              <p className='News__article' ><BiTimeFive/>2022-12-01 ~ 2022-12-07</p>
              <p className="News__text">全台首次以達文西為主題的藝術光影特展《走進大師的腦內：李奧納多·達文西-光影體驗展》，將於 12 月 2 日在双融域 AMBI SPACE ONE（台北101五樓）作為亞洲首站展出</p>
              </Link>
              </div>

              <div className="News__img-id-wrap">
            <Link to="./ProductsDetail"> 
              <img className="News__card-img-top" src="https://ak-d.tripcdn.com/images/0352g12000a5wnpl3AE0E_C_1136_640_Q60.jpg?proc=source/trip;namelogo/d_40" />
              <h5 className='News__newsId' >米奇藝術展全球巡展--台北站</h5>
              <p className='News__article' >2022/11/12（六）- 2023/02/28（二）</p>
              <p className="News__text">$16900</p>
              </Link>
              </div>
             
           

     
              <div className="News__img-id-wrap">
            <Link to="./ProductsDetail">     
              <img className="News__card-img-top" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/t9kk4qqa6hepgtebwkml.webp" />
           
              <h5 className='News__newsId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
              <p className='News__article' >作者作者作者作者</p>
              <p className="News__text">$16900</p>
              </Link>
              </div>
             
          

              <div className="News__img-id-wrap">
            <Link to="ProductsDetail">
              <img className="News__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMjA5XC9tYWluXC96b29tXC85MDAwOTVfN2FhZWM3ZDc0Mjg0ZDQ1NzgxYWVjOTRhNGE5MzQyY2EuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=601f8e5811c653113228a4b0130e66339661804a70b61950cbf718d21e80ffdc"  />
            
              <h5 className='News__newsId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
              <p className='News__article' >作者作者作者作者</p>
              <p className="News__text">$16900</p>
              </Link>
              </div>
             
        

      
              <div className="News__img-id-wrap">
             <Link to="ProductsDetail">
               <img className="News__card-img-top" src="https://s3.resource.opentix.life/upload/program/1661484208466q9AKB2ZlCN.jpeg"/>

            
               <h5 className='News__newsId'>想你到月球｜張雨生特展 FLY ME TO THE MOON & BACK</h5>
               <p className='News__article' >2022/11/12（六）- 2023/02/28（二）</p>
               <p className="News__text">"張雨生一生創作出許多膾炙人口的作品，音樂創作風格多變，有「音樂魔術師」之稱。
第 28 屆金曲獎獲頒「特別貢獻獎」、被認為是台灣華語樂壇史上最優秀的歌手之一。
藉由一場漫步太空的體驗，跟著太空人張雨生參與一場太空登月計畫。
透過田野、訪調與研究，讓您認識與了解張雨生的個人魅力與音樂成就。
結合五組當代音樂人重新詮釋張雨生的音樂，再次挖掘「音樂」的本質魅力。"</p>
               </Link>
               </div>
            

               <div className="News__img-id-wrap">              
              <Link to="ProductsDetail">
               
              <img className="News__card-img-top" src="https://cdn.singulart.com/artworks/v2/cropped/23911/main/zoom/1592667_3c62c3c91391f5615033b528f97ad634.jpeg" />
              
              <h5 className='News__newsId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
              <p className='News__article' >作者作者作者作者</p>
              <p className="News__text">$16900</p>
              </Link>
              </div>
             
           
      
              <div className="News__img-id-wrap">
            <Link to="ProductsDetail">
              <img className="News__card-img-top" src="https://res.klook.com/image/upload/c_fill,w_1160,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ztcdcpdfbsymxtnnx7cd.webp"  />
             
              <h5 className='News__newsId' >Lurking: a Wellsaid album release show</h5>
              <p className='News__article' >2023/2/18日（六）</p>
              <p className="News__text">前陣子搞簽證，把護照拿出來，發現背面還貼著上一次出境演出的 stage pass：2020年12月31日在 The Wall 的跨年演出。想起那晚吃過咖哩，半路和朋友溜出去買啤酒，聊2021要做的事。</p>
              </Link>
              </div>
             
           
 
 
         
              <div className="v__img-id-wrap">       
              <Link to="ProductsDetail"> 
              <img className="News__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xNjAwM1wvbWFpblwvem9vbVwvMTc2MTUwMV9kYmI0M2I5MGYwNGU0NGUzMzQwOGZkZWVmMTE2ZjQ0My5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=f62f7c40419c52992cc0f234f3e884557b64e56ea041109fe2bf577e552018b4" />
             
              <h5 className='News__newsId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
              <p className='News__article' >作者作者作者作者</p>
              <p className="PNews__price">$16900</p>
             
              </Link>
              </div>
    
     
              <div className="News__img-id-wrap">                            
              <Link to="ProductsDetail">
              <img className="News__card-img-top" src="https://pbs.twimg.com/media/Exfe8tnVIAMjjzu?format=jpg&name=large" />
             
              <h5 className='News__newsId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
              <p className='News__article' >作者作者作者作者</p>
              <p className="News__price">$16900</p>
           
              </Link>
              </div>
              </div>
    </main>
    </section>
  </div>
)

export default News
