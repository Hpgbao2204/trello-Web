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
import { grey } from '@mui/material/colors'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: grey['A100'],
      gap: 2,
      overflowX: 'auto'
    }}>
      <Box sx= {{ display:'flex', alignItems:'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}/>
        <Box sx= {{ display:'flex', alignItems:'center', gap: 0.5, color: 'primary.main' }}>
          <SvgIcon component={TrelloLogo} fontSize="small" inheritViewBox />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
        <Workspace />
        <Recent />
        <Starred/>
        <Template/>
        <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx= {{ display:'flex', alignItems:'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size="small" sx= {{ minWidth: 120 }}/>
        <ModeSelect/>
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer', color: 'primary.main' }} >
            <NotificationsNoneIcon/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
          </Tooltip>

          <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
