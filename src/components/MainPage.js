import React, {useEffect, useState} from "react";
import {Tabs, Tab} from 'react-bootstrap';
import DBComponent from "./dbComponent";

const MainPage = ({
    teams,
    getTeams,
    games,
    getGames,
    admins,
    getAdmins,
    rooms,
    getRooms,
    services,
    getServices,
    computers,
    getComputers,
    clients,
    getClients,
    visits,
    getVisits,
    competitions,
    getCompetitions,
    served,
    getServed
}) => {
    useEffect(() => {
        getTeams()
    }, [getTeams]);
    console.log('test');
    const [key, setKey] = useState();
    return (
        <Tabs
            activateKey={key}
            onSelect={(k) => {
                setKey(k);
                switch (k) {
                    case 'teams':
                        return getTeams();
                    case 'games':
                        return getGames();
                    case 'admins':
                        return getAdmins();
                    case 'rooms':
                        return getRooms();
                    case 'services':
                        return getServices();
                    case 'computers':
                        return getComputers();
                    case 'clients':
                        return getClients();
                    case 'visits':
                        return getVisits();
                    case 'competitions':
                        return getCompetitions();
                    case 'served':
                        return getServed();
                }
            }}
            className={"d-flex justify-content-between"}
            id={"test"}
        >
            <Tab
                title={'Команды'}
                eventKey={'teams'}
            >
                <DBComponent array={teams} />
            </Tab>
            <Tab title={'Игры'} eventKey={'games'}>
                <DBComponent array={games} />
            </Tab>
            <Tab title={'Соревнования'} eventKey={'competitions'}>
                <DBComponent array={competitions} />
            </Tab>
            <Tab title={'Клиенты'} eventKey={'clients'}>
                <DBComponent array={clients} />
            </Tab>
            <Tab title={'Посещения'} eventKey={'visits'}>
                <DBComponent array={visits} />
            </Tab>
            <Tab title={'Оказанные услуги'} eventKey={'served'}>
                <DBComponent array={served} />
            </Tab>
            <Tab title={'Услуги'} eventKey={'services'}>
                <DBComponent array={services} />
            </Tab>
            <Tab title={'Компьютеры'} eventKey={'computers'}>
                <DBComponent array={computers} />
            </Tab>
            <Tab title={'Залы'} eventKey={'rooms'}>
                <DBComponent array={rooms} />
            </Tab>
            <Tab title={'Администраторы'} eventKey={'admins'}>
                <DBComponent array={admins} />
            </Tab>
        </Tabs>
    );
}

export default MainPage;