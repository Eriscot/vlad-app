import {DB} from "../action/dbCreator";

const initialState = {
    loading: false,
    teams: [],
    games: [],
    admins: [],
    rooms: [],
    services: [],
    computers: [],
    clients: [],
    visits: [],
    competitions: [],
    served: []
}

const dbReducer = (state = initialState, action)  => {
    switch (action.type) {
        case DB.GET_TEAMS_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_TEAMS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_TEAMS_SUCCESS:
            const { teams } = action.payload;
            console.log(teams, {
                ...state,
                loading: false,
                teams
            })
            return {
                ...state,
                loading: false,
                teams
            }
        case DB.GET_GAMES_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_GAMES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_GAMES_SUCCESS:
            const { games } = action.payload;
            return {
                ...state,
                loading: false,
                games
            }
        case DB.GET_ADMINS_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_ADMINS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_ADMINS_SUCCESS:
            const { admins } = action.payload;
            return {
                ...state,
                loading: false,
                admins
            }
        case DB.GET_ROOMS_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_ROOMS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_ROOMS_SUCCESS:
            const { rooms } = action.payload;
            return {
                ...state,
                loading: false,
                rooms
            }
        case DB.GET_SERVICES_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_SERVICES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_SERVICES_SUCCESS:
            const { services } = action.payload;
            return {
                ...state,
                loading: false,
                services
            }
        case DB.GET_COMPUTERS_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_COMPUTERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_COMPUTERS_SUCCESS:
            const { computers } = action.payload;
            return {
                ...state,
                loading: false,
                computers
            }
        case DB.GET_CLIENTS_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_CLIENTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_CLIENTS_SUCCESS:
            const { clients } = action.payload;
            return {
                ...state,
                loading: false,
                clients
            }
        case DB.GET_VISITS_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_VISITS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_VISITS_SUCCESS:
            const { visits } = action.payload;
            return {
                ...state,
                loading: false,
                visits
            }
        case DB.GET_COMPETITIONS_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_COMPETITIONS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_COMPETITIONS_SUCCESS:
            const { competitions } = action.payload;
            return {
                ...state,
                loading: false,
                competitions
            }
        case DB.GET_SERVED_STARTED:
            return {
                ...state,
                loading: true
            }
        case DB.GET_SERVED_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DB.GET_SERVED_SUCCESS:
            const { served } = action.payload;
            return {
                ...state,
                loading: false,
                served
            }
        default:
            return state;
    }
}

export default dbReducer;