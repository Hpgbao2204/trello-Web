import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = { // Neu co nhieu component dung chung, nen tao file rieng, file style rieng sao do include vao
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover ' : {
    bgcolor: 'primary.50'
  }
}

function BoardBard() {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto',
      gap: 2,
      paddingX: 2,
    }}>
      <Box sx= {{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={ MENU_STYLE }
          icon={<DashboardIcon />}
          label="HPGiaBao"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLE }
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLE }
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLE }
          icon={<BoltIcon />}
          label="Automation"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLE }
          icon={<FilterListIcon />}
          label="Filter"
          // clickable
          onClick={() => {}}
        />
      </Box>

      <Box sx= {{ display:'flex', alignItems:'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon /> }
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root' : {
              width: 34,
              height: 34,
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0de' }
            }
          }}
        > {/* max la 4 cai avatar, va cai thu 4 la khi tinh toan so luong avatar con lai */}
          <Tooltip title="Hpbao">
            <Avatar
              src='https://i.pinimg.com/736x/79/c2/89/79c289b1eea9dc73defc242cb1719b1a.jpg'
              alt='GiaBao'
            />
          </Tooltip>
          <Tooltip title="Hpbao">
            <Avatar
              src='https://i.pinimg.com/736x/79/c2/89/79c289b1eea9dc73defc242cb1719b1a.jpg'
              alt='GiaBao'
            />
          </Tooltip>
          <Tooltip title="Hpbao">
            <Avatar
              src='https://i.pinimg.com/736x/79/c2/89/79c289b1eea9dc73defc242cb1719b1a.jpg'
              alt='GiaBao'
            />
          </Tooltip>
          <Tooltip title="Hpbao">
            <Avatar
              src='https://i.pinimg.com/736x/79/c2/89/79c289b1eea9dc73defc242cb1719b1a.jpg'
              alt='GiaBao'
            />
          </Tooltip>
          <Tooltip title="Hpbao">
            <Avatar
              src='https://i.pinimg.com/736x/79/c2/89/79c289b1eea9dc73defc242cb1719b1a.jpg'
              alt='GiaBao'
            />
          </Tooltip>
        </AvatarGroup>  {/* max la 4 cai avatar, va cai thu 4 la khi tinh toan so luong avatar con lai */}
      </Box>
    </Box>
  )
}

export default BoardBard