<<<<<<< HEAD
import React from 'react'
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className="page">
      {pages.map((v, i) => {
        return (
          <button
            style={{
              display: 'inline-block',
              margin: '2px',
              backgroundColor: 'black',
              borderColor: v === i ? '#00d1b2' : '#dbdbdb',
              color: 'white',
              borderWidth: '1px',
              width: '30px',
              height: '30px',
              borderRadius: '3px',
              textAlign: 'center',
            }}
            key={i}
            onClick={() => {
              setCurrentPage(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </div>
  )
}

=======
import React from 'react'
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className="page">
      {pages.map((v, i) => {
        return (
          <button
            style={{
              display: 'inline-block',
              margin: '2px',
              backgroundColor: 'black',
              borderColor: v === i ? '#00d1b2' : '#dbdbdb',
              color: 'white',
              borderWidth: '1px',
              width: '30px',
              height: '30px',
              borderRadius: '3px',
              textAlign: 'center',
            }}
            key={i}
            onClick={() => {
              setCurrentPage(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </div>
  )
}

>>>>>>> b4a8102661693778d01695d89c83378f78031ff6
export default Pagination