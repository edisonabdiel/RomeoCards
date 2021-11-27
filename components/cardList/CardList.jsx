import { useState, useEffect } from 'react';
//Ant Design Component
import { Input } from 'antd';
//Custom Components
import { UserCard } from '..';

import styles from './CardList.module.css';

const CardList = ({ usersData }) => {

    const [user, setUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        const filteredUsers = usersData?.filter(user => {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        );

        setUser(filteredUsers);
    }, [usersData, searchTerm]);

    const renderFilteredUsers = () => {
        return user.map(user => {
            return <UserCard key={user.id} user={user} />
        });
    }

    return (
        <>
            <div className={styles.search_bar }>
                <Input
                    placeholder="Search User by Name.."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '350px', height: '40px', borderRadius: '5px', padding: '10px', color: 'black' }} />
            </div>
            <div className={styles.container_cards}>
                {renderFilteredUsers()}
            </div>
        </>
    )
}

export default CardList;
