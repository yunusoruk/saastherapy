"use client"
import type { FC } from 'react';
import { Button } from './ui/button';
import axios from 'axios';

interface SendEmailProps { }

const SendEmail: FC<SendEmailProps> = async ({ }) => {

    const onClick = async () => {

        const data = await axios.post('')

        console.log(data);


    }
    return (
        <Button onClick={onClick}>
            Click
        </Button>
    );
}
export default SendEmail;