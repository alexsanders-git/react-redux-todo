import { useDispatch } from 'react-redux';
import { removeTodoAsync, toggleTodoCompleteAsync } from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	return (
		<li>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(toggleTodoCompleteAsync(id))}
			/>
			<span>{title}</span>
			<span className='delete' onClick={() => dispatch(removeTodoAsync(id))}>
				&times;
			</span>
		</li>
	);
}

export default TodoItem;

