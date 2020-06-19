const { ipcRenderer } = window.require('electron');

export const DB = {
    GET_TEAMS_STARTED: 'GET_TEAMS_STARTED',
    GET_TEAMS_FAILED: 'GET_TEAMS_FAILED',
    GET_TEAMS_SUCCESS: 'GET_TEAMS_SUCCESS',
    GET_GAMES_STARTED: 'GET_GAMES_STARTED',
    GET_GAMES_FAILED: 'GET_GAMES_FAILED',
    GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
    GET_ADMINS_STARTED: 'GET_ADMINS_STARTED',
    GET_ADMINS_FAILED: 'GET_ADMINS_FAILED',
    GET_ADMINS_SUCCESS: 'GET_ADMINS_SUCCESS',
    GET_ROOMS_STARTED: 'GET_ROOMS_STARTED',
    GET_ROOMS_FAILED: 'GET_ROOMS_FAILED',
    GET_ROOMS_SUCCESS: 'GET_ROOMS_SUCCESS',
    GET_SERVICES_STARTED: 'GET_SERVICES_STARTED',
    GET_SERVICES_FAILED: 'GET_SERVICES_FAILED',
    GET_SERVICES_SUCCESS: 'GET_SERVICES_SUCCESS',
    GET_COMPUTERS_STARTED: 'GET_COMPUTERS_STARTED',
    GET_COMPUTERS_FAILED: 'GET_COMPUTERS_FAILED',
    GET_COMPUTERS_SUCCESS: 'GET_COMPUTERS_SUCCESS',
    GET_CLIENTS_STARTED: 'GET_CLIENTS_STARTED',
    GET_CLIENTS_FAILED: 'GET_CLIENTS_FAILED',
    GET_CLIENTS_SUCCESS: 'GET_CLIENTS_SUCCESS',
    GET_VISITS_STARTED: 'GET_VISITS_STARTED',
    GET_VISITS_FAILED: 'GET_VISITS_FAILED',
    GET_VISITS_SUCCESS: 'GET_VISITS_SUCCESS',
    GET_COMPETITIONS_STARTED: 'GET_COMPETITIONS_STARTED',
    GET_COMPETITIONS_FAILED: 'GET_COMPETITIONS_FAILED',
    GET_COMPETITIONS_SUCCESS: 'GET_COMPETITIONS_SUCCESS',
    GET_SERVED_STARTED: 'GET_SERVED_STARTED',
    GET_SERVED_FAILED: 'GET_SERVED_FAILED',
    GET_SERVED_SUCCESS: 'GET_SERVED_SUCCESS'
}

export const getTeams = () => {
    return async dispatch => {
        dispatch(getTeamsStarted());
        ipcRenderer.send('get teams');
        ipcRenderer.on('return teams', (event, data) => {
            if(data.error) {
                dispatch(getTeamsFailed());
            } else {
                dispatch(getTeamsSuccess(data.teams));
            }
        })
    }
}

export const getTeamsStarted = () => {
    console.log('test');
    return {
        type: DB.GET_TEAMS_STARTED
    }
}

export const getTeamsFailed = (error) => {
    return {
        type: DB.GET_TEAMS_FAILED,
        payload: {
            error
        }
    }
}

export const getTeamsSuccess = (teams) => {
    return {
        type: DB.GET_TEAMS_SUCCESS,
        payload: {
            teams
        }
    }
}

export const getGames = () => {
    return async dispatch => {
        dispatch(getGamesStarted());
        ipcRenderer.send('get games');
        ipcRenderer.on('return games', (event, data) => {
            if(data.error) {
                dispatch(getGamesFailed());
            } else {
                dispatch(getGamesSuccess(data.games));
            }
        })
    }
}

export const getGamesStarted = () => {
    return {
        type: DB.GET_GAMES_STARTED
    }
}

export const getGamesFailed = (error) => {
    return {
        type: DB.GET_GAMES_FAILED,
        payload: {
            error
        }
    }
}

export const getGamesSuccess = (games) => {
    console.log(games);
    return {
        type: DB.GET_GAMES_SUCCESS,
        payload: {
            games
        }
    }
}

export const getAdmins = () => {
    return async dispatch => {
        dispatch(getAdminsStarted());
        ipcRenderer.send('get admins');
        ipcRenderer.on('return admins', (event, data) => {
            if(data.error) {
                dispatch(getAdminsFailed());
            } else {
                dispatch(getAdminsSuccess(data.admins));
            }
        })
    }
}

export const getAdminsStarted = () => {
    return {
        type: DB.GET_ADMINS_STARTED
    }
}

export const getAdminsFailed = (error) => {
    return {
        type: DB.GET_ADMINS_FAILED,
        payload: {
            error
        }
    }
}

export const getAdminsSuccess = (admins) => {
    return {
        type: DB.GET_ADMINS_SUCCESS,
        payload: {
            admins
        }
    }
}

export const getRooms = () => {
    return async dispatch => {
        dispatch(getRoomsStarted());
        ipcRenderer.send('get rooms');
        ipcRenderer.on('return rooms', (event, data) => {
            if(data.error) {
                dispatch(getRoomsFailed());
            } else {
                dispatch(getRoomsSuccess(data.rooms));
            }
        })
    }
}

