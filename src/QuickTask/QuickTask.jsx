import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { ImCheckboxChecked } from 'react-icons/im';
import { ImCheckboxUnchecked } from 'react-icons/im';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <div>
            {
                tasks.map((t, i) => {
                    return (
                        <div key={i}>
                            <Form style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', padding: '5px' }}>

                                <Button onClick={() => { toggleDoneTask(i) }}>
                                    {
                                        t.done ?
                                            <ImCheckboxChecked />
                                            :
                                            <ImCheckboxUnchecked />
                                    }
                                </Button>

                                <p style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.name}</p>

                                <Button onClick={() => eliminar(i)}>
                                    <FaTrashAlt />
                                </Button>
                            </Form>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default QuickTask