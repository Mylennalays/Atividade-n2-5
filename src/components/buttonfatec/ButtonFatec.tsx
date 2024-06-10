import './ButtonFatec.css' // className='button-fatec'
import styles from './ButtonFatec.module.css' // className={styles.buttonFatec}
import { Button } from '@chakra-ui/react'

interface Props {
    type: 'submit' | 'button' | 'reset'
    label: string
}

function ButtonFatec({type,label}:Props){
    return (
        <Button 
        my={2}
        colorScheme='red' size='lg'
        type={type}>
            {label}
        </Button>
    )
}

export default ButtonFatec