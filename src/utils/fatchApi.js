import React, { useEffect, useState } from 'react';

export const fetchApiCall = async ({ url }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: 'user2',
                    password: '12345678',
                }),
            });
            const json = await response.json();
            setData(json.Object);
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
};

export const test = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            setLoading(true);
            setData(null);

            const response = await fetch('http://172.30.1.56:8888/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: 'user2',
                    password: '12345678',
                }),
            });
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    console.log('Test2');
    console.log(data);
};
