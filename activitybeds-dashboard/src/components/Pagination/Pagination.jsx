import React from 'react';
import './Pagination.scss';

function Pagination({current, total, perPage}) {
    const totalPages = Math.ceil(total / perPage);
    // const startItem = (current - 1) * perPage + 1;
    // const endItem = Math.min(current * perPage, total);

    const pageNUmbers = []
    for(let i = 1; i <= Math.min(totalPages, 3); i++) {
        pageNUmbers.push(i)
    }

    return (
        <div className="pagination">
            <span className="results-count">{perPage} out of {total} results</span>
            <div className="page-controls">
                <button disabled={current === 1}>{'<'}</button>
                {pageNUmbers.map(num => (
                    <button key={num} className={current === num ? 'active' : ''}>{num}</button>
                ))}
                {totalPages > 3 && <span>...</span>}
                <button disabled={current === totalPages}>{'>'}</button>
            </div>
        </div>
        
    )
}

export default Pagination