export const getRoomsStarted = () => {
    return {
        type: DB.GET_ROOMS_STARTED
    }
}

export const getRoomsFailed = (error) => {
    return {
        type: DB.GET_ROOMS_FAILED,
        payload: {
            error
        }
    }
}

export const getRoomsSuccess = (rooms) => {
    return {
        type: DB.GET_ROOMS_SUCCESS,
        payload: {
            rooms
        }
    }
}

export const getServices = () => {
    return async dispatch => {
        dispatch(getServicesStarted());
        ipcRenderer.send('get services');
        ipcRenderer.on('return services', (event, data) => {
            console.log(data.services);
            if(data.error) {
                dispatch(getServicesFailed());
            } else {
                dispatch(getServicesSuccess(data.services));
            }
        })
    }
}

export const getServicesStarted = () => {
    return {
        type: DB.GET_SERVICES_STARTED
    }
}

export const getServicesFailed = (error) => {
    return {
        type: DB.GET_SERVICES_FAILED,
        payload: {
            error
        }
    }
}

export const getServicesSuccess = (services) => {
    return {
        type: DB.GET_SERVICES_SUCCESS,
        payload: {
            services
        }
    }
}

export const getComputers = () => {
    return async dispatch => {
        dispatch(getComputersStarted());
        ipcRenderer.send('get computers');
        ipcRenderer.on('return computers', (event, data) => {
            console.log(data.computers);
            if(data.error) {
                dispatch(getComputersFailed());
            } else {
                dispatch(getComputersSuccess(data.computers));
            }
        })
    }
}

export const getComputersStarted = () => {
    return {
        type: DB.GET_COMPUTERS_STARTED
    }
}

export const getComputersFailed = (error) => {
    return {
        type: DB.GET_COMPUTERS_FAILED,
        payload: {
            error
        }
    }
}

export const getComputersSuccess = (computers) => {
    return {
        type: DB.GET_COMPUTERS_SUCCESS,
        payload: {
            computers
        }
    }
}

export const getClients = () => {
    return async dispatch => {
        dispatch(getClientsStarted());
        ipcRenderer.send('get clients');
        ipcRenderer.on('return clients', (event, data) => {
            if(data.error) {
                dispatch(getClientsFailed());
            } else {
                dispatch(getClientsSuccess(data.clients));
            }
        })
    }
}

export const getClientsStarted = () => {
    return {
        type: DB.GET_CLIENTS_STARTED
    }
}

export const getClientsFailed = (error) => {
    return {
        type: DB.GET_CLIENTS_FAILED,
        payload: {
            error
        }
    }
}

export const getClientsSuccess = (clients) => {
    return {
        type: DB.GET_CLIENTS_SUCCESS,
        payload: {
            clients
        }
    }
}

export const getVisits = () => {
    return async dispatch => {
        dispatch(getVisitsStarted());
        ipcRenderer.send('get visits');
        ipcRenderer.on('return visits', (event, data) => {
            if(data.error) {
                dispatch(getVisitsFailed());
            } else {
                dispatch(getVisitsSuccess(data.visits));
            }
        })
    }
}

export const getVisitsStarted = () => {
    return {
        type: DB.GET_VISITS_STARTED
    }
}

export const getVisitsFailed = (error) => {
    return {
        type: DB.GET_VISITS_FAILED,
        payload: {
            error
        }
    }
}

export const getVisitsSuccess = (visits) => {
    return {
        type: DB.GET_VISITS_SUCCESS,
        payload: {
            visits
        }
    }
}

export const getCompetitions = () => {
    return async dispatch => {
        dispatch(getCompetitionsStarted());
        ipcRenderer.send('get competitions');
        ipcRenderer.on('return competitions', (event, data) => {
            if(data.error) {
                dispatch(getCompetitionsFailed());
            } else {
                dispatch(getCompetitionsSuccess(data.competitions));
            }
        })
    }
}

export const getCompetitionsStarted = () => {
    return {
        type: DB.GET_COMPETITIONS_STARTED
    }
}

export const getCompetitionsFailed = (error) => {
    return {
        type: DB.GET_COMPETITIONS_FAILED,
        payload: {
            error
        }
    }
}

export const getCompetitionsSuccess = (competitions) => {
    return {
        type: DB.GET_COMPETITIONS_SUCCESS,
        payload: {
            competitions
        }
    }
}

export const getServed = () => {
    return async dispatch => {
        dispatch(getServedStarted());
        ipcRenderer.send('get served');
        ipcRenderer.on('return served', (event, data) => {
            if(data.error) {
                dispatch(getServedFailed());
            } else {
                dispatch(getServedSuccess(data.served));
            }
        })
    }
}

export const getServedStarted = () => {
    return {
        type: DB.GET_SERVED_STARTED
    }
}

export const getServedFailed = (error) => {
    return {
        type: DB.GET_SERVED_FAILED,
        payload: {
            error
        }
    }
}

export const getServedSuccess = (served) => {
    return {
        type: DB.GET_SERVED_SUCCESS,
        payload: {
            served
        }
    }
}