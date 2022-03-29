import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
    useHistory,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import TodoForm from '../../components/TodoForm';
// import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [filterdStatus, setFilterdStatus] = useState(() => {
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);

        setFilterdStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        console.log(todo, idx);
        // togle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        newTodoList[idx] = newTodo;
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        // setFilterdStatus('all');

        const queryParams = { status: 'all' };

        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowCompletedClick = () => {
        // setFilterdStatus('completed');

        const queryParams = { status: 'completed' };

        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowNewClick = () => {
        // setFilterdStatus('new');

        const queryParams = { status: 'new' };

        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const renderTodoList = useMemo(() => {
        return todoList.filter(
            (todo) => filterdStatus === 'all' || filterdStatus === todo.status
        );
    }, [todoList, filterdStatus]);

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default ListPage;
