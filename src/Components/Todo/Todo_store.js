import react, { useState } from 'react';
import './styles.css'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';



const TodoList = ({ todolist, deleteHandler }) => {
    return (
        <div>
            {todolist.map((todo, index) =>
                <div key={index} class="todo_class">

                    <div class="to_log">
                        <div class="tick_but">
                            <button class="del_but" id="but" ><CheckRoundedIcon /></button>
                        </div>
                        <div class="cont_to" id="strike">{todo}  &nbsp; </div>
                        <div class="icons_cont">
                            <button class="del_but"><EditIcon /></button>
                            <button class="del_but" onClick={() => deleteHandler(index)}><DeleteRoundedIcon /></button>
                        </div>

                    </div>
                    <Divider />
                </div>
            )
            }
        </div>
    )
}

export default TodoList;