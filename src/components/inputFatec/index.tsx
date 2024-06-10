import styles from './index.module.css'
import { Input } from '@chakra-ui/react'

interface Props {
    type: 'text' | 'email' | 'number'
    placeHolder: string
    defaultValue: string
}

export default function InputFatec({type, placeHolder, defaultValue}: Props){
    return (
        <Input 
        my={3}
        className={styles.inputFatec}
        type={type} 
        placeholder={placeHolder} 
        defaultValue={defaultValue} />
    )
}