export const fetchApiCall = async ({ url }) => {
    const { response } = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 'user2',
            password: 12345678,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.error(err));
    return response.json();
};
