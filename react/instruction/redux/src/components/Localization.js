import React from 'react'
import { Dropdown, FormSelect } from 'react-bootstrap';
import { languagesList } from '../utils/languages/lang';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../store/language/languageSlice';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

const Localization = () => {
    const dispatch = useDispatch();

    const languageState = useSelector(state => state.language);
    console.log(languageState.language);

    const handleSelect = (lang) => {
        dispatch(toggleLanguage(lang))
    }

    return (
        <Dropdown className='my-5'>
            <Dropdown.Toggle>
                Dil Secin
            </Dropdown.Toggle>
            <DropdownMenu>
                {
                    languagesList.map((lang) => {
                        return (
                            <DropdownItem
                                onClick={() => handleSelect(lang)}
                                key={lang}
                                value={lang}
                            >
                                {lang}
                            </DropdownItem>
                        )
                    })
                }
            </DropdownMenu>
        </Dropdown>
    )
}

export default Localization