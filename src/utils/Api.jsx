const url = "https://leap-english.lavina.tech/"

export async function postData(data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function getRequest(url = url) {
    const response = await fetch(url, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    console.log(response, " ichki ");
    return response.json();
}