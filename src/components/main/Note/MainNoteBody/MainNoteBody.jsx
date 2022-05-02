import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updateOneValue } from '../../../../action/notes'

import { useForm } from '../../../../hooks/useForm'
import { textAreaAdjust } from '../../../../utils/textAreaAdjust'

export const MainNoteBody = ({ id, body }) => {

    const ref = useRef(null)
    const activeId = useRef(id)

    const dispatch = useDispatch()

    const [formValues, handleInputChange, reset] = useForm({
        main__input__body: body
    })

    useEffect(() => {
        textAreaAdjust(ref.current)
        if(activeId.current !== id) {
            reset({
                main__input__body: body
            })
            activeId.current = id
        }
        
    }, [body, reset, id])


    const { main__input__body } = formValues

    useEffect(() => {
        if (main__input__body !== body) {
            dispatch(updateOneValue({ body: main__input__body }))
        }
    }, [main__input__body, dispatch, body])

    return (
        <textarea
            spellCheck="false"
            ref={ref}
            id="section__text"
            name='main__input__body'
            className="section__text"
            value={main__input__body}
            placeholder='What you have to say?'
            onChange={handleInputChange}
            onKeyDown={() => textAreaAdjust(ref.current)}
        />
    )
}
