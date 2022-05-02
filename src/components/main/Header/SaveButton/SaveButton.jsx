import { useDispatch } from "react-redux"
import { startSaveNote } from "../../../../action/notes"

export const SaveButton = () => {

    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(startSaveNote())
    }

    return (
        <button
            className="aside__header__new_note"
            onClick={handleSave}
        >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="to_left__icon" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                <path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z">
                </path>
            </svg>
        </button>
    )
}