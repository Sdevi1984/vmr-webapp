import { Box } from '@material-ui/core';
import * as React from 'react';
import styles from '../../styles/Home.module.css'


const HomePage = () => { 
    
    return  <div  >
      <Box className={styles.header} >
            <h1 className={styles.title}>Hello! VMR</h1>
      </Box>      
  </div>
}
export default HomePage
