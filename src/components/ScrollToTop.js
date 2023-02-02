import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 此元件是當在換頁時，要自動往上捲動到最上方使用
// 需引入到路由表處App.js並包裹所有Routes下元件
// https://stackoverflow.com/questions/71390137/react-router-scroll-to-top-on-v6
function ScrollToTop({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default ScrollToTop