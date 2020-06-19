import { connect } from 'react-redux';

import MainPage from "../components/MainPage";
import {
    getAdmins,
    getClients, getCompetitions,
    getComputers,
    getGames,
    getRooms,
    getServices,
    getTeams,
    getVisits,
    getServed
} from "../redux/action/dbCreator";

const mapStateToProps = state => {
    return {
        teams: state.teams,
        games: state.games,
        admins: state.admins,
        rooms: state.rooms,
        services: state.services,
        computers: state.computers,
        clients: state.clients,
        visits: state.visits,
        competitions: state.competitions,
        served: state.served
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTeams: () => dispatch(getTeams()),
        getGames: () => dispatch(getGames()),
        getAdmins: () => dispatch(getAdmins()),
        getRooms: () => dispatch(getRooms()),
        getServices: () => dispatch(getServices()),
        getComputers: () => dispatch(getComputers()),
        getClients: () => dispatch(getClients()),
        getVisits: () => dispatch(getVisits()),
        getCompetitions: () => dispatch(getCompetitions()),
        getServed: () => dispatch(getServed())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);