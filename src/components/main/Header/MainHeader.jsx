import { useSelector } from 'react-redux'
import { CollapseMainButton } from './CollapseMainButton/CollapseMainButton'
import { DeleteButton } from './DeleteButton/DeleteButton'
import { InfoButton } from './InfoButton/InfoButton'
import { SaveButton } from './SaveButton/SaveButton'


export const MainHeader = () => {

    const { active } = useSelector(state => state.notes)

    return (
        <div className="aside__header">
            <CollapseMainButton />
            <div className='aside__right-buttons'>
                {
                    active &&
                    (
                        <>
                            <SaveButton />
                            <DeleteButton />
                        </>
                    )
                }
                <InfoButton />
            </div>

        </div>
    )
}
