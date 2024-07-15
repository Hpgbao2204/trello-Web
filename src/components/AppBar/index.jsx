/* eslint-disable indent */
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloLogo } from '~/assets/trello-logo.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { Typography } from '@mui/material'
import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Template from './Menus/Template'
import Starred from './Menus/Starred'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx= {{ display:'flex', alignItems:'center', gap: 2, color: 'white' }}>
        <AppsIcon sx={{ color: 'white' }}/>
        <Box sx= {{ display:'flex', alignItems:'center', gap: 0.5 }}>
          <SvgIcon component={TrelloLogo} inheritViewBox />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Workspace />
        <Recent />
        <Starred/>
        <Template/>
        <Button sx={{ color: 'white' }} variant="outlined">Create</Button>
      </Box>
      <Box sx= {{ display:'flex', alignItems:'center', gap: 2, color: 'white' }}>
        <TextField sx={{ color: 'white' }} id="outlined-search" label="Search..." type="search" size="small"/>
        <ModeSelect/>
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer'}} >
            <NotificationsNoneIcon/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>

          <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
