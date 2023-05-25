import React from 'react';
import './Pagination.css';

interface CompProps {
  pages?: number;
  current?: number;
  onChange?: (page: number) => void;
  className?: string;
}

const elipsisLink = (key: string) => (
  <li className="page-item disabled" key={key}>
    <a className="page-link">
      <i className="bi bi-three-dots"></i>
    </a>
  </li>
);

const maxPages = 7;
const middle = maxPages % 2 === 0 ? maxPages / 2 : (maxPages + 1) / 2;

const Pagination = (props: CompProps): React.ReactElement => {
  const { pages = 1, current = 1, onChange, className } = props;

  const onPageChanged = (page: number) => {
    if (page > pages || page < 1 || page === current) return;
    onChange && onChange(page);
  };

  let middlePage = middle;
  if (pages > maxPages && current > middle && current < pages - middle + 1) {
    middlePage = current;
  } else if (pages > maxPages && current >= pages - middle + 1) {
    middlePage = pages - middle + 1;
  }
  const pagesToShow = Array.from(Array(Math.min(maxPages, pages))).map((_, i) => (
    <li
      className={`page-item ${current === middlePage + i - middle + 1 && 'active'}`}
      key={middlePage + i - middle + 1}
      onClick={() => onPageChanged(middlePage + i - middle + 1)}
    >
      <a className="page-link">{middlePage + i - middle + 1}</a>
    </li>
  ));

  if (pages > maxPages) {
    if (current > middle) {
      pagesToShow[1] = elipsisLink('left');
      pagesToShow[0] = (
        <li className="page-item" key={1} onClick={() => onPageChanged(1)}>
          <a className="page-link">1</a>
        </li>
      );
    }
    if (current < pages - middle + 1) {
      pagesToShow[maxPages - 2] = elipsisLink('right');
      pagesToShow[maxPages - 1] = (
        <li className="page-item" key={pages} onClick={() => onPageChanged(pages)}>
          <a className="page-link">{pages}</a>
        </li>
      );
    }
  }

  return (
    <nav aria-label="Page navigation">
      <ul className={'container'}>
        <li
          className={`page-item ${current === 1 && 'disabled'}`}
          onClick={() => onPageChanged(current - 1)}
        >
          <a className="page-link">
            <i className="bi bi-chevron-left"></i>
          </a>
        </li>
        {pagesToShow}
        <li
          className={`page-item ${current === pages && 'disabled'}`}
          onClick={() => onPageChanged(current + 1)}
        >
          <a className="page-link">
            <i className="bi bi-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
