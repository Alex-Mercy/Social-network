import React, { useEffect, useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";


const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItmesCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(Math.ceil(props.currentPage/portionSize));
    }, [props.currentPage]);
    
    return (
        
        <div className={styles.paginator}>
            
            {portionNumber > 1 && 
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            
            {pages
            .filter (p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                     [styles.selectedPage] : props.currentPage === p
                    }, styles.pageNumber) }
                key ={p} 
                onClick={(e) => {
                     props.onPageChanged(p); 
                    }}> {p}</span>
            })}
            {portionCount > portionNumber && 
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
                


        </div>
    )
}


export default Paginator;