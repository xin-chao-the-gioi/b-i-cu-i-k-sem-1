import React from 'react';
import className from 'classnames/bind';
import styles from "./boxSearch.module.css";
import { Link } from 'react-router-dom';

let cx = className.bind(styles);

function BoxSearch({ keyWord, data, reset }) {
    return (
        <div>
            <div className={cx('box-search1', 'd-lg-block d-none','ml-5')}>
                <p className={cx('p-result',"pt-3",'font-weight-bold')}>Tìm kiếm: "{keyWord}"</p>
                {data.map((item, i) => {
                    return (
                        <Link className={cx('linkitem')} key={i} to={`/detail/${item.id}`} onClick={reset}>
                            <div className={cx('media', 'form-item')} key={item.id}>
                                <img src={item.img} alt="" className={cx('img-search')} />
                                <div className={cx("media-body")}>
                                    <h5 className={cx('fontname','pt-3')}>{item.name}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default BoxSearch