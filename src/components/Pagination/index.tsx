import React, { Component } from 'react';
import { PaginationProps } from './interface';


class Pagination extends Component<PaginationProps> {
    handlePageChange = (page: number) => {
        this.props.onPageChange(page);
    };
    
    render() {
        const { totalPages, currentPage } = this.props;
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
        
        return (
            <div>
                {pageNumbers.map(page => (
                    <button
                    key={page}
                    onClick={() => this.handlePageChange(page)}
                    disabled={page === currentPage}>
                        {page}
                    </button>
                ))}
            </div>
        );
    }
}

export default Pagination;
