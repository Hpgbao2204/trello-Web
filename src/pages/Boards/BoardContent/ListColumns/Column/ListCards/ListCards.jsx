import Card from './Card/Card'
import Box from '@mui/material/Box'

function ListCards() {
  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.trello.columnHFooterHeight} - ${theme.trello.columnHHeaderHeight} - ${theme.spacing(5)})`,
      '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
    }}>
      <Card />
      <Card temporaryHideMedia />
    </Box>
  )
}

export default ListCards
