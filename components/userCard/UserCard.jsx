import React from "react";
import classNames from "classnames";
import millify from "millify";
//Icons
import { AiFillHeart } from "react-icons/ai";
import { FaKissWinkHeart } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";

import styles from "./UserCard.module.css";

const UserCard = ({ users }) => {

    return (
        <>
            {users.map((user) => (
                <div className={classNames([styles.wrapper, styles.wrapperAnime])} key={user.id}>
                    <div className={styles.header}>
                        <div className={styles.imageWrapper}>
                            <img src={user?.picture?.url} className={styles.image} alt="profile pic" />
                        </div>
                        <div className={styles.badgeWrapper}>
                            <div
                                className={classNames([styles.dangerBadge, styles.badgeAnime])}
                            >
                                <AiFillHeart />
                            </div>
                            <div
                                className={classNames([
                                    styles.primaryBadge,
                                    styles.badgeAnime,
                                    "group",
                                ])}
                            >
                                <FaKissWinkHeart />
                            </div>
                        </div>
                    </div>
                    <div className={styles.textWrapper}>
                        <p className={styles.text_p}>"{user.headline}"</p>
                        <span>{user.online_status === "ONLINE"
                            ? <span className={styles.online}><HiOutlineStatusOnline /></span>
                            : <span className={styles.offline}><HiOutlineStatusOnline /></span> }</span>
                        <p className={styles.text}>{user?.personal.age}</p>
                        <h3 className={styles.text_distance}>{user?.location?.city} | {millify(user?.location?.distance)}m </h3>
                        <h1 className={styles.text}>{user.name}</h1>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserCard;