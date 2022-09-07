import * as React from 'react';
import styles from '../../styles/Home.module.css'
import { Box } from '../../node_modules/@material-ui/core/index';


const HomePage = () => { 
    
    return  <div  >
      <Box className={styles.header} >
            <h1 className={styles.title}>Hello! VMR</h1>
      </Box>      
  </div>
}
export default HomePage
