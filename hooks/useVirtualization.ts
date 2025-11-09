// hooks/useVirtualization.ts
import { useState } from "react";

type UseVirtualizationProps<T> = {
  items: T[];
  rowHeight: number;
  containerHeight: number;
};

export const useVirtualization = <T>({
  items,
  rowHeight,
  containerHeight,
}: UseVirtualizationProps<T>) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = Math.ceil(containerHeight / rowHeight);

  const handleScroll = (scrollTop: number) => {
    const newStartIndex = Math.floor(scrollTop / rowHeight);
    setStartIndex(newStartIndex);
  };

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return {
    startIndex,
    visibleCount,
    visibleItems,
    handleScroll,
    totalHeight: items.length * rowHeight,
  };
};
