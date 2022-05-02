import { useDispatch } from "react-redux"

import { setActive } from "../../../action/notes"

export const SidebarListItem = ({ id, title, body, date, active }) => {

    const dispatch = useDispatch()

    const hanldeOpenEntry = () => {

        const note = {
            title,
            body,
            date
        }

        dispatch(setActive(id, note))
    }

    return (
        <div
            className={`aside__note ${active ? 'active' : ''}`}
            onClick={hanldeOpenEntry}
        >
            <h5 className="note__title">{title}</h5>
            <p className="note__text">
                {body}
            </p>
        </div>
    )
}
