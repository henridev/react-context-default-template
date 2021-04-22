
import React, { useReducer, createContext } from "react";

function contextCreator(reducer, actions, initState) {
	const Context = createContext(null);

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initState);
		const boundActions = {};

		for (const key in actions) {
			boundActions[key] = actions[key](dispatch);
		}
        
		return (
			<Context.Provider value={{ state, ...boundActions }}>
				{children}
			</Context.Provider>
		);
	};

	return { Context, Provider };
}

export default contextCreator;