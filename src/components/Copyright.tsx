import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

interface Props {
  year?: number;
}

const Copyright: React.FC<Props> = ({
  year,
}) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {year}
      {'.'}
    </Typography>
  );
};

export default Copyright;
