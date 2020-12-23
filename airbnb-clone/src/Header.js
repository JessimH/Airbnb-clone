import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>

            <div className="header__center">
                <input type="text" />
                <SearchOutlinedIcon />
            </div>

            <div className="header__right">
                <p>Devenez hôte</p>
                <LanguageIcon />
                <ExpandMoreOutlinedIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
