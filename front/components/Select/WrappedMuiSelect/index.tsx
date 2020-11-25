import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FieldInputProps } from 'formik';

export interface WrappedMuiSelectProps {
  selectOptions: Array<{ label: string; value: string }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: FieldInputProps<any>;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  default: {
    width: 93,
    height: 30,
    fontSize: 14,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  icon: {
    fill: theme.palette.text.primary,
    fontSize: 'large',
    height: '80%',
    marginRight: 5,
  },
  root: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  select: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  menuItem: {
    width: 93,
    height: 30,
    fontSize: 14,
    background: theme.palette.grey[100],
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
  selectMenuItem: {
    fontWeight: 'bold',
  },
  listMenu: {
    padding: 0,
    margin: 0,
  },
}));

function WrappedSelect({ selectOptions, field }: WrappedMuiSelectProps): JSX.Element {
  const classes = useStyles();

  return (
    <FormControl className={classes.default}>
      <MuiSelect
        disableUnderline
        IconComponent={ExpandMoreIcon}
        autoWidth={false}
        MenuProps={
            {
              classes: { list: classes.listMenu },
              elevation: 0,
              variant: 'menu',
              anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
              getContentAnchorEl: null,
              transformOrigin: { vertical: 'top', horizontal: 'left' },
            }
          }
        className={classes.default}
        inputProps={{
          classes: {
            icon: classes.icon,
            select: classes.select,
            root: classes.root,
          },
        }}
        {...field}
      >
        {
          selectOptions.map((selectItemOptions) => (
            <MenuItem
              key={selectItemOptions.value}
              value={selectItemOptions.value}
              className={classes.menuItem}
              classes={{
                selected: classes.selectMenuItem,
              }}
            >
              <div className={classes.container}>
                {selectItemOptions.label}
              </div>
            </MenuItem>
          ))
        }
      </MuiSelect>
    </FormControl>
  );
}

export default WrappedSelect;
