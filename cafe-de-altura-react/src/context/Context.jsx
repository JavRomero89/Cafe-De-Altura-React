// ./context.jsx
import React, { createContext } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({children}) {

	return(
		<UserContext.Provider>
			{children}
		</UserContext.Provider>
	)
}