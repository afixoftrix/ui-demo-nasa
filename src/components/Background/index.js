import React from 'react'
import Particles from 'react-particles-js'
import config from './config'
import styles from './styles'


const Background = () =>  <Particles style={styles.main} className="particles" params={config} />

export default Background
