import {
    /*GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,*/
}
    from './actionTypes'

//import { profilesAPI } from '../../DAL/profile-api'

/*export function requestProfile() {
    return {
        type: GET_PROFILE_REQUEST,
    }
}

export function receiveProfile(item) {
    return {
        type: GET_PROFILE_SUCCESS,
        profile: item
    }
}

export function errorProfile(error) {
    return {
        type: GET_PROFILE_ERROR,
        error: error
    }
}

*/

export function getProducts() {
    return async (dispatch) => {
        dispatch(requestProfile())

        try {
            //let response = await profilesAPI.getProfile(id);

            //dispatch(receiveProfile(response.data))
        } catch (error) {

            /*if (error.response.status === 401) {
                dispatch(getRefreshToken());
            }

            dispatch(errorProfile(error))*/
        }
    }
}
