import config from '../config/index';

async function create(form) {
    const res = await fetch(config.apiUrl + '/post', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

export { create }