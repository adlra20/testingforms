import { useState } from "react"

export default function Form() {
  const [username, setUsername] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const response = await fetch(
      '/api/form',
      {
        body: JSON.stringify({
          username
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
  }

  return <form onSubmit={handleSubmit}>
    Username:
    <input type='text'
      value={username}
      onChange={(event) => {setUsername(event.target.value)
      }}
    />
  </form>
}