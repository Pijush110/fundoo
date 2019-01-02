import axios from 'axios'


export function updateNotes(url,data) {
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

