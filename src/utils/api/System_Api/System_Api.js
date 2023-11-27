import request from '@/utils/request'
export const EquipmentCondition = function() {
    return request.post('/EquipmentCondition', {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const MaintenanceCondition = function() {
    return request.post('/MaintenanceCondition', {
        headers: {
            'content-type': 'application/json'
        }
    });

}
export const SystemCondition = function() {
    return request.post('/SystemCondition', {
        headers: {
            'content-type': 'application/json'
        }
    });

}
export const UsageCondition = function() {
    return request.post('/UsageCondition', {
        headers: {
            'content-type': 'application/json'
        }
    });

}
export const MaintenanceTips = function() {
    return request.post('/MaintenanceTips', {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const getDeviceCountByProvince = function() {
    return request.post('/getDeviceCountByProvince', {
        headers: {
            'content-type': 'application/json'
        }
    });

}