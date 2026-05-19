import React, { useReducer, useState } from 'react';
import {
  todoReducer,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO
} from '../reducers/todoReducer';

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch({ type: ADD_TODO, payload: text });
      setText('');
    }
  };

  const saveEdit = (e) => {
    e.preventDefault();

    dispatch({
      type: EDIT_TODO,
      payload: { id: editId, text: editText }
    });

    setEditId(null);
    setEditText('');
  };

  return (
    <div className="card">
      <h2>Liste de tâches</h2>

      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button>Ajouter</button>
      </form>

      {todos.length === 0 && <p>Aucune tâche pour le moment.</p>}

      {todos.map((todo) => (
        <div key={todo.id} className="card">
          {editId === todo.id ? (
            <form onSubmit={saveEdit}>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button>Enregistrer</button>
              <button type="button" onClick={() => setEditId(null)}>
                Annuler
              </button>
            </form>
          ) : (
            <>
              <span
                onClick={() =>
                  dispatch({ type: TOGGLE_TODO, payload: todo.id })
                }
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
                }}
              >
                {todo.text}
              </span>

              <div>
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  Modifier
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: DELETE_TODO, payload: todo.id })
                  }
                >
                  Supprimer
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;