const URL = 'http://localhost:4000/api/deudores';

const getDeudor = async() => {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.error('Error fetching deudor:', error);
        return [];
    }
}

const saveDeudor = async(deudor) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deudor)
        };

        const res = await fetch(URL, requestOptions);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error saving deudor:', error);
        return null;
    }
}

export default {getDeudor, saveDeudor}