
import request  from ".";

export const getAllApi = ()=>{
    return request({
        url:'/category/all/',
        method:'get'
    })
}

export const addApi = (name)=>{
    return request({
        url:'/category/add',
        method:'post',
        data: {
            name:name
        }
    })
}

export const modifyapi =(newname,id) => {
    return request({
        url:'/category/modify',
        method:'post',
        data:{
            newname:newname,
            id:id
        }
    })
}

export const deleteapi =(id) => {
    return request({
        url:'/category/delete',
        method:'post',
        data:{
            id:id
        }
    })
}
