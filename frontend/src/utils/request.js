export const request = (url, method, data) => {
    return fetch(`http://95.163.222.242:3001${url}`, {
        headers: {
            "content-type": "application/json",
        },
        method: method || "GET",
        credentials: "include",
        body: data ? JSON.stringify(data) : undefined,
    }).then((res) => res.json().then((data) => ({ ...data, status: res.status })));
};
