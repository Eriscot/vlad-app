import React from "react";
import {Container, Table} from "react-bootstrap";
import * as moment from "moment";

const DBComponent = ({
    array
}) => {
    console.log(array);
    return (
        <Container className={"my-2"}>
            <Table>
                <thead>
                {
                    array.length
                        ? Object.keys(array[0]).map(key => key !== 'Код' ? <th>{key}</th> : null)
                        : null
                }
                </thead>
                <tbody>
                {
                    array.length
                        ? array.map(team => (
                            <tr>
                                {
                                    Object.keys(team).map(key => key !== 'Код' ? (team[key] instanceof Date ? <td>{moment(team[key].toISOString()).format('yyyy-MM-DD')}</td> : <td>{team[key]}</td>) : null)
                                }
                            </tr>
                        ))
                        : null
                }
                </tbody>
            </Table>
        </Container>
    );
}

export default DBComponent;