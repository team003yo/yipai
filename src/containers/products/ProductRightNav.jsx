import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (min-width: 550px) {
    display:none;
  }

  @media (max-width: 550px) {
    flex-flow: column nowrap;
    background-color: rgba(201, 215, 227, 0.9);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;
    z-index:1000;
   

    li {
      color: #333;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Dropdown>
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
                  >
                  油畫
                  </Dropdown.Item>
                    <Dropdown.Item value="素描"
                 
                  >
                  素描</Dropdown.Item>
                    <Dropdown.Item value="版畫"
                  
                  >版畫</Dropdown.Item>
                    <Dropdown.Item value="水墨"
                  
                  >水墨</Dropdown.Item>
                    <Dropdown.Item value="水彩"
                  
                  >水彩</Dropdown.Item>
                    <Dropdown.Item value="數位"
                  
                  >數位</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
      <li><Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg"
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                  >
                    依風格
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item value="所有" 
                     >所有</Dropdown.Item>
                    <Dropdown.Item value="印象"  >印象</Dropdown.Item>
                    <Dropdown.Item value="幾何" >幾何</Dropdown.Item>
                    <Dropdown.Item value="復古"  >復古</Dropdown.Item>
                    <Dropdown.Item value="超現實"   >超現實</Dropdown.Item>
                    <Dropdown.Item value="水彩" >水彩</Dropdown.Item>
                    <Dropdown.Item value="表現主義"  >
                      表現主義
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
      <li>依照色系篩選</li>
      <li><h4 className="Products＿size-h5">依尺寸(CM)</h4>
              <h5 className="Products＿slider-color-size-h6" >長邊</h5>
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
                  
                  >
                  所有
                  </Dropdown.Item>
                    <Dropdown.Item value="50"
                 
                  >
                  ≤50≤
                  </Dropdown.Item>
                    <Dropdown.Item value="100"
                 
                  >
                  ≤100≤</Dropdown.Item>
                    <Dropdown.Item value="300"
                  
                  >
                  ≤300≤</Dropdown.Item>
                    <Dropdown.Item value="400"
                  
                  >≤400</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> </li>
      <li><h5 className="Products＿slider-color-size-h6" >短邊</h5>
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
                 
                  >
                  所有
                  </Dropdown.Item>
                    <Dropdown.Item value="50"
                
                  >
                  ≤50≤
                  </Dropdown.Item>
                    <Dropdown.Item value="100"
                 
                  >
                  ≤100≤</Dropdown.Item>
                    <Dropdown.Item value="300"
                
                  >
                  ≤300≤</Dropdown.Item>
                    <Dropdown.Item value="400"
                
                  >≤400</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
    </Ul>
  )
}

export default RightNav