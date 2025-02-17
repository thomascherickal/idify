import Box from '@mui/material/Box'
import Pages, { Welcome } from '@/pages'

function App() {
  return (
    <Box className="absolute inset-0 overflow-hidden">
      <Welcome />
      <Pages />
    </Box>
  )
}

export default App
