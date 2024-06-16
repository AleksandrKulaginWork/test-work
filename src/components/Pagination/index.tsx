import styles from './style.module.css';
import React, { Component } from 'react';
import { PaginationProps } from './interface';


class Pagination extends Component<PaginationProps> {
    renderPageNumbers() {
        const { currentPage, totalPages, onPageChange } = this.props;
        const pageNumbers: JSX.Element[] = [];

        pageNumbers.push(
            <button
                key={1}
                className={currentPage === 1 ? styles.active : ''}
                onClick={() => onPageChange(1)}
            >
                1
            </button>
        );

        if (currentPage > 3) {
            pageNumbers.push(<span key="dots1">...</span>);
        }

        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={currentPage === i ? styles.active : ''}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < totalPages - 2) {
            pageNumbers.push(<span key="dots2">...</span>);
        }

        if (totalPages > 1) {
            pageNumbers.push(
                <button
                    key={totalPages}
                    className={currentPage === totalPages ? styles.active : ''}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        return pageNumbers;
    }

    render() {
        return <div className={styles.pagination}>{this.renderPageNumbers()}</div>;
    }
}

export default Pagination;
