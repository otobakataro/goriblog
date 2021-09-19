import React, { useState, useEffect } from "react"
import Layout  from "../components/layout"

const IndexPage = () => {
  const [data] = useState({ users: [] })

  useEffect(() => {
    async function fetchData()  {
      const response = await fetch(
        `${process.env.GATSBY_API_URL}/users`
      ).then(res => res.json())
      return response
    }

    fetchData()
  },[])

  return (
    <Layout>
    <ul>
      {(data.users || []).map((user) => {
        <li key={user.id}>
          <a href={user.url}>{user.name}</a>
        </li>
      })}
    </ul>
    </Layout>
  )
}

export default IndexPage
