import userSlice from "../components/user/userSlice";

const actions = userSlice.actions;

export const fetchUserMiddleware = () => {
    return async (dispatch) => {
        try {
            dispatch(actions.userLoading())
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
            const data = await resp.json();
            dispatch(actions.userData(data))
        } catch (error) {
            dispatch(actions.userError())
        }
    }
}
