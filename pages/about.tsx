import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/protip';
import Link from '../components/link';
import Copyright from '../components/copyright';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
