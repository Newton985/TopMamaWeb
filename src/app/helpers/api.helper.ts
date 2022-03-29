import { environment } from '../../environments/environment';

export const API_BASE_URL = environment.BASE_URL;

export const getAccessToken = () => {
    let token : string | null = '';
    if(localStorage.getItem('accessToken')){
        token = localStorage.getItem('accessToken')
    }
    return token;
}

