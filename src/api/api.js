const { default: Axios } = require("axios");

const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "43aad56d-71e4-4a92-8ba3-c5affeaf5a83"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` 
            .then(response => {
                return response.data;
        }),
    }
}

export const 

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`, 
        .then(response => {
            return response.data;
    });
}