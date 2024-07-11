import { Container } from '@mui/material'
import AppBar from '../../components/AppBar/'
import BoardBard from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <AppBar/>
      <BoardBard/>
      <BoardContent/>
    </Container>
  )
}

export default Board