import request from '@/utils/request'

export const DeleteProject = function(projectid, password) {
    var data = JSON.stringify({
        "projectid": projectid,
        "password": password
    })


    return request.post('/advanced_setting/DeleteProject', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const ListAllProject = function() {
    return request.get('/advanced_setting/ListAllProject', {
        params: {}
    })
}


export const AddProject = function(data) {


    return request.post('/advanced_setting/AddProject', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}