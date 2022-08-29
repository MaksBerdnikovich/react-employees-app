import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from '@mui/icons-material/Star';
import CookieIcon from '@mui/icons-material/Cookie';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import UserIcon from "@mui/icons-material/Person";
import ListItemText from "@mui/material/ListItemText";

const EmployeeItem = (
    {
        id,
        name,
        salary,
        increase,
        rise,
        deleteEmployee,
        increaseEmployee,
        riseEmployee,
    }
) => {

    return (
        <ListItem sx={{
            mt: 1,
            color: '#000000',
            backgroundColor: (increase || rise) ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255, 0.8)',
            border: '2px solid',
            borderColor: increase ? 'success.light' : 'rgba(255, 255, 255, 0.1)',
            borderRadius: '5px',
            cursor: 'pointer',
        }}>

            <ListItemAvatar onClick={() => riseEmployee(id)}>
                <Avatar sx={{
                    border: '1px solid',
                    borderColor: increase && 'success.light',
                    backgroundColor: increase && 'rgba(255,255,255, 1)',
                    color: increase && 'success.light'
                }}>
                    <UserIcon/>
                </Avatar>
            </ListItemAvatar>

            <ListItemText
                onClick={() => riseEmployee(id)}
                sx={{
                    color: increase && 'success.light'
                }}>
                {name}
            </ListItemText>

            <ListItemText
                onClick={() => riseEmployee(id)}
                sx={{
                    maxWidth: '30%',
                    textAlign: 'center',
                    color: increase && 'success.light'
                }}>
                <b>{salary + '$'}</b>
            </ListItemText>

            {(rise) && (
                <IconButton
                    edge="end"
                    onClick={() => riseEmployee(id)}
                    sx={{
                        color: 'warning.light',
                        ml: 1
                    }}>
                    <StarIcon/>
                </IconButton>
            )}

            <IconButton
                edge="end"
                onClick={() => increaseEmployee(id)}
                sx={{
                    color: increase ? 'success.light' : 'secondary.light',
                    ml: 1
                }}>
                <CookieIcon/>
            </IconButton>

            <IconButton
                edge="end"
                onClick={() => deleteEmployee(id)}
                sx={{
                    color: 'error.main',
                    ml: 1
                }}>
                <DeleteIcon/>
            </IconButton>

        </ListItem>
    )
}

export default EmployeeItem