import React, { Component } from 'react';
import react, { useState } from 'react';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import { Input } from '@material-ui/core';
import './styles.css'
import TodoList from './Todo_store';
import { Button } from '@material-ui/core'

const Todoweb = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const changeHandler = e => {
        setTask(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        const newTodos = [...todos, task];
        setTodos(newTodos);
        setTask("");
    }
    const deleteHandler = (indexValue) => {
        const newTodos = todos.filter((todo, index) => index !== indexValue);
        setTodos(newTodos);
    }
    return (
        <div class="Todo_Main_Container">

            <div class="Todo_Content_Container">
                <div class="Todo_Header">
                    <div class="list_image"><PlaylistAddCheckRoundedIcon id="list_icon" /></div>
                    <div class="Todo_Head">
                        <div class="Todo_App">To Do Apps</div>
                        <div class="Todo_Subhead">All Your to do list. Just check it whenever You done.</div>
                    </div>
                    <div class="Home_tab">
                        <a class="Home_link" href="https://vamsikrishna205.github.io/outlook/"><Button>Home</Button></a>
                    </div>
                </div>
                <div class="input_Container">
                    <form class="form_input1" onSubmit={submitHandler}>
                        <input class="input_field" type="text" name="task" value={task} onChange={changeHandler} placeholder="What needs to be done?" />
                        <input class="submit_but" type="submit" value="Press enter to submit task" name="Add" />
                    </form>

                </div>
                <p class="text_terms">
                    Once you submit, its mean you have agreed with our &nbsp;&nbsp;
                    <a class="link_terms" href="http://enlite.ux-maestro.com:3001/terms-conditions" target="_blank">terms &amp; conditions</a>
                </p>
                <TodoList todolist={todos} deleteHandler={deleteHandler} />
            </div>
        </div>
    )


}

export default Todoweb;