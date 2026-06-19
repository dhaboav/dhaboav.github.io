interface bolgos {
  index: number;
  currentPage: number;
  searchQuery: string;
}

export const useBlog = ({index, currentPage, searchQuery}: bolgos) => {
  const globalIndex = currentPage === 1 ? index : 8 + (currentPage - 2) * 9 + index;
  const isHero = globalIndex === 0 && searchQuery === '';
  let gridColumnClass = 'lg:col-span-4 border-b border-slate-200 pb-12';
  if (isHero) {
    gridColumnClass =
      'lg:col-span-12 border-b-2 border-slate-900 pb-16 lg:grid lg:grid-cols-12 lg:gap-12';
  } else if (currentPage === 1 && searchQuery === '') {
    switch (index) {
      case 1:
      case 7:
        gridColumnClass = 'lg:col-span-8 border-b border-slate-200 pb-12';
        break;
      default:
        gridColumnClass = 'lg:col-span-4 border-b border-slate-200 pb-12';
        break;
    }
  }

  return {
    isHero,
    gridColumnClass
  };
}