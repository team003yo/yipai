// import React from 'react'
import { Link   } from 'react-router-dom'
import './products.css'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ProductsPagination from './ProductsPagination'


//篩選區域
import ProductsSize_Slider from './ProductsSize_Slider'
import ProductsPrice_Slider from './ProductsPrice_Slider'
import ProductsBurger from './ProductsBurger'

//icon
import { BiRectangle } from 'react-icons/bi'
import { TbRectangleVertical, TbRectangle } from 'react-icons/tb'
import { RiArrowUpSLine,RiArrowDownSLine } from 'react-icons/ri'
import { RiMenu3Line, RiCloseLine, RiCreativeCommonsZeroLine } from 'react-icons/ri'

//連接資料庫
import axios from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';


function Products  ()  {
  window.scrollTo(0, 800);
  const [product, setProducts] = useState([])
  //product初始值
  const [originalProduct, setOriginalProducts] = useState([])

 
  //select顯示在頁面的值
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [selectedCreation_year, setSelectedCreation_year] = useState('')
  const [selectedProduct_style, setSelectedProduct_style] = useState('')
  const [selectedWidth, setSelectedWidth] = useState('')
  const [selectedWork_hue, setSelectedWork_hue] = useState('')
  const [selectedHegiht, setSelectedHegiht] = useState('')

  
  const [selectedPrice, setSelectedPrice] = useState('')

  // Width
  const [widthRange, setWidthRange] = useState('所有')
  
  const widthRangeTypes = ['所有', '50', '100', '300', '400',]
  const hegihtRangeTypes = ['所有', '50', '100', '300', '400',]

  // radio
  const [priceRange, setPriceRange] = useState('所有')
  const [Product_style, setProduct_styleRange] = useState('所有')
  const priceRangeTypes = ['所有', '2000-9999', '10000-19999', '20000-29999', '30000-49999','100000']
 
  
    //清除鍵
    const handleClear = () => {
      //清空初始值
      setProducts(originalProduct)
      console.log(originalProduct)


      //清空媒材
      setSelectedMaterial('')
      //清空風格
      setSelectedProduct_style('')
      //清空年份
      setSelectedCreation_year('')
      //清空顏色
      setSelectedWork_hue([])
      //清空Width
      setSelectedWidth([])
      //清空Hegiht
      setSelectedHegiht([])
      //清空價格
      setSelectedPrice([])
  
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(13)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = product.slice(firstPostIndex, lastPostIndex)
    const pages = Math.ceil(product.length / postsPerPage)
    //console.log(currentPage,product.length,pages)
  
  useEffect(() => {
    console.log('空陣列的 useEffect');
  }, []);

  useEffect(() => {
    // console.log('第二個參數是空陣列');
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getProducts() {
      let response = await axios.get(`http://localhost:3001/product`);
      setProducts(response.data);
      console.log(response.data);
      setOriginalProducts(response.data);
    }
    getProducts();
  }, []);

  
  //選擇媒材
  const handleClick = (value, type) => {
    //先設定一個filter(符合條件的新陣列)值
    let filtered =[...originalProduct]
    if (type === 'material') {
      // 處理媒材選項
      const material = value
      filtered=filtered.filter((product)=>product.material===material)
      setProducts(filtered) // 設置回初始值
      // console.log('初始值：', originalProduct);
      setSelectedMaterial(value)
      console.log(filtered)
      console.log('媒材選項：', value)
    }
    if (type === 'product_style') {
      // 處理風格選項
      const product_style = value
      filtered=filtered.filter((product)=>product.product_style===product_style)
      setProducts(filtered) // 設置回初始值
      // console.log('初始值：', originalProduct);
      setSelectedProduct_style(value)
      console.log(filtered)
      console.log('風格選項：', value)
    }
      // 處理依照年份排序
    if (type === 'creation_year') {
        const sortOrder = value
        filtered = [...filtered].sort((a, b) => {
          if (sortOrder === '由舊至新') {
            return a.creation_year - b.creation_year;
          } else if (sortOrder === '由新至舊') {
            return b.creation_year - a.creation_year;
          }
        });
        setProducts(filtered);
      }

    if (type === 'work_hue') {
      // 處理顏色選項
      const work_hue = value  
      //顏色的陣列(重複不出現)
      let newSelectedWork_hue = [...selectedWork_hue]  

      if (newSelectedWork_hue.includes(work_hue)) {
        newSelectedWork_hue = selectedWork_hue.filter ((d) => d !== work_hue)
        setSelectedWork_hue(selectedWork_hue.filter((d) => d !== work_hue))
      } else {
        newSelectedWork_hue = [...selectedWork_hue, work_hue]
        setSelectedWork_hue([...selectedWork_hue, work_hue])
      }
      //filtered=filtered.filter((product)=>product.work_hue===work_hue)

      const newFiltered = filtered.filter((prodcut, i) => {
        let found = false
        for (let i = 0; i < newSelectedWork_hue.length; i++) {
          if (prodcut.work_hue.includes(newSelectedWork_hue[i])) {
            found = true
            break
          }
        }
        return found
      })
      setProducts(newFiltered)

      console.log(filtered.length, newSelectedWork_hue, newFiltered.length)
      console.log('顏色選項：', newSelectedWork_hue)
    }
  }
  const handleProduct_styleRange = (value, type) => {
    
    let Productsfilter = [...originalProduct]
  }

// 處理Hegiht區間選項
const handleHegihtRange = (value, type) => {
    
  let Productsfilter = [...originalProduct]
 
    switch (value) {
    case '50':
      Productsfilter = Productsfilter.filter((product) => {
        return  product.hegiht >= 50 && product.hegiht <= 99
      })
    console.log(Productsfilter)
    console.log('Hegiht：', value)
      break
    case '100':
      Productsfilter = Productsfilter.filter((product) => {
        return product.hegiht >= 100 && product.hegiht <= 299
      })
      break
    case '300':
      Productsfilter = Productsfilter.filter((product) => {
        return product.hegiht >= 300 && product.hegiht <= 399
      })
      break  
    case '400':
      Productsfilter = Productsfilter.filter((product) => {
        return product.hegiht >= 400 
        })
      break  
    // 指所有的產品都出現
     default:
      break
  }
  setProducts(Productsfilter);
  // return Productsfilter
}

// 處理Width區間選項
const handleWidthRange = (value, type) => {
    
  let Productsfilter = [...originalProduct]
 
    switch (value) {
    case '50':
      Productsfilter = Productsfilter.filter((product) => {
        return  product.width >= 50 && product.width <= 99
      })
    console.log(Productsfilter)
    console.log('Width：', value)
      break
    case '100':
      Productsfilter = Productsfilter.filter((product) => {
        return product.width >= 100 && product.width <= 299
      })
      break
    case '300':
      Productsfilter = Productsfilter.filter((product) => {
        return product.width >= 300 && product.width <= 399
      })
      break  
    case '400':
      Productsfilter = Productsfilter.filter((product) => {
        return product.width >= 400 
        })
      break  
    // 指所有的產品都出現
     default:
      break
  }
  setProducts(Productsfilter);
  // return Productsfilter
}

  // 處理價格區間選項
  const handlePriceRange = (value, type) => {
    
    let Productsfilter = [...originalProduct]
    // if (type === 'price') {
    //   const price = value
    //   Productsfilter=Productsfilter.filter((product)=>product.price===price)
    //   setProducts(Productsfilter) // 設置回初始值
    //   setSelectedPrice(value)
    //   console.log(Productsfilter)
    //   console.log('價格：', value)
    // }  
      switch (value) {
      case '2000-9999':
        Productsfilter = Productsfilter.filter((product) => {
          return  product.price >= 2000 && product.price <= 9999
        })
              console.log(Productsfilter)
      console.log('價格：', value)
        break
      case '10000-19999':
        Productsfilter = Productsfilter.filter((product) => {
          return product.price >= 10000 && product.price <= 19999
        })
        break
      case '20000-29999':
        Productsfilter = Productsfilter.filter((product) => {
          return product.price >= 20000 && product.price <= 29999
        })
        break  
      case '30000-49999':
        Productsfilter = Productsfilter.filter((product) => {
          return product.price >= 30000 && product.price <= 49999
        })
        break  
      case '50000-99999':
        Productsfilter = Productsfilter.filter((product) => {
          return product.price >= 50000 && product.price <= 99999
        })
        break 
      case '100000':
        Productsfilter = Productsfilter.filter((product) => {
          return product.price <= 100000
        })
        break     
        
      // 指所有的產品都出現
      default:
        break
    }
    setProducts(Productsfilter);
    // return Productsfilter
  }

  return (
    <>
      <header id="Products__header">
        <div className="Products__banner">
          <div className="Products__banner__img"></div>
        </div>
      </header>
      <div className="container-fluid" id="Products＿container-fluid">
        <section id="Products__section">
          <aside id="Products__aside">
            <table className="Products＿aside-content-center">
              <th >
                <h5 className="Products＿size-h3">藝術品分類</h5>
              </th>
              <tr>
              <Link variant="dark" onClick={handleClear}><h5 className='' >清除選取</h5></Link>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg "
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className=""
                  >
                    依媒材
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item value="油畫"
                  onClick={() => handleClick('油畫', 'material')}
                  >
                  油畫
                  </Dropdown.Item>
                    <Dropdown.Item value="素描"
                  onClick={() => handleClick('素描', 'material') }
                  >
                  素描</Dropdown.Item>
                    <Dropdown.Item value="版畫"
                  onClick={() => handleClick('版畫', 'material')}
                  >版畫</Dropdown.Item>
                    <Dropdown.Item value="水墨"
                  onClick={() => handleClick('水墨', 'material')}
                  >水墨</Dropdown.Item>
                    <Dropdown.Item value="水彩"
                  onClick={() => handleClick('水彩', 'material')}
                  >水彩</Dropdown.Item>
                    <Dropdown.Item value="數位"
                  onClick={() => handleClick('數位', 'material')}
                  >數位</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg"
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className=""
                  >
                    依風格
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item value="所有" 
                     onClick={() => handleProduct_styleRange('所有', 'product_style')}>所有</Dropdown.Item>
                    <Dropdown.Item value="印象" onClick={() => handleClick('印象', 'product_style')} >印象</Dropdown.Item>
                    <Dropdown.Item value="幾何" onClick={() => handleClick('幾何', 'product_style')}>幾何</Dropdown.Item>
                    <Dropdown.Item value="復古" onClick={() => handleClick('復古', 'product_style')} >復古</Dropdown.Item>
                    <Dropdown.Item value="超現實" onClick={() => handleClick('超現實', 'product_style')}  >超現實</Dropdown.Item>
                    <Dropdown.Item value="水彩" onClick={() => handleClick('水彩', 'product_style')}>水彩</Dropdown.Item>
                    <Dropdown.Item value="表現主義" onClick={() => handleClick('表現主義', 'product_style')} >
                      表現主義
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <h5 className="Products＿size-h5">依色系</h5> 
              <tr className="Products＿slider-color">
                <table>
                  <tr>
                  {['Red'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-red"
                      value={work_hue}
                      onClick={() => handleClick(work_hue, 'work_hue') }
                      ></div>
                    </td>
                       )
                       )}
                    {['Orange'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-ori"
                      value={'work_hue'}
                      onClick={() => handleClick(work_hue, 'work_hue') }
                      ></div>
                    </td> 
                    )
                    )}
                    {['Yellow'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-yel"
                      value={'Yellow'}
                      onClick={() => handleClick(work_hue, 'work_hue') }
                      ></div>
                    </td>
                     )
                    )}
                    {['Green'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-gre"
                      value={'Green'}
                      onClick={() => handleClick(work_hue, 'work_hue') }
                      ></div>
                    </td>
                      )
                     )}
                  </tr>
                  <tr>
                  {['Blue'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-blu"
                      value={'Blue'}
                      onClick={() => handleClick(work_hue, 'work_hue') }
                      ></div>
                    </td>
                     )
                     )}
                    {['Purple'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-pur" value={'Purple'} onClick={() => handleClick(work_hue, 'work_hue') }></div>
                    </td>
                     )
                     )}
                     {['Brown'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-bro" value={'Brown'} onClick={() => handleClick(work_hue, 'work_hue') }></div>
                    </td>
                    )
                    )}
                    {['White'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-whi" value={'White'} onClick={() => handleClick(work_hue, 'work_hue') }></div>
                    </td>
                    )
                    )}
                  </tr>
                  <tr>
                  {['Gray'].map(
                    (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-gra" value={'Gray'} onClick={() => handleClick(work_hue, 'work_hue') }></div>
                    </td>
                    )
                    )}
                  {['Black'].map(
                  (work_hue) => (
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-bla" value={'Black'} onClick={() => handleClick(work_hue, 'work_hue') } ></div>
                    </td> 
                    )
                    )}
                  </tr>
                </table>
              
              </tr>
              <h4 className="Products＿size-h5">依尺寸(CM)</h4>
              <h5 className="Products＿slider-color-size-h6" onClick={handleClear}>長邊{selectedWidth}</h5>

              <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg "
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className="ms-5"
                  >
                    所有
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item value="所有"
                  onClick={() => handleWidthRange('所有', 'width')}
                  >
                  所有
                  </Dropdown.Item>
                    <Dropdown.Item value="50"
                  onClick={() => handleWidthRange('50', 'width')}
                  >
                  ≤50≤
                  </Dropdown.Item>
                    <Dropdown.Item value="100"
                  onClick={() => handleWidthRange('100', 'width') }
                  >
                  ≤100≤</Dropdown.Item>
                    <Dropdown.Item value="300"
                  onClick={() => handleWidthRange('300', 'width')}
                  >
                  ≤300≤</Dropdown.Item>
                    <Dropdown.Item value="400"
                  onClick={() => handleWidthRange('400', 'width')}
                  >≤400</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> 
              <h5 className="Products＿slider-color-size-h6" onClick={handleClear}>短邊{selectedHegiht}</h5>
              <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg "
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className="ms-5"
                  >
                    所有
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item value="所有"
                  onClick={() => handleHegihtRange('所有', 'hegiht')}
                  >
                  所有
                  </Dropdown.Item>
                    <Dropdown.Item value="50"
                  onClick={() => handleHegihtRange('50', 'hegiht')}
                  >
                  ≤50≤
                  </Dropdown.Item>
                    <Dropdown.Item value="100"
                  onClick={() => handleHegihtRange('100', 'hegiht') }
                  >
                  ≤100≤</Dropdown.Item>
                    <Dropdown.Item value="300"
                  onClick={() => handleHegihtRange('300', 'hegiht')}
                  >
                  ≤300≤</Dropdown.Item>
                    <Dropdown.Item value="400"
                  onClick={() => handleHegihtRange('400', 'width')}
                  >≤400</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
        
              <h5 className="Products＿size-h5">金額篩選</h5>
         
              <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg "
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className="ms-5"
                  >
                    所有
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item value="所有"
                  onClick={() => handlePriceRange('所有', 'price')}
                  >
                  所有
                  </Dropdown.Item>
                    <Dropdown.Item value="10000-19999"
                  onClick={() => handlePriceRange('10000-19999', 'price') }
                  ></Dropdown.Item>
                    <Dropdown.Item value="2000-9999"
                  onClick={() => handlePriceRange('2000-9999', 'price')}
                  >
                  2000-9999
                  </Dropdown.Item>
                    <Dropdown.Item value="10000-19999"
                  onClick={() => handlePriceRange('10000-19999', 'price') }
                  >
                  10000-19999</Dropdown.Item>
                    <Dropdown.Item value="20000-29999"
                  onClick={() => handlePriceRange('20000-29999', 'price')}
                  >20000-29999</Dropdown.Item>
                    <Dropdown.Item value="30000-49999"
                  onClick={() => handlePriceRange('30000-49999', 'price')}
                  >30000-49999</Dropdown.Item>
                    <Dropdown.Item value="50000"
                  onClick={() => handlePriceRange('50000-99999', 'price')}
                  >50000-99999</Dropdown.Item>
                    <Dropdown.Item value="100000"
                  onClick={() => handlePriceRange('100000', 'price')}
                  >≤100000</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </table>
          </aside>
              <nav id="Products＿nav">
              <div className="Products＿nav__h3 d-flex  " align="left">
              <ProductsBurger
              classMame="ProductsBurger"
              ></ProductsBurger><h2 className='ms-2'>所有藝術品</h2>
              </div>
              <div className="Products＿nav-wrapp">
                <div className="Products＿link-bar ">

                  {/* 手機板不顯示 */}
                  <p className="Products＿link ">
                    <Link to="/">首頁▶</Link>
                    <Link onClick={handleClear}>所有藝術品▶ {product.length} 件 {selectedMaterial}  {selectedWork_hue}</Link>
                  </p>

             <Dropdown className='Products__dropdown_creatyear'>
                    <Dropdown.Toggle
                      variant="--color-bg"
                      style={{ border: 'none' }}
                      id="dropdown-basic"
                      className="Products＿--color-bg ms-2"
                    >
                      創作年份
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item value="由新至舊"
                    onClick={() => handleClick('由新至舊', 'creation_year')}
                    >由新至舊</Dropdown.Item>
                      <Dropdown.Item value="由舊至新"
                    onClick={() => handleClick('由舊至新', 'creation_year')}
                    >由舊至新</Dropdown.Item>
                    </Dropdown.Menu>
              </Dropdown>

             </div>
             </div>
             </nav>
          <figure id="Products__figure">
            <div className="Products__figure-wrap">
              {currentPosts.map((product_data, index) => {
                return (
                  <div key={product_data.id} classMame="Products__img-id-wrap">
                    <Link to={`/products/${product_data.id}`}>
                      <img
                        className="Products__card-img-top"
                        src={product_data.img_file}
                      />
                      <h4 className="Products__productId">{product_data.name}</h4>
                      <p className="Products__material mb-0">{product_data.material},{product_data.creation_year}<span className='ms-2'>{product.creation_year}</span></p>
                      <p className="Products__article">{product_data.artist}</p>
                      <h5 className="Products__price">${product_data.price}</h5>
                    </Link>
                  </div>
                )
              })}
            
            </div>
          </figure>
          <footer id="Products__footer">
              <div className="Products__footer_page">
            
             </div>
          </footer>
        </section>
        <div className="d-flex justify-content-center">
              <RiArrowUpSLine
                style={{
                  display: 'inline-block',
                  margin: '2px',
                  borderColor: '#dbdbdb',
                  borderWidth: '1px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '3px',
                  textAlign: 'center',
                }}
                onClick={() => {
                  setCurrentPage(currentPage - 1)
                }}
                disabled={currentPage === 1}
              >
                {'<<'}
              </RiArrowUpSLine>
              <ProductsPagination
                className="product__page-item "
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
              <RiArrowDownSLine
                style={{
                  display: 'flex',
                  margin: '2px',
                  borderColor: '#dbdbdb',
                  borderWidth: '1px',
                  width: '50px',
                  height: '50px',
                  
                }}
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                }}
                disabled={currentPage >= pages}
              >
                {'>>'}
                
              </RiArrowDownSLine>
            </div>
              
      </div>
    </>
  )
}


export default Products