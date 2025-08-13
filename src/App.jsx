import { useState } from 'react'
import { getHealth } from './api.js'

function App() {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)
      const response = await getHealth()
      alert('Success!') // 성공 시 팝업
    } catch (error) {
      alert('Fail!') // 실패 시 팝업
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>D2R Traderie Tracker</h1>
      <button 
        onClick={handleClick} 
        disabled={loading}
        style={{
          padding: '20px 40px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {loading ? 'Loading...' : 'Hello World'}
      </button>
    </div>
  )
}

export default App
