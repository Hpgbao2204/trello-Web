import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import { pink } from '@mui/material/colors'

function App() {

  return (
    <>
      <div>Hello world</div>
      <Typography variant="h1" color="text.secondary">Hello world</Typography>
      <Button variant="contained">Hello world</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br/>
      <AccessAlarmIcon/>
      <ThreeDRotation/>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />

    </>
  )
}

export default App
