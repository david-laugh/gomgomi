import React, { useEffect, useState } from 'react';

const chatbot = async () => {
    setIsLoading(true);
    try {
        const response = await fetch('http://34.64.69.248:8100/api/chatbot/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : 'Token 0516b76236f56e6615b1a53e1edb7716da36808f'
            },
            body: JSON.stringify({
                sent : '지금 뭐해?'
            }),
        }, 3000);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
};