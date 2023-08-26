import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { ImCheckboxChecked } from 'react-icons/im';
import { ImCheckboxUnchecked } from 'react-icons/im';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Components/TaskListContainer/taskListContainer.css'
import ListGroup from 'react-bootstrap/ListGroup';


const QuickTask = ({ tasks, setTasks }) => {

    const toggleDoneTask = (i) => {
        const newTasks = [...tasks]
        newTasks[i].done = !newTasks[i].done
        setTasks(newTasks)
    }

    const eliminar = (i) => {
        const newTasks = [...tasks]
        newTasks.splice(i, 1)
        setTasks(newTasks)
    }


    return (
        <div className='card__style'>
            {
                tasks.map((t, i) => {
                    return (
                        <Card key={i} >
                            <ListGroup className="list-group-flush" key={i}>

                                <Form style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', padding: '5px' }}>

                                    <p style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.name}</p>

                                    <Button onClick={() => { toggleDoneTask(i) }}>
                                        {
                                            t.done ?
                                                <ImCheckboxChecked />
                                                :
                                                <ImCheckboxUnchecked />
                                        }
                                    </Button>

                                    <Button onClick={() => eliminar(i)}>
                                        <FaTrashAlt />
                                    </Button>
                                </Form>
                            </ListGroup>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default QuickTask