import log from '../utils/dev/log'
const _log = log(true,'TokenService');

const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

/**
 * Manage how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        _log('getToken',TOKEN_KEY);
        return localStorage.getItem(TOKEN_KEY)
    },
    
    saveToken(accessToken) {
        _log('saveToken',TOKEN_KEY,accessToken);
        localStorage.setItem(TOKEN_KEY, accessToken)
    },
    
    removeToken() {
        _log('removeToken',TOKEN_KEY);
        localStorage.removeItem(TOKEN_KEY)
    },
    
    getRefreshToken() {
        _log('getRefreshToken',REFRESH_TOKEN_KEY);
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },
    
    saveRefreshToken(refreshToken) {
        _log('saveRefreshToken',REFRESH_TOKEN_KEY,refreshToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },
    
    removeRefreshToken() {
        _log('removeRefreshToken',REFRESH_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }

}

export { TokenService }