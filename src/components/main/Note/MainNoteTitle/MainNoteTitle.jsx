import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updateOneValue } from '../../../../action/notes'
import { useForm } from '../../../../hooks/useForm'
import { textAreaAdjust } from '../../../../utils/textAreaAdjust'

export const MainNoteTitle = ({ id, title }) => {

    const ref = useRef(null)
    const activeId = useRef(id)

    const dispatch = useDispatch()


    // El useForm solo se reinicializa una vez, lo tenemos que volver a llamar
    const [formValues, handleInputChange, reset] = useForm({
        main__input__title: title
    })


    const { main__input__title } = formValues


    useEffect(() => {
        ref.current.focus()
    }, [])

    useEffect(() => {
        textAreaAdjust(ref.current)


        if (id !== activeId.current) {
            ref.current.focus()
            reset({
                main__input__title: title
            })
            activeId.current = id
        } else {
            if (main__input__title !== title) {
                dispatch(updateOneValue({ title: main__input__title }))
            }
        }

    }, [main__input__title, id, reset, title, dispatch])

    return (
        <textarea
            className="section__input__title"
            ref={ref}
            id='main__input__title'
            name='main__input__title'
            placeholder='Title'
            value={main__input__title}
            onChange={handleInputChange}
            onKeyDown={() => textAreaAdjust(ref.current)}
        />
    )
}
