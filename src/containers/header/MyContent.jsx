function MyContent(props) {
  return (
    <main role="main">
      <div className="h-500">{props.children}</div>
    </main>
  )
}

export default MyContent
