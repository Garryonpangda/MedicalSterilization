import request from '@/utils/request'
export const UpdatePassword = function(data) {
    return request.post('/system_settings/UpdatePassword', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const UpdatePhonenumber = function(data) {
    return request.post('/system_settings/UpdatePhonenumber', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const UpdateEmail = function(data) {
    return request.post('/system_settings/UpdateEmail', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}