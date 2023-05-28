import { Grid, Skeleton } from '@mui/material';
import React from 'react';

const PostsProfile = () => {
   const testArray = [1, 2, 3, 4, 5, 6];

   return (
      <Grid container spacing={0.5}>
         {testArray.map(item => (
            <Grid item xs={4} key={item} sx={{ aspectRatio: '1 / 1' }}>
               <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: '#80808083' }} animation="pulse" />
            </Grid>
         ))}
      </Grid>
   );
};

export default PostsProfile;